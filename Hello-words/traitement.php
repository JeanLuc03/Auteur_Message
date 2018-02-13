<?php

	if(isset($_POST['auteur']) && isset($_POST['message']) ){
		$auteur = $_POST['auteur'];
		$message = $_POST['message'];
		
		$tail_aut= strlen($auteur);
		$tail_msg= strlen($message);
		
		if($auteur == ''){
			echo 'Le nom est requis';
		}
		elseif($message == ''){
			echo 'Le message est requis';
		}
		elseif($tail_msg > 200){
			echo 'Le message est trop long';
		}
		elseif($tail_aut < 4){
			echo 'Le nom est trop court';
		}
		else{
			try
			{
				$pdo_options[PDO::ATTR_ERRMODE] = PDO::ERRMODE_EXCEPTION;
				$bdd = new PDO('mysql:host=localhost;dbname=searchbase', 'root', '',$pdo_options);
			}catch (Exception $e)
			{
				die('Erreur:' .$e->getMessage());
			}
			if(!empty($_POST['auteur']) AND !empty($_POST['message'])){
				$auteur = ($_POST['auteur']);
				$message = ($_POST['message']);
				
				$insertion = $bdd -> prepare('INSERT INTO donnees VALUES (\'\', :auteur, :message)');
				$insertion -> execute(array('auteur'=> $auteur,'message'=> $message));
			}else{
				echo 'Vous devez remplir tous les champs!';
			}
		}
	}
?>