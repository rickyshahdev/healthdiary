<?php
$dbconn = null;
if(getenv('DATABASE_URL')){ // if using the heroku database
	$connectionConfig = parse_url(getenv('DATABASE_URL'));
	$host = $connectionConfig['host'];
	$user = $connectionConfig['user'];
	$password = $connectionConfig['pass'];
	$port = $connectionConfig['port'];
	$dbname = trim($connectionConfig['path'],'/');
	$dbconn = pg_connect(
		"host=".$host." ".
		"user=".$user." ".
		"password=".$password." ".
		"port=".$port." ".
		"dbname=".$dbname
	);
} else { // if using the local database, change the dbname to be whatever your local database's name is
	$dbconn = pg_connect("host=localhost dbname=healthdiary user=postgres password=Custom13");
}

class Person{
    public $id;
    public $username;
    public $password;

    public function __construct($id, $username, $password){
        $this->id = $id;
        $this->username = $username;
        $this->password = $password;
      }
}

class People {


  static function create($person){
      $query = "INSERT INTO login (username, password) VALUES ($1, $2)";
      $query_params = array($person->username, $person->password);
      pg_query_params($query, $query_params);
      return self::all();
  }
    static function all(){
          $people = array();

          $results = pg_query("SELECT * FROM login ORDER BY id ASC");
          $row_object = pg_fetch_object($results);

          while($row_object !== false){

              $new_person = new Person(
                  intval($row_object->id),
                  $row_object->username,
                  $row_object->password
              );

              $people[] = $new_person;

              $row_object = pg_fetch_object($results);
          }

          return $people;
      }


      static function delete($id){
      $query = "DELETE FROM login WHERE id = $1";
      $query_params = array($id);
      pg_query_params($query, $query_params);
      return self::all();
  }
}
 ?>
