<meta charset="utf-8">
<?php
    session_start();
    session_destroy();;
    echo ("<script>alert('정상적으로 로그아웃 되었습니다.'); location.href='./main.html';</script>");
?>