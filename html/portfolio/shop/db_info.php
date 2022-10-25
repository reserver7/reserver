<?php
header("Content-Type: text/html; charset=UTF-8");

$host = "localhost";
$user = "reserver1"; 
$pwd = "wjd07741#";
$dbname = "reserver1";

$connect = mysqli_connect($host,$user,$pwd) or die("데이터베이스 접속오류!!");
mysqli_select_db($connect,$dbname);
?>