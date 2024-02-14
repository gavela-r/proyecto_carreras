<?php
    header("Access-Control-Allow-Origin: http://222.222.222.234");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: POST");

    require_once './index.php';
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
            $sql = "SELECT correo, contraseña FROM usuarios WHERE correo = '$correo' ";
            $resultado = $con->query($sql);
            $usuario = $resultado->fetch_assoc();

            if(!$usuario){
                $sql_organizador = "SELECT correo, contraseña FROM organizador WHERE correo = '$correo'";
                $resultado_organizador = $con->query($sql_organizador);
                $usuario = $resultado_organizador->fetch_assoc();
                
            }
            
          
            if ($usuario != null) {
                $pass = $usuario['contraseña'];
                if (password_verify($contraseña, $pass)) {
                    
                    $key = 'proyectoDeAdrian';
                    $payload = [
                        'iat' => time(),
                        'correo' => $correo,
                        'exp' => time() + (60*60*24)
                    ];
                    $jwt = JWT::encode($payload, $key, 'HS256');
                    
                    $respuesta = [ 
                        'correo' => $correo,
                        'jwt' => $jwt, 
                    ]; 
                    header("HTTP/1.1 200 Ok"); 
                    echo json_encode($respuesta); 
                } else {
                    echo json_encode(array("message" => "datos incorrectos"));
                }
            } else {
                echo json_encode(array("message" => "Datos incorrectosssssssss"));
            }
            
             
        }catch(mysqli_sql_exception $e){
            header("HTTP/1.1 400 Bad Requet");
        }
    }else{
        header("HTTP/1.1 400 no funciona");
    }

   
?>