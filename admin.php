<?php
$img=  $_FILES["image"];
$name = filter_var(trim( $_POST["name"]),FILTER_SANITIZE_STRING);
$value=  filter_var(trim( $_POST["value"]),FILTER_SANITIZE_STRING);

$conn = new mysqli("localhost",'root','','adziga-bd');

$conn->query("INSERT INTO `content` (`img`,`name`,`value`) VALUES('$img','$name','$value')");
$conn->close();
header("Location: menu.php");