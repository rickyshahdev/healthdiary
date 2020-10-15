<?php

$dbconn = pg_connect("host=localhost dbname=healthdiary");

class Event {
    public $id;
    public $title;
    public $date;
    public $description;

    public function __construct($id, $title, $date, $description ){
        $this->id = $id;
        $this->date = $date;
        $this->title = $title;
        $this->description = $description;

    }
}

Class Diary {

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
}


?>
