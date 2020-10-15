<?php
header('Content-Type: application/json');
include_once __DIR__ . '/../models/healthdir.php';

if($_REQUEST['action'] === 'index'){
    echo json_encode(Diary::all());
  }
 ?>
