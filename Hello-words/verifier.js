function verifAuteur()
{
   if(form.auteur.value.length <= 0)
   {
	  document.getElementById('erreur_auteur').innerHTML = 'Le nom est requis!';
	  document.getElementById('erreur_auteur').style.fontWeight = 'bold';
	  document.getElementById('erreur_auteur').style.color = 'red';
      return false;
   }else if(form.auteur.value.length < 4 || form.auteur.value.length > 15){
	 
	  document.getElementById('erreur_auteur').innerHTML = 'Saisir au moins 4 caracteres et 15 au maximum!';
	  document.getElementById('erreur_auteur').style.fontWeight = 'bold';
	  document.getElementById('erreur_auteur').style.color = 'red';
      return false;
   }
   else
   {
      document.getElementById('erreur_auteur').innerHTML = '';
      return true;
   }
}


function verifMessage()
{
	if(form.message.value.length <= 0)
	   {
		  document.getElementById('erreur_message').innerHTML = 'Le message est requis!';
		  document.getElementById('erreur_message').style.fontWeight = 'bold';
		  document.getElementById('erreur_message').style.color = 'red';
		  return false;
	   }else if(form.message.value.length > 200){
		 
		  document.getElementById('erreur_message').innerHTML = 'Saisir au maximum 200 caracteres!';
		  document.getElementById('erreur_message').style.fontWeight = 'bold';
		  document.getElementById('erreur_message').style.color = 'red';
		  return false;
	   }
	   else
	   {
		  document.getElementById('erreur_message').innerHTML = '';
		  return true;
	   }
   
}

function verifier()
{
  var pseudoOk = verifAuteur();
  var msgOk = verifMessage();
   
  if(pseudoOk && msgOk){
	go();
   }  
   else
   {
      return false;
   }

}

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
				// On réinitialise les champs auteur et message
				document.getElementById('auteur').value = "";
				document.getElementById('message').value = "";
				alert("Votre message est enregistré avec succès!");
			}
		}
		
		// Ici on va voir comment faire du post
		xhr.open("POST","traitement.php",true);
		// Ne pas oublier ça pour le post
		xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
		// Ne pas oublier de poster les arguments
		// Ici, la valeur du champ de l'auteur et son message
		auteur = document.getElementById('auteur').value;
		message = document.getElementById('message').value;
		//Envoi des paramètres
		xhr.send("auteur="+auteur+"&message="+message);
		
	}