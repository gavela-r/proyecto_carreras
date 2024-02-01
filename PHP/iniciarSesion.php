<?php
    require_once 'index.php';
    require_once '../vendor/autoload.php';

    use Firebase\JWT\JWT;
   

    $con = new Api();

    if($_SERVER['REQUEST_METHOD'] == 'POST'){
        $datos = json_decode(file_get_contents("php://input"), true);
        
        if($datos != null){
            $correo = $datos['email'];
            $contraseña = $datos['contrasena'];
        }
        try{
            $sql = "SELECT id, nombre_usuario FROM usuarios WHERE correo = '$correo' AND contraseña = '$contraseña'";
            $resultado = $con->query($sql);
            // echo "Consulta SQL: $sql";
            // $resultado = $con->query($sql);
            // var_dump($resultado);   
           print_r($resultado);
            if ($resultado->num_rows > 0) {
                $usuario = $resultado->fetch_assoc();
                if (password_verify($contraseña, $usuario['contraseña'])) {
                    $token = generarToken($correo, $usuario['id'], $usuario['nombre_usuario'], $usuario['contraseña']);
    
                    echo json_encode(array("token" => $token));
                } else {
                    echo json_encode(array("message" => "datos incorrectos"));
                }
            } else {
                echo json_encode(array("message" => "Datos incorrectos"));
            }
           
        }catch(mysqli_sql_exception $e){
            header("HTTP/1.1 400 Bad Requet");
        }
    }else{
        header("HTTP/1.1 400 no funciona");
    }

    function generarToken($correo, $id, $nombre, $contraseña){
        
        $key = 'example_key';
        $payload = [
            'id' => $id,
            'nombre' => $nombre,
            'correo' => $correo,
            'contraseña' => $contraseña,
            'exp' => time() + (60*60*24)
        ];
        $jwt = JWT::encode($payload, $key, 'HS256');
        
        return $jwt;
    }
    
?>