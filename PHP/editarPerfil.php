<?php
require_once './index.php';
require_once '../vendor/autoload.php';
use \Firebase\JWT\JWT;
// Función para decodificar el token
function decodificarToken($token) {
    $key = 'proyectoDeAdrian'; // Clave secreta usada para codificar el token
    try {
        // Decodificar el token
        $decoded = JWT::decode($token, $key, array('HS256'));
        // Devolver los datos decodificados
        return $decoded;
    } catch (mysqli_sql_exception $e) {
        return null; // Si hay algún error, devolver null
    }
}

$con = new Api();

if ($_SERVER['REQUEST_METHOD'] == 'PUT') {
    // Obtener el token del header Authorization
   // Obtener el token del header Authorization
    $token = isset($_SERVER['HTTP_AUTHORIZATION']) ? $_SERVER['HTTP_AUTHORIZATION'] : '';

    // Verificar si se ha proporcionado un token
    if (!$token) {
        header("HTTP/1.1 401 unauthorized");
        exit;
    }


    // Decodificar el token
    $tokenDecodificado = decodificarToken($token);

    // Verificar si el token es válido
    if (!$tokenDecodificado) {
        header("HTTP/1.1 401 Unauthorized");
        exit;
    }

    // Extraer el correo electrónico del usuario del token decodificado
    $correoUsuario = $tokenDecodificado->correo;

    // Obtener los datos del formulario
    $datos = json_decode(file_get_contents("php://input"), true);

    // Verificar si se han proporcionado los datos del formulario
    if ($datos != null) {
        $nombreUsuario = $datos['nombre'];
        $correo = $datos['correo'];
        $contraseña = $datos['contraseña'];
        $peso = $datos['peso'];
        $altura = $datos['altura'];

        // Verificar si el correo del usuario del token coincide con el correo proporcionado en el formulario
        if ($correoUsuario !== $correo) {
            header("HTTP/1.1 403 Forbidden");
            exit;
        }

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
} else {
    header("HTTP/1.1 400 Bad Request");
}
?>
