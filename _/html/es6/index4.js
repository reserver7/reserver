export let abc = function(){
    console.log("test");
    //document.getElementById("f").submit();
}

export let bbb = function(){
    console.log("test2");
}

export let ccc = function(){
    var mid = document.getElementById("mid");
    if(mid.value==""){
        alert("아이디를 입력하세요");
        mid.focus();
        return false;
    }
    else{
        document.getElementById("f").submit();
    }
}

const btns = document.getElementById("btn");
const btns2 = document.getElementById("btn2");
//document.getElementById("btn").onclick = abc;
//document.getElementById("btn").onclick = bbb;

btns.addEventListener("click",abc);
btns.addEventListener("click",bbb);
btns2.addEventListener("click",ccc);


//onsubmit은 input type이 submit일때 사용
/*
    onclick = 한번클릭에 한개의 함수만 사용 가능
    addEventListener = 여러개를 동시에 호출 가능
    es6에서는 name으로 사용x
*/
