<?php
$servername = "localhost";
$username = "asddzxcc1856";
$password = "asddzxcc1857";
$database= "react";
 
// Create connection
$db = mysqli_connect($servername, $username, $password, $database);
 
// Check connection
if ($db->connect_error) {
  die("Connection failed: " . $db->connect_error);
}
?>