<?php
    require_once "./index.php";

    $con = new Api();

    if($_SERVER["REQUEST_METHOD"] == "POST"){
        
        $datos = json_decode(file_get_contents("php://input"), true);
        if($datos != null){
            if(isset($datos['filtro']) && isset($datos['busqueda'])){
                // Asignar los valores del filtro y la búsqueda a variables
                $filtro = $datos['filtro'];
                $busqueda = $datos['busqueda'];
                
                // Construir la consulta SQL de manera dinámica según los filtros y la búsqueda
                $sql = "SELECT nombre_carrera, fecha, distancia, fotos FROM añadir_carreras WHERE $filtro LIKE '%$busqueda%'";
                
            }
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
    }
?>