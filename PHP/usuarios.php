<?php
    require_once  'index.php';

    //añadir usuario

    $con = new Api();
    if($_SERVER['REQUEST_METHOD'] == 'POST'){
        if(isset($_POST['nombre_usuario']) && isset($_POST['correo']) && isset($_POST['contraseña']) && $_POST['localidad']){
            $nombre = $_POST['nombre_usuario'];
            $correo = $_POST['correo'];
            $contraseña = $_POST['contraseña'];
            $localidad = $_POST['localidad'];

            $sql = "INSERT INTO usuarios (nombre_usuario, correo, contraseña, localidad)
            VALUES ('$nombre', '$correo', '$contraseña', '$localidad')";
            try{
                $con->query($sql);
                header("HTTP/1.1 201 Created");
                echo json_encode($con->insert_id);
            }catch (mysqli_sql_exception $e){
                header("HTTP/1.1 400  Bad Request");
            }
        }else{
            header("HTTP/1.1 400 Bad Request");
        }
    }

 ?>