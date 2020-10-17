<?php
header('Content-Type: application/json');
include_once __DIR__ . '/../models/healthdir.php';

      /////////// GET ROUTE ////////////

if($_REQUEST['action'] === 'index'){
    echo json_encode(Diary::all());
  ///// CREATE ROUTE //////////
}
else if ($_REQUEST['action'] === 'create'){
  $request_body = file_get_contents('php://input'); //get the request body
  $body_object = json_decode($request_body);

  $new_event = new EVENT(null, $body_object->title, $body_object->date,$body_object->description, $body_object->image);

  $all_event = Diary::create($new_event);
  echo json_encode($all_event);
//////////// EDIT ROUTE //////////

}else if ($_REQUEST['action'] === 'update') {
  $request_body = file_get_contents('php://input');
  $body_object = json_decode($request_body);
  $updated_event = new Event($_REQUEST['id'], $body_object->title, $body_object->date, $body_object->description, $body_object->image);
  $all_event = Diary::update($updated_event);
  echo json_encode($all_event);

    //////////  DELETE ROUTE //////

}else if ($_REQUEST['action'] === 'delete') {
  $all_event = Diary::delete($_REQUEST['id']);
  echo json_encode($all_event);
}
 ?>
