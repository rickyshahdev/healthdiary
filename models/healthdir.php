<?php

$dbconn = pg_connect("host=localhost dbname=healthdiary");

class Event {
    public $id;
    public $title;
    public $date;
    public $description;

    public function __construct($id, $title, $date, $description ){
        $this->id = $id;
        $this->title = $title;
        $this->date = $date;
        $this->description = $description;

    }
}

Class Diary {

  ///// CREATE ROUTE //////////
  static function create($diary) {
    $query = "INSERT INTO healthdir(title, date, description) VALUES ($1, $2, $3)";

    pg_query_params($query, [$diary->title, $diary->date,$diary->description]);
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
               $row_object->description
             );

           $diary[] = $new_event;
           $row_object = pg_fetch_object($results);
       }
       return $diary;
     }
     //////////// EDIT ROUTE //////////

   static function update($updated_event){
     $query = "UPDATE healthdir SET title = $1, date = $2 , description = $3 WHERE id = $4";
     $query_params = array($updated_event->title, $updated_event->date, $updated_event->description, $updated_event->id);
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
