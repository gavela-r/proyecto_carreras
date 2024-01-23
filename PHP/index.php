<?php
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