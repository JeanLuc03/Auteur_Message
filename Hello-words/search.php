<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
	<meta charset="utf-8">
	<title>Page de recherche</title>
	<link href="style2.css" rel="stylesheet" type="text/css">
	<script type="text/javascript" src="script.js"></script>
	</head>

	<body>
		<p>
		<h2>Recherche</h2>
		</p>
			<form method="post">
				<table>
				  <tr>
					<td><label>Critère de recherche</label></td>
						<td>
							<select name="libcritere" id="libcritere">
							<option value="0">--Aucun--</option>
							<option value="1">--Auteur--</option>
							<option value="2">--Message de l'auteur--</option>
							</select>
						</td>
						<td ><input name= "rechercher" id="rechercher" type="text" autocomplete="off" /></td>
						<td><input type="button" value="Rechercher" onclick="go()" /></td>
					</tr>
				</table>
			</form>
			
			<span><a href="./index.html">Revenir a la page d'acceuil</a></span>
			
			<div id="messages" class="list">
			<?php
				if(!isset($_POST['critere']) && !isset($_POST['rechercher'])){
					include "liste.php";
				}
			?>
			</div>
			
		<footer><p>Copyright - Tous droits réservés<br /></footer>
	</body>
</html>