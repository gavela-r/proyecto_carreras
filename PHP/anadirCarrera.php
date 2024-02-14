<?php
    require_once './index.php';

    //añadir carreras

    $con = new Api();

    if($_SERVER['REQUEST_METHOD'] == 'POST'){
        $datos = json_decode(file_get_contents("php://input"), true);
            if($datos != null){
                $nombre = $datos['nombre'];
                $fecha = $datos['fecha'];
                $distancia = $datos['distancia'];
                $localidad = $datos['localidad'];
                $numero = $datos['numero'];
                $foto = $datos['fotos'];
               
               $sql = "INSERT INTO añadir_carreras (nombre_carrera, fecha, distancia, localidad, numero_participantes, fotos)
                        VALUES('$nombre', '$fecha', '$distancia', '$localidad', '$numero', '$foto')";
              
                try{
                    $con->query($sql);
                    header("HTTP/1.1 201 Created");
                    echo json_encode($con->insert_id);
                
                }catch (mysqli_sql_exception $e){
                    header("HTTP/1.1 400 fallo");
                }

            }else{
                header("HTTP/1.1 400 Bad Request");
            }
            
}


?>