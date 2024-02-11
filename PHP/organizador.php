<?php
    require_once './index.php';

    //añadir organizador

    $con = new Api();

    if($_SERVER['REQUEST_METHOD'] == 'POST'){
       $datos = json_decode(file_get_contents("php://input"), true);
       
        if($datos != null){
            $nombre = $datos['nombre'];
            $correo = $datos['correo'];
            $contraseña = $datos['contraseña'];
            $localidad = $datos['localidad'];
            $telefono = $datos['telefono'];
            $club = $datos['club'];
            
            try{
                $sql2 = "SELECT nombre_usuario FROM organizador WHERE nombre_usuario = '$nombre' OR correo = '$correo'";
                $resultado = $con->query($sql2);
                $usuario = $resultado ->fetch_all(MYSQLI_ASSOC);
                print_r($resultado);
                if($usuario != null){
                    header("HTTP/1.1 201 Created");
                    die();
                }

            }catch(mysqli_sql_exception $e){
                header("HTTP/1.1 400 Bad Request");
            }

            $password = password_hash($contraseña, PASSWORD_BCRYPT);
            $sql = "INSERT INTO organizador (nombre_usuario, correo, contraseña, localidad, telefono, club)
            VALUES ('$nombre', '$correo', '$password', '$localidad', '$telefono', '$club')";
            try{
                $con->query($sql);
                header("HTTP/1.1 201 Creted");
                echo json_encode($con->insert_id);
            }catch (mysqli_sql_exception $e){
                header("HTTP/1.1 400 error");
            }
        }else{
            header("HTTP/1.1 400 fallo");
        }
    }
            

?>