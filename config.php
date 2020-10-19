<?php
    $server = 'localhost';
	$user = 'rahimi';
	$password = 'rahimi1498';
	$db = 'maquette';
	$link = mysqli_connect($server, $user, $password, $db);
	if(!$link){
		die(" Connexion failed : ".mysqli_connect_error());
					}
 mysqli_set_charset($link,"utf8");

?>
