<?php
require_once './index.php';
require_once '../vendor/autoload.php';
use Firebase\JWT\Key;
use \Firebase\JWT\JWT;

$con = new Api();

if($_SERVER['REQUEST_METHOD'] === 'GET'){
    $headers = getallheaders();

    if(isset($headers['Authorization'])){
        $jwt = $headers['Authorization'];
        $key = 'proyectoDeAdrian';

        try{
            $decode = JWT::decode($jwt, new Key($key, 'HS256'));
            
        }catch(mysqli_sql_exception $e){
            header("HTTP/1.1 401 Unauthorized");
        }
    }else{
        header("HTTP/1.1 400 Unauthorized");
    }
    exit;
}
header("HTP/1.1 400 Bad Request");
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $datos = json_decode(file_get_contents('php://input'));
    // Verificar si se han proporcionado los datos del formulario
    if ($datos != null) {
        $nombreUsuario = $datos->nombre;
        $correo = $datos->correo;
        $contraseña = password_hash($datos->contraseña, PASSWORD_BCRYPT);
        $peso = $datos->peso;
        $altura = $datos->altura;

        // Actualizar los datos del perfil del usuario en la base de datos
        $sql = "UPDATE organizador SET nombre_usuario = '$nombreUsuario', contraseña = '$contraseña', peso = '$peso', altura = '$altura' WHERE correo = '$correo'";
        try {
            $con->query($sql);
            header("HTTP/1.1 200 OK");
            echo json_encode(array("message" => "Perfil actualizado correctamente"));
        } catch (mysqli_sql_exception $e) {
            header("HTTP/1.1 400 Bad Request");
        }
    } else {
        header("HTTP/1.1 400 Bad Request");
    }
}





?>
