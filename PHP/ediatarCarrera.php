<?php
    require_once './index.php';

    $con = new Api();

    if($_SERVER['REQUEST_METHOD'] == 'POST'){
        $datos = json_decode(file_get_contents('php://input'));
        if($datos != null){
            $nombre = $datos['nombre'];
            $fecha = $datos['fecha'];
            $distancia = $datos['distancia'];
            $localidad = $datos['localidad'];
            $numero = $datos['numero'];
            $foto = $datos['fotos'];

            $sql = "UPDATE añadir_carreras SET nombre_carrera = '$nombre', fecha = '$fecha', distancia = '$distancia', localidad = '$localidad', numero_participantes = '$numero', fotos = '$fotos'";

            try{
                $resultado = $con->query($sql);
                header("HTTP/1.1 201 Modificado");
                
            }catch(mysqli_sql_exception $e){
                header("HTTP/1.1 400 fallo");
            }
        }else{
            header("HTTP/1.1 400 Bad Request");
        }
    }

?>