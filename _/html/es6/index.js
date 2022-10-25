//const dd = "테스트1";
//export default console.log(dd);
//export = 자료,데이터를 내보내는 기능
//default : 함수를 사용하지 않고 기본 데이터만 return 하는 형태

export function abc(){  //abc함수를 내보내는 부분
    return console.log("테스트 입니다.");
}
export function ccc(){  //ccc함수를 내보내는 부분
    return console.log("ccc함수 호출됨");
}
export function ddd(d1,d2){ //수식구 계산 export
    let d3 = d1 * d2;
    return console.log(d3);
}