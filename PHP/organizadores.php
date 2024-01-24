<?php
    require_once 'index.php';

    //añadir organizador

    $con = new Api();

    if($_SERVER['REQUEST_METHOD'] == 'POST'){
        if(isset($_POST['nombre_usuario']) && isset($_POST['correo']) && isset($_POST['contraseña']) && isset($_POST['localidad']) && isset($_POST['telefono']) && isset($_POST['club'])){
            $nombre = $_POST['nombre_usuario'];
            $correo = $_POST['correo'];
            $contraseña = $_POST['contraseña'];
            $localidad = $_POST['localidad'];
            $telefono = $_POST['telefono'];
            $club = $_POST['club'];

            $sql = "INSERT INTO organizador (nombre_usuario, correo, contraseña, localidad, telefono, club)
                    VALUES ('$nombre', '$correo', '$contraseña', '$localidad', '$telefono', '$club')";
            try{
                $con->query($sql);
                header("HTTP/1.1 201 Created");
                echo json_encode($con->insert_id);
            }catch (mysqli_sql_exception $e){
                header("HTTP/1.1 400 Bad Request");
            }
        }else{
            header("HTTP/1.1 400 Bad Request");
        }
    }
    exit;

?>