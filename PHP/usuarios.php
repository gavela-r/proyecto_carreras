<?php


    require_once  'index.php';

    //añadir usuario

    $con = new Api();
   
    if($_SERVER['REQUEST_METHOD'] == 'POST'){
        $datos = json_decode(file_get_contents("php://input"), true);
        if($datos != null){
            $nombre = $datos['nombre'];
            $correo = $datos['correo'];
            $contraseña = $datos['contraseña'];
            $localidad = $datos['localidad'];


            try{
                $sql2 = "INSERT nombre_usuario FROM usuarios WHERE nombre_usuario = '$nombre' OR correo = '$correo' OR telefono = '$telefono'";
                $resultado = $con->query($sql2);
                $usuario = $resultado->fetch_all(MYSQLI_ASSOC); 

                if($usuario != null){
                    header("HTTP/1.1 400 Bad Request");
                    die();
                }
               
            }catch(mysqli_sql_exception $e){
                header("HTTP/1.1 400 Bad Request");
            }

            $password = password_hash($contraseña, PASSWORD_BCRYPT);
            $sql = "INSERT INTO usuarios (nombre_usuario, correo, contraseña, localidad)
            VALUES ('$nombre', '$correo', '$password', '$localidad')";
            try{
                $con->query($sql);
                header("HTTP/1.1 201 Created");
                echo json_encode($con->insert_id);
            }catch (mysqli_sql_exception $e){
                header("HTTP/1.1 400  Bad Request");
            }
        }else{
            header("HTTP/1.1 400 no funciona");
        }
    }

 ?>