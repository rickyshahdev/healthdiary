<?php

$dbconn = null;
if(getenv('postgres://pwzmjcukwzfunw:755b67d7f1f50a335ddf034024df454f2d408f8bba7822c7021eb6430e5ec9da@ec2-3-220-222-72.compute-1.amazonaws.com:5432/d5uajp53q46lt7')){ // if using the heroku database
	$connectionConfig = parse_url(getenv('postgres://pwzmjcukwzfunw:755b67d7f1f50a335ddf034024df454f2d408f8bba7822c7021eb6430e5ec9da@ec2-3-220-222-72.compute-1.amazonaws.com:5432/d5uajp53q46lt7'));
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



class Event {
    public $id;
    public $title;
    public $date;
    public $description;
    public $image;

    public function __construct($id, $title, $date, $description, $image ){
        $this->id = $id;
        $this->title = $title;
        $this->date = $date;
        $this->description = $description;
        $this->image = $image;

    }
}

Class Diary {

  ///// CREATE ROUTE //////////
  static function create($diary) {
    $query = "INSERT INTO healthdir(title, date, description, image) VALUES ($1, $2, $3, $4)";

    pg_query_params($query, [$diary->title, $diary->date,$diary->description, $diary->image]);
    return self::all();
  }
  /////////// GET ROUTE ////////////
  static function all(){
       $diary = array();

       $results = pg_query("SELECT * FROM healthdir");
       $row_object = pg_fetch_object($results);

       while($row_object !== false){

           $new_event = new Event(
               $row_object->id,
               $row_object->title,
               $row_object->date,
               $row_object->description,
               $row_object->image
             );

           $diary[] = $new_event;
           $row_object = pg_fetch_object($results);
       }
       return $diary;
     }
     //////////// EDIT ROUTE //////////

   static function update($updated_event){
     $query = "UPDATE healthdir SET title = $1, date = $2 , description = $3, $image = $4 WHERE id = $5";
     $query_params = array($updated_event->title, $updated_event->date, $updated_event->description, $updated_event->image, $updated_event->id);
     pg_query_params($query, $query_params);
     return self::all();
     }
         //////////  DELETE ROUTE //////
   static function delete($id){
      $query = "DELETE FROM healthdir WHERE id = $1";
      $query_params = array($id);
      pg_query_params($query, $query_params);

      return self::all();
  }
}

?>
