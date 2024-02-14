<?php
    require_once "./index.php";

    $con = new Api();

    if($_SERVER["REQUEST_METHOD"] == "POST"){
        
        $datos = json_decode(file_get_contents("php://input"), true);
        if($datos != null){
            if(isset($datos['organizador_Id'])){
                $id = $datos['organizador_Id']; 
            }
        }
        
                 
            $sql = "SELECT nombre_carrera, fecha, distancia, fotos FROM añadir_carreras WHERE organizador_Id = '$datos'";
            
            try{
                
                $resultado = $con->query($sql);
                if($resultado->num_rows > 0){
                    $carreras = array();
                    
                    while($row = $resultado->fetch_assoc()){
                        $carreras[] = $row;
                    }
                    
                    header("HTTP/1.1 201 CREATED");
                    echo json_encode($carreras);
                }else{
                    header("HTTP/1.1 400 Not Found");
                }
            }catch(mysqli_sql_exception $e){
                header("HTTP/1.1 400 fallo");
            }
        }else{
            header("HTTP/1.1 400 Bad Request");
        }
    // }
?>