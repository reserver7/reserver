<meta charset="utf-8">
<?php
    //$a = $_POST['a'];
    $a = $_GET['a'];

    if($a==""){
        echo("올바른 데이터가 전달 되지 않았습니다.");
    }
    else{
        echo("데이터 값은".$a."입니다.");
    }
?>