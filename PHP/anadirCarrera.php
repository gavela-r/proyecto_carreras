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
               
               $sql = "INSERT INTO añadir_carrera (nombre_carrera, fecha, distancia, localidad, numero_participantes)
                        VALUE('$nombre', '$fecha', '$distancia', '$localidad', '$numero')";
              
                try{
                    $con ->query($sql);
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