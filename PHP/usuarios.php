<?php

    require_once  'index.php';
    
    $con = new Api();
    
        if ($_SERVER['REQUEST_METHOD'] == 'GET'){
            try{
                $sql = "SELECT * from usuarios";
                $resultado = $con->query($sql);
                $usuarios = $resultado->fetch_all(MYSQLI_ASSOC);
                header("HTTP/1.1 200 OK");
                echo json_encode($usuarios);
            }catch (mysqli_sql_exception $e){
                header("HTTP/1.1 404 Not Found");
            }
            exit;
        }
        header("HTTP/1.1 400 Bad Request");


?>