<?php
require_once './index.php';

$con = new Api();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $datos = json_decode(file_get_contents("php://input"), true);

    if ($datos != null) {
        $nombre = $datos['nombre'];
        $correo = $datos['correo'];
        $contraseña = $datos['contraseña'];
        $localidad = $datos['localidad'];
        $peso = $datos['peso'];
        $altura = $datos['altura'];
        $telefono = isset($datos['telefono']) ? $datos['telefono'] : null;
        $club = isset($datos['club']) ? $datos['club'] : null;

        // Verifica si es un organizador
        $es_organizador = isset($datos['organizador']) && $datos['organizador'] === 'SI';
        
        try {
            // Verifica si el usuario ya existe en la base de datos
            $tabla = $es_organizador ? 'organizador' : 'usuarios';
            $sql = "SELECT nombre_usuario FROM $tabla WHERE nombre_usuario = '$nombre' OR correo = '$correo'";
            $resultado = $con->query($sql);
            $usuario_existente = $resultado->fetch_all(MYSQLI_ASSOC);

            if ($usuario_existente != null) {
                
                header("HTTP/1.1 400 bad Request");
                die();
            }
        } catch (mysqli_sql_exception $e) {
            header("HTTP/1.1 400 Bad Request");
        }

        $password = password_hash($contraseña, PASSWORD_BCRYPT);
        $sql = "INSERT INTO $tabla (nombre_usuario, correo, contraseña, localidad, peso, altura";

        // Si es organizador, añade los campos adicionales
        if ($es_organizador) {
            $sql .= ", telefono, club";
        }

        $sql .= ") VALUES ('$nombre', '$correo', '$password', '$localidad', '$peso', '$altura'";

        // Si es organizador, añade los valores de telefono y club
        if ($es_organizador) {
            $sql .= ", '$telefono', '$club'";
        }

        $sql .= ")";
        
        try {
            $con->query($sql);
            header("HTTP/1.1 201 Created");
            echo json_encode($con->insert_id);
        } catch (mysqli_sql_exception $e) {
            header("HTTP/1.1 400 error");
        }
    } else {
        header("HTTP/1.1 400 fallo");
    }
}
?>


