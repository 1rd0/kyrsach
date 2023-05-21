<?php
   $Name = $_POST['Name'];
   $Number = $_POST['Number'];
   $Place = $_POST['Place'];
   $Counter = $_POST['Counter'];
   $comment = $_POST['comment'];


   $mysql = new mysqli('localhost','root','root','order'); // connect to sql
   $mysql->query("INSERT INTO `orders` (Name,Number,Place,counter,comment)
   VALUES('$Name','$Number','$Place','$Counter','$comment')");
   
 $mysql->clese();
 
 exit();
?>
 