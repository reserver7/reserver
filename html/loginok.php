<meta charset="utf-8">
<?php
$mid = $_POST['mid'];
$mpass = $_POST['mpass'];

if($mid=="" || $mpass==""){
    echo("<script>alert('접근이 잘못 되었습니다.');</script>");
}
else{
    echo $mid;
    echo $mpass;
}

?>