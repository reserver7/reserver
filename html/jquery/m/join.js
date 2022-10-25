$(document).ready(function(){
    //로그인 파트
    $("#login_info1").click(function(){
        location.href="./login.html";
    });
    
    $("#login_info2").click(function(){
        if(confirm("로그아웃 하시겠습니까?")){
            location.href="./loginout.php";
        }
    });

    //회원가입 완료 로그인 버튼 부분
    $("#logingo").click(function(){
        location.href="./login.html";
    });
    
    //load는 외부파일을 가져올 때 사용 하게 됨
    $("#agree_text").load("join.txt?v=1",function(a,b){
        //b : 로드파일 있는지 확인 유/무 (success,error)  페이지번호 404 : 페이지가 없음
        if(b != "success"){
            alert("해당 파일 로드가 잘못 되었습니다.");
        }
    });

    //회원가입 버튼 클릭시
    $("#memberbtn").click(function(){
        //Jquery에서 name값 가져오는 방법
        var $mid_s = $("input[name=mid]").val(); //사용자 아이디
        var $mnm_s = $("input[name=mnm]").val(); //사용자 이름
        var $mpass = $("input[name=mpass]").val(); //사용자 패스워드
        var $mpass_ck = $("input[name=mpass_ck]").val();   //사용자 패스워드체크
        var $memail = $("input[name=memail]").val();   //사용자 이메일
        var $agree = f.agree.checked;   //name 값 이용
        //var $agree = $("checked").is(":checked"); //id 값 이용
        if($mid_s==""){
            alert("아이디를 입력해 주세요.");
        }
        else{
            if($mnm_s==""){
                alert("가입자 명을 입력해 주세요.");
            }
            else{
                if($mpass==""){
                    alert("패스워드를 입력해 주세요.");
                }        
                else if($mpass_ck=="" || $mpass_ck!=$mpass){
                    alert("동일한 패스워드를 입력해 주세요.");
                }
                else{
                    if($memail==""){
                        alert("이메일을 입력해 주세요.");
                    }
                    else if($agree==false){
                        alert("이용약관 동의함을 선택해 주셔야 합니다.");
                    }
                    else{
                        f.method="POST";
                        f.action="./joinok.php";
                        f.submit();
                    }
                }
            }
        }
    });

    //로그인 버튼 클릭시
    $("#loginbtn").click(function(){
        var $ids = $("#login_id").val();
        var $pw = $("#login_pw").val();
        if($ids==""){
            alert("아이디를 입력해 주세요.");
        }
        else if($pw==""){
            alert("패스워드를 입력해 주세요.");
        }
        else{
            login_f.method="POST";
            login_f.action="./loginok.php";
            login_f.submit();
        }
    });
});