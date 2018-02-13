<?php
	include "connexion.php";
	$bdd = getBDD();
	
	if(isset($_POST['critere']) && isset($_POST['rechercher'])){
	switch ($_POST['critere']){
		case 0 :
		{
			$requete = $bdd->query('SELECT * FROM donnees');
		}break;
		
		case 1 :
		{
			$requete = $bdd->prepare('SELECT * FROM donnees WHERE auteur=?');
			$requete->execute(array($_POST['rechercher']));
		}break;	
		
		case 2 :
		{
			$requete = $bdd->prepare('SELECT * FROM donnees WHERE message LIKE ?');
			$requete->execute(array('%'.$_POST['rechercher'].'%'));
		}break;	
		
		default:
		{
			$requete = $bdd->query('SELECT * FROM donnees');
		}
	}	

   }
   else
   {   
		$requete = $bdd->query('SELECT * FROM donnees');
   }
    if($requete->rowcount()!=0){
	while($donnees = $requete->fetch()){
		$auteur = $donnees['auteur'];
		$message = $donnees['message'];
		$id = $donnees['id'];
	echo "<p id=\"" . $donnees['id'] . "\"><span class='pseudo'>" . $donnees['auteur'] . "</span> a dit : " . $donnees['message'] . "</p>";
	}
	$requete->closeCursor();
   }
   else
   {
	echo"Aucun résultat!";
   }
?>