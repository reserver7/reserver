function member(num){
    if(num==2){
        history.go(-1); //이전 페이지로 이동함
    }
    else{
        var ckmsg = member_check(); //return 사용을 위해
        if(ckmsg[1]=="no"){ 
            //return형태가 1개 이상 값이 들어올 경우
            //배열 및 노드 형태로 분활하여 값을 설정 할 수 있습니다.
            alert(ckmsg[0]);    //aaa가 no일 경우 "아이디를 입력하세요" 출력
            return false;   //return을 멈춰라
        }
        else{
            member_dtc();   //사용자가 입력한 최종사항 확인 함수
        }
    }
}
function member_check(){
    var msg;
    var sign;
    if(mb.mid.value==""){
        msg="아이디를 입력하세요";
        sign="no"; 
    }
    else if(mb.mpass.value==""){
        msg="패스워드를 입력하세요";
        sign="no";
    }
    else if(mb.mpass_check.value==""){
        msg="동일한 패스워드를 입력하세요";
        sign="no";
    }
    else if(mb.mpass_check.value!=mb.mpass.value){
        msg="패스워드가 서로 다릅니다.";
        sign="no";
    }
    else{
        if(mb.mnm.value==""){
            msg="사용자 이름을 입력하세요.";
            sign="no"; 
        }
        else if(mb.memail1.value=="" || mb.memail2.value==""){
            msg="이메일을 입력하세요.";
            sign="no"; 
        }
        else if(mb.mtel.value==""){
            msg="휴대폰 번호를 입력하세요.";
            sign="no"; 
        }
        /*
        else if(mb.maddr.value==""){
            msg="주소찾기로 도로명 주소을 입력하세요.";
            sign="no"; 
        }
        else if(mb.maddr3.value==""){
            msg="상세주소를 입력해주세요.";
            sign="no"; 
        }
        */
        else if(mb.magree1.checked==false){
            msg="서비스 이용약관에 동의 하셔야 합니다.";
            sign="no"; 
        }
        else if(mb.magree2.checked==false){
            msg="이메일 보안정책에 동의 하셔야 합니다.";
            sign="no"; 
        }
        else if(mb.idck.value==""){
            msg="아이디 중복체크를 하지 않았습니다.";
            sign="no";
        }
        else{
            msg="";
            sign="ok";
        }
    }
    return [msg,sign];   //return에 값을 1개 이상 이관할 때
}


//사용자가 입력한 최종값 재확인
function member_dtc(){
    var idv = mb.mid.value;
    var match = idv.match(/[ㄱ-ㅎ ㅏ-ㅣ 가-힣]/g);
    if(idv.length < 5){
        alert("해당 아이디는 최소 5자~ 최대 12자까지 입니다.");
        return false;
    }
    else{
        if(match!=null){
            alert("아이디는 한글을 사용할 수 없습니다.");
            return false; 
        }
        
    }
}


//키보드 관련 사항
function keycheck(v){
    var keys = event.keyCode;
    var id = v;
    if(keys==32){
        mb.mid.value = id.trim();
        /* 해당 아이디 값 = 해당 아이디값 중 공백일 경우 공백 삭제 */
        alert("스페이스바를 사용 할 수 없습니다.");
    }
}


//도로명 주소 찾기 팝업창
function addpopup(){
    window.open("./address.html","","width=600,height=400");
}