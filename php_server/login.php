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

$payload = [
    'exp' => time() + 10000,
    'uId' => 0,
];

$response = (object) array(
    'code' => 0,
    'message' => '',
    'data' => (object) array(
        'JWT' => '',
    ),
);


$postdata = file_get_contents("php://input");
if (isset($postdata) && !empty($postdata)) {
    $request = json_decode($postdata);

    $email = $request->email;
    $password = $request->password;
    $sql = "SELECT * FROM users WHERE email='" . $email . "'";
    $result = mysqli_query($db, $sql);
    $verify = mysqli_fetch_assoc($result)["password"];
    if (mysqli_num_rows($result) == 1 && password_verify($password, $verify)) {
        $response->code = 1;
        $response->message = 'login success';
        $payload["uId"] = $email;    //把uId放入payload

        $jwt = JWT::encode($payload, $secretkey, 'HS256'); //放入payload 跟 金鑰，製造token
        $response->data->JWT = $jwt;    //把token放入 回傳json 的 JWT欄位
        echo json_encode($response);
        http_response_code(200);
    } else {
        $response->message = 'login unsuccessful';
        echo json_encode($response);
        http_response_code(401);
    }
}
