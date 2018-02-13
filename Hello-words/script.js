	function getXhr(){
		var xhr = null; 
		if(window.XMLHttpRequest) // Firefox et autres
		   xhr = new XMLHttpRequest(); 
		else if(window.ActiveXObject){ // Internet Explorer 
		   try {
					xhr = new ActiveXObject("Msxml2.XMLHTTP");
				} catch (e) {
					xhr = new ActiveXObject("Microsoft.XMLHTTP");
				}
		}
		else { // XMLHttpRequest non supporté par le navigateur 
		   alert("Votre navigateur ne supporte pas les objets XMLHTTPRequest..."); 
		   xhr = false; 
		} 
						return xhr;
	}

	/**
	* Méthode qui sera appelée à la suite de la validation réussie du formulaire
	*/
	function go(){
		var xhr = getXhr();
		// On définit ce qu'on va faire quand on aura la réponse
		xhr.onreadystatechange = function(){
			// On ne fait quelque chose que si on a tout reçu et que le serveur est ok
			if(xhr.readyState == 4 && xhr.status == 200){
				reponse = xhr.responseText;
				// On réinitialise le champ rechercher
				document.getElementById('rechercher').value = "";
			   // On se sert de innerHTML pour afficher le message retourné par le serveur
			   reponse = xhr.responseText;
			   document.getElementById('messages').innerHTML = reponse;
			}
		}
		
		// Ici on va voir comment faire du post
		xhr.open("POST","liste.php",true);
		// Ne pas oublier ça pour le post
		xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
		// Ne pas oublier de poster les arguments
		// Ici, la valeur de l'option critère et le mot recherché
		sel = document.getElementById('libcritere');
		idcritere = sel.options[sel.selectedIndex].value;
		msg = document.getElementById('rechercher').value;
		//Envoi des paramètres
		xhr.send("critere="+idcritere+"&rechercher="+msg);
		
	}