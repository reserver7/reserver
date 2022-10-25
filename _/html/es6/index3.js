export class aaa{
    constructor(a){ //생성자
        this.mname = a; 
        //익명함수 this(데이터를 지칭하며) this.mname : 해당 값을 익명으로 
        //만들어서 전달하는 키값
    }
}

export class bbb{
    constructor(b1,b2){ //생성자 함수가 받게 됨
        let b3 = b1 * b2;   //함수에 넘어온 값을 받아 연산함
        if(b3<50){      //조건문으로 true, false로 구분함
            this.aw = true;
        }
        else{
            this.aw = false;  
        }
        //this.aw = b3;
    }
}

export class zzz{
    constructor(zname){ //기본 생성자 함수
        this.username = zname;
    }
    login(){    //zzz라는 class안에 login 함수
        return this.username + "님 환영합니다.";
    }
    logout(){   //zzz라는 class안에 logout 함수
        return this.username + "님 로그아웃 되셨습니다.";
    }
}

//함수는 return을 사용
//class는 return을 사용 할 필요가 없음
//class안에 함수를 여러개 묶어서 사용 할 수 있음