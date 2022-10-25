function pay_btn(){
    var pay_remsg = pay_info();
    if(pay_remsg[2]=="no"){
        alert(pay_remsg[0]);
        pay_remsg[1].focus();
        return false;
    }
    else if(order_f.receiver_delpart.value==""){
        radio_ck();
        return false;
    }
    else if(order_f.choice_tax.value==""){
        radio_ck2();
        return false;
    }
    else{
        var ck_remsg = pay_confirm();
        if(ck_remsg[2]=="no"){
            alert(ck_remsg[0]);
            ck_remsg[1].focus();
            return false;
        }
        else{
            order_f.action="pay.html";
            order_f.method="POST";
            order_f.submit();
        }
    }
}

/* 주문자 정보 빈칸 */
function pay_info(){
    var p_msg="";
    var p_focus="";
    var p_ok="yes";
    if(order_f.buy_name.value==""){
        p_msg = "주문하시는 분 이름을 입력해주세요.";
        p_focus = order_f.buy_name;
        p_ok = "no";
    }
    else if(order_f.buy_tel.value==""){
        p_msg = "전화번호를 입력해주세요.";
        p_focus = order_f.buy_tel;
        p_ok = "no";
    }
    else if(order_f.buy_hp.value==""){
        p_msg = "휴대폰번호를 입력해주세요.";
        p_focus = order_f.buy_hp;
        p_ok = "no";
    }
    else if(order_f.buy_email.value==""){
        p_msg = "이메일를 입력해주세요.";
        p_focus = order_f.buy_email;
        p_ok = "no";
    }
    else if(order_f.receiver_name.value==""){
        p_msg = "배송 받으실 분을 입력해주세요.";
        p_focus = order_f.receiver_name;
        p_ok = "no";
    }
    else if(order_f.receiver_post.value=="" || order_f.receiver_addr.value==""){
        p_msg = "우편번호를 검색해주세요.";
        p_focus = order_f.receiver_post;
        p_ok = "no";
    }
    else if(order_f.receiver_addr2.value==""){
        p_msg = "상세주소를 입력해주세요.";
        p_focus = order_f.receiver_addr2;
        p_ok = "no";
    }
    else if(order_f.receiver_tel.value==""){
        p_msg = "전화번호를 입력해주세요.";
        p_focus = order_f.receiver_tel;
        p_ok = "no";
    }
    else if(order_f.receiver_hp.value==""){
        p_msg = "휴대폰번호를 입력해주세요.";
        p_focus = order_f.receiver_hp;
        p_ok = "no";
    }
    else if(document.getElementById("pay_ck").checked==false){
        p_msg = "구매진행에 동의해주세요.";
        p_focus = document.getElementById("pay_ck");
        p_ok = "no";
    }
    return [p_msg,p_focus,p_ok];
}

/* 
function radio_ck(){
    var rf;
    let radionum = document.getElementsByName("receiver_delpart");
    var radio_ck = null;
    console.log(radionum.checked);
    for(rf=0;rf<radionum.length;rf++){
        console.log(radionum[rf].checked);
        if(radionum[rf].checked==false){
            radio_ck = "no";
        }
    }
    if(radio_ck=="no"){
        alert("배송지를 확인해주세요.");
        return false;
    }
    else{
        pay_confirm();
    }
}

function radio_ck2(){
    var rf;
    let radionum = document.getElementsByName("choice_tax");
    var radio_ck = null;
    console.log(radionum.checked);
    for(rf=0;rf<radionum.length;rf++){
        console.log(radionum[rf].checked);
        if(radionum[rf].checked==false){
            radio_ck = "no";
        }
    }
    if(radio_ck=="no"){
        alert("현금영수증/계산서 발행을 확인해주세요.");
        return false;
    }
    else{
        pay_confirm();
    }
}
*/

function pay_confirm(){
    var ck_msg="";
    var ck_focus="";
    var ck_ok="yes";
    let order_name = order_f.buy_name.value.match(/[ㄱ-ㅎ|가-핳]/g);
    let order_receiver_name = order_f.receiver_name.value.match(/[ㄱ-ㅎ|가-핳]/g);
    let order_banksend_name = order_f.banksend_name.value.match(/[ㄱ-ㅎ|가-핳]/g);
    var order_email = /^[0-9a-zA-Z_\.\-]+@[A-Za-z0-9_.\-]+\.[A-Za-z0-9\-]+/;
    if(order_name==null){
        ck_msg = "이름은 한글만 사용 가능합니다.";
        ck_focus = order_f.buy_name;
        ck_ok = "no";
    }
    else if(isNaN(order_f.buy_tel.value)==true){
        ck_msg = "전화번호는 숫자만 입력 가능합니다.";
        ck_focus = order_f.buy_tel;
        ck_ok = "no";
    }
    else if(isNaN(order_f.buy_hp.value)==true){
        ck_msg = "휴대폰번호는 숫자만 입력 가능합니다.";
        ck_focus = order_f.buy_hp;
        ck_ok = "no";
    }
    else if(order_email.test(order_f.buy_email.value)==false){
        ck_msg = "이메일 양식이 올바르지 않습니다.";
        ck_focus = order_f.buy_email;
        ck_ok = "no";
    }
    else if(order_receiver_name==null){
        ck_msg = "이름은 한글만 사용 가능합니다.";
        ck_focus = order_f.receiver_name;
        ck_ok = "no";
    }
    else if(isNaN(order_f.receiver_tel.value)==true){
        ck_msg = "전화번호는 숫자만 입력 가능합니다.";
        ck_focus = order_f.receiver_tel;
        ck_ok = "no";
    }
    else if(isNaN(order_f.receiver_hp.value)==true){
        ck_msg = "휴대폰번호는 숫자만 입력 가능합니다.";
        ck_focus = order_f.receiver_hp;
        ck_ok = "no";
    }
    else if(document.getElementById("basic_pay").checked==true){
        if(order_f.banksend_name.value==""){
            ck_msg = "입금자명을 입력해주세요.";
            ck_focus = order_f.banksend_name;
            ck_ok = "no";
        }
        else if(order_banksend_name==null){
            ck_msg = "입금자명은 한글만 사용 가능합니다.";
            ck_focus = order_f.banksend_name;
            ck_ok = "no";
        }
        else if(document.getElementById("bank_select").value==""){
            ck_msg = "입금할 은행을 선택해주세요.";
            ck_focus = document.getElementById("bank_select");
            ck_ok = "no";
        }
    }
    return [ck_msg,ck_focus,ck_ok];
}

/* 이메일 체크 */
function buy_select(email_value){
    var email_ck = order_f.buy_email.value.split("@");
    if(order_f.buy_email.value==""){
        order_f.buy_email.value = email_ck[0];
    }
    else{
        order_f.buy_email.value = email_ck[0] + "@" + email_value;
    }
}

/* 전화번호 & 휴대폰번호  - 기호*/
function keyp(tel,ids){
    document.getElementById(ids).value = tel.replace(/-/g,"");
}

$(function(){
    $("#address_btn").postcodifyPopUp();
});