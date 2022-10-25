//export let abc = () => console.log("테스트"); //abc라는 변수값에 함수를 호출
//export let abc = (a1) => console.log(a1); //abc라는 변수값에 함수 호출 및 값을 받아서 처리

export let abc = function(a1){  //일반 핸들링 함수 형태로 값을 받아서 처리
    //console.log(a1);
}

export let bbb = (b1) => {  
    // {}를 사용하는 경우는 반복문, 조건문, 선택문 같은 사항과 같이 이용할 경우 
    // 화살표 함수에 사용하게 됨 {}가 없을 경우 error가 발생하게 됨
    for(let aa=0; aa<=b1; aa++){
        //console.log(aa);
    }
}

export let ccc = (c1) =>{
    let dw = 1;
    do{
        if(dw%2==0){
            console.log(dw);
        }
        dw++;
    }while(dw<=c1);
}