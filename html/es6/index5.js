export class $zzz{
    constructor(){  
        //이벤트 핸들링을 사용하기 위해서는 기본함수에 호출이 되어야만 작동이 됨
        let btn = document.getElementById("btn");
        btn.addEventListener("mouseenter",this.aaa); //onclick 또는 addEventListener 모두 사용가능
        btn.addEventListener("mouseleave",this.bbb);
    }
    aaa(){
        console.log("test1");
    }
    bbb = function(){
        console.log("test2");
    }
}