<?php

    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Allow: GET, POST, OPTIONS, PUT, DELETE");

    class Api extends mysqli{

        private $host = 'localhost';
        private $db = 'carreras';
        private $user = 'root';
        private $passwd = '';

        public function __construct(){
            try{
                parent::__construct($this->host,  $this->user, $this->passwd, $this->db);
            }catch (mysqli_sql_exception $e){
                echo "ERROR: {$e -> getMessage()}";
                exit;
            }
        }
    

       
    }
    

?>