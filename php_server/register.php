<?php
require 'connect.php';
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: Origin, Methods, Content-Type, Authorization");
 
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);
     
    $email = $request->email;
    $name = $request->username;
    $password = $request->password;
    $password = password_hash($password, PASSWORD_DEFAULT);
    $sql = "SELECT * FROM users WHERE email='" . $email . "'";
    $result = mysqli_query($db, $sql);

    
    if(mysqli_num_rows($result) == 0){
        $sql = "INSERT INTO users (email,name,password,s_Table) VALUES ('$email','$name','$password','')";
        if(mysqli_query($db,$sql)){
            http_response_code(201);
        }
        else{
            echo "Error creating table: " . mysqli_error($conn);
            http_response_code(401); 
        }
    }
    else{
         http_response_code(401); 
    }
         
}
?> 