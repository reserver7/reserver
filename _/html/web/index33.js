function logins(){
    var ids = login.mid.value;
    var pass = login.mpass.value;

    if(ids==""){
        alert("아이디를 입력해주세요!");
        return false;
    }
    else if(pass==""){
        alert("패스워드를 입력해주세요!");
        return false;
    }
    else {
        login.method="POST";
        login.action="login.php";
        login.submit();
    }

    /* 
    method post
    action login.php
    */
}