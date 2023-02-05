<?php

declare(strict_types=1);
require 'connect.php';

require "vendor/autoload.php";

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: Origin, Methods, Content-Type, Authorization");


$secret = "secret.txt";
$handle = fopen($secret, "r");
$secretkey = fread($handle, filesize($secret));
fclose($handle);

$response = (object) array(
    'code' => 0,
    'message' => ''
);


$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
    $request = json_decode($postdata);
    $jwt = $request->key;
    try {
        $decode = JWT::decode($jwt, new Key($secretkey, 'HS256'));
        $response->code = 1;
        $response->message = $decode->uId;
        echo json_encode($response);
        http_response_code(200);
    } catch (UnexpectedValueException $e){
        $response->message = 'login unsuccessful';
        echo json_encode($response);
        http_response_code(401);
    }
}
