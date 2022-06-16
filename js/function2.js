//function2.js
//제 2장 함수

//함수 정의구문
//매개변수 :미지의 값이 ary라는 매개변수에 들어올것이다 라는 의미. 매개 값과 다름
function sumAry(ary) { //sumAry라는 이름의 함수, 괄호 안에 매개변수Parameter(값이 아님, sumAry안에서 쓰이는 변수이름) 설정(타입 상관x) 
    // 블럭 안에 실행할 코드 작성
    let result = 0;
    for (i = 0; i < ary.length; i++) {
        result += ary[i]
    }
    return result; //return문이 없으면 undefined이 반환 됨
}
//const sumAry= function(ary){} 위의 함수정의문을 이렇게 자동적으로 함수표현식 처리해줌


sumAry([1, 2, 3, 4, 5]); //실행구문 호출, 배열로 매개값을Argument 줌

let args = [1, 2, 3, 4, 5]; //매개 값
sumAry(args); //실행문 호출

let arrNum = [1, 2, 3];
sumAry(arrNum);


//함수표현식
//function도 object 구문
const sum = function (num1, num2) {
    return num1 + num2;
}
console.log(sum);
console.log(sum()); // 함수정의문(). 매개값 없이 실행하라는 의미. undefined 값 두개가 더해져 NaN을 반환함
console.log(sum(10, 20)); //30출력
console.log(sum(10, 20, 30)); //30을 추가했지만 자동적으로 제외하고 10,20만 더해서 30을 출력해줌

//num2 값을 안넣고 num1 값만 넣었을때 undefined 상태로로 계산 못하게 0으로 처리해줌
const sum1 = function (num1, num2) {
    if (!num1) { //undefined는 false의 의미. (null, 0 , '')
        num1 = 0;
    }
    //삼항연산자
    num2 = num2 == undefined ? 0 : num2; // num2 값이 undefined상태면 0이라는 값, 그렇지 않으면 실제 값을 num2에 넣어준다
    return num1 + num2;
}
console.log(sum1(10)); //함수정의문 , 위의 처리들로 num2 값이 없지만 알아서 계산 돼 10이 출력됨

const sum3 = sum; // 함수정의문
console.log(sum3); //sum이 가진 구문을 똑같이 가짐

console.log(sumAry); //함수 정의구문이 출력됨


//함수표현식
const sayHello = function (name) {
    return 'Hello' + name;
}
console.log(sayHello('석길동')); //매개값으로 홍길동을 넣어주면 그 매개값이 Hello 구문 뒤에 나오게 


//화살표 함수 => 위의 표현식을 한줄로 줄임
//메소드의 매개값으로 함수가 사용될때 자주 쓰임(콜백함수)
const sayHello2 = (name) => 'Hello' + name; //매개값이 하나면 (name)에 있는 괄호도 삭제 가능
console.log(sayHello2('홍길동'));

let arr = ['배길동', '최길동', '김길동', '박길동']
arr.forEach(function (val, ind, ary) { //각각의 요소들에 대해 실행 . 매개값이 함수. 사용 안하는 부분은 변수 선언 안해도 됨
    sayHello(val);
    console.log(sayHello(val));
});

//화살표 함수로 사용
let arr2 = ['김자바', '조자바', '윤자바', '송자바'];
arr2.forEach((val) => console.log(sayHello(val))); //사용하는 변수 val만 선언해줌 ind ary 생략

// 배열의 각 요소 중 짝수의 값만 더하도록 sumEven();
arrNum = [29, 34, 12, 55, 29, 42];
const sumEven = (arr) => {
    let result = 0;
    arr.forEach(function (val) {
        if (val % 2 == 0) {
            result += val
        }
    }); return result;
};
//배열의 홀수번째 요소의 합 sumOdd(args);
// const sumOdd = (arr) => {
//     let result = 0;
//     arr.forEach(funtion.idx){
//         if (idx % 1 != 0){
//             result
//         }
//     }
// }

console.log(sumEven(arrNum));
//console.log(sumOdd(arrNum));