<meta charset='UTF-8'>
<?php
$host = "localhost";
$user = "reserver1";    //데이터베이스 아이디
$pwd = "wjd07741#";  //데이터베이스 패스워드
$dbname = "reserver1";   //데이터베이스 이름

$connect = mysqli_connect($host,$user,$pwd) or die("데이터베이스 접속오류!!");
mysqli_select_db($connect,$dbname);
?>
<!--
    [간편회원가입] - 모바일 (장단점)
    아이디, 패스워드, 이름, 이메일

    [실제회원가입]
    아이디, 패스워드, 이름, 이메일, 전화번호, 주소
-->