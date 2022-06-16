// function3.js

function sumNumber() {
    console.log(arguments); //함수가 호출되면 매개값을 호출해주는 arguments 객체
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}

sumNumber(1, 2, 3, 4, 5);
//sumNumber(1, 2, 3, 4, 5, 6, 7, 8);

//나머지 파라미터
function sumParam(...args) { //어떤 갯수만큼 올지 모르겠지만 여러가지 값을(가변적으로) 받는다는 의미 . args는 변수 이름이만 배열타입
    let result = 0;
    //args 갯수만큼 forEach 실행
    args.forEach((val) => {
        result += val;
    }); //callback 함수
    return result;
}
console.log(sumParam(1, 2, 3, 4, 5, 6))

//커링함수 (매개값이 하나로 이루어진 함수)
function orderSet(burger, beverage) {
    console.log('버거: ' + burger + ', 음료: ' + beverage);
}
orderSet('치즈버거', '콜라');

//위의 함수를 매개 값을 하나만 받는 커링함수로 만들기
function orderSet_curring(burger) {
    return function (beverage) {
        console.log('버거: ' + burger + ', 음료: ' + beverage); //반환 값에 함수 사용가능 
    }
}
//리턴되는 값이 함수
//orderSet_curring('불고기버거'))가 리턴해주는 값이 function 정의 구문, 뒤의 ('콜라')는 return되는 함수
orderSet_curring('불고기버거')('콜라');

//빅맥이라는 값을 받아서 beverageFnc에 넣어줌
let beverageFnc = orderSet_curring('빅맥')
//beverage에 사이다라는 매개값을 넣어서 beverageFnc을 실행.자바 스크립트에서 ()의미는 함수를 실행하라는 뜻  
beverageFnc('사이다');
//beverage에 환타라는 매개값을 넣어서 beverageFnc을 실행.
beverageFnc('환타')

//커링함수 p73 
function orderSet(burger) {
    return function orderBeverage(beverage) {
        return function orderSide(side) {
            return function orderKetchup(yn) {
                return function orderChicken(count) {
                    console.log("세트: " + burger + ", " + beverage + ", " + side + ", 케첩(" + yn + "), 조각치킨(" + count + "개)");
                }
            }
        }
    }
}
let order = orderSet('치즈버거')('콜라');
order("감자튀김")("y")("2");

//위의 커링함수를 화살표함수로 만드는 경우
const orderSet2 = burger => beveratge => side => yn => count => {
    console.log("세트: " + burger + ", " + beverage + ", " + side + ", 케첩(" + yn + "), 조각치킨(" + count + "개)");
}
let order2 = orderSet('상하이버거')('탄산수');
order2("감자튀김")("n")("1");

//펼침연산자 . 변수 앞에 ... 세개 있는걸 펼침연산자라고 함
let args = [1, 3, 5];

function anyFnc(...atgs) {

}

//위의 args 배열과 아래의 otherArgs 배열을 합치기
//let otherArgs = [-1, -2]; 원래의 배열에 ...args를 적어 더해줌

let otherArgs = [-1, -2, ...args]; // -1 -2 와 위의 args가 더해진 새로운 배열 otherArgs
console.log(otherArgs);

let another = [4, 5, 6];
let otherArgs2 = [-1, ...args, -2]; //두 배열요소를 합쳐서 새로운 배열
console.log(args.concat(another));

let obj1 = {
    name: 'Hong',
    age: 20
}
//let obj2 = {};  //obj(객체)를 하나 선언한다는 의미 . new Object();와 같음
let obj2 = {
    ...obj1
}; //...obj1을 통해 obj1 값을 가진 obj2를 생성

let newObj = {
    name: 'Choi',
    age: 15,
    height: 165.5
} // name과 height , 변수는 하나
let obj3 = {
    ...newObj,
    ...obj1
};
console.log(obj1, obj3); // newObj안의 원래 있던 값에 obj1을 추가해주면 뒤에있는 값이(obj1) 앞의 newObj를 (merge시켜서) 새로운 값으로 변경을 하고 없었던 height 값은 추가해줌 

let obj4 = {
    sno: '12345'
}
let obj5 = {
    ...newObj,
    ...obj1,
    ...obj4
};
console.log(obj1, obj5);


let comObj = {
    sno: '22-12312',
    sname: 'Kim',
    scnore: 80,
    hobby: ['reading', 'eating'],
    pet: [{ cname: '냥이', age: 2 }, { dname: '멍이', age: 5 }]
}

comObj.sname; //이름
comObj.hobby[0] //첫번째 취미
comObj.pet[0] //첫번째 동물 정보
comObj.pet[1].age; // 멍이의 나이

console.log(comObj.pet[1].dname); // 두번째 동물의 이름 출력

//변수 var로 선언되면 어떻게 되는지
var a = 1;
var b = 5; 

function outerFunc(){
  // var b;  따로 적진 않지만 hoisting으로 인해 여기에 var b;가 선언되어 있음
    function innerFunc(){
        a = b;  // b에 들어있는 값을 a에 넣어줘서 a는 4가 됨
    }
    console.log(a);

    a = 3;
    b = 4;

    innerFunc();
    console.log(a);

    var b = 2;  // 지역변수. 위에있는 hoisting을 통해 var b는 이미 위에서 선언되어있다
    console.log(b);  //2출력
}
outerFunc();
console.log(b); //5 출력











// 책내용 실습

//나머지 파라메터
// 일반적인 함수 정의 방법 예
function restparams(...args) {
    console.log(args);
}
restparams(1, 2, 3, 4);

//나머지 파라메터 방법 예
const rest2 = (arg1, arg2, ...args) => {
    console.log([arg1, arg2, args]);
}
rest2(1, 2, 3, 4);
rest2(1, 2);
rest2(1);

//나머지 파라메터로 합계 구하기
function sum(a, b, ...args) {
    let result = 0;
    if (a != undefined) {
        result = a;
    } else {
        return 0;
    }
    if (b != undefined) {
        result += b;
    }
    args.forEach(function (arg) {
        result += arg;
    })
    return result;
}
console.log(sum(1, 2, 3, 4));
console.log(sum(1, 2));
console.log(sum(1));

//위의 합계를 개선한 방벅
function sum(a, b, ...args) {
    let result = 0;
    if (a != undefined) {
        result = a;
    } else {
        return 0;
    }
    if (b != undefined) {
        result += b;
    }
    args.forEach(function (arg) {
        result += arg.length > 0 ? args.reduce((subsum, arg) => subsum += arg) : 0;
    })
    return result;
}
console.log(sum(1, 2, 3, 4));
console.log(sum(1, 2));
console.log(sum(1));


//화살표 함수
//일반적 함수
function add(a, b) {
    return a + b;
}
//위의 함수를 화살표함수로 변경
let add2 = (a, b) => a + b;

//나머지 파라메터로 곱하기 구하기
let multiply = (a, b, ...args) => {
    let result = a * b;
    for (let i = 0; i < args.length; i++) {
        result *= args[i]
    }
    return result;
}

console.log(multiply(1, 2, 3, 4));


//고차함수 (인자로 함수를 넘길 수 있거나 함수를 반환하는 함수)
/*
const arr = [1, 2, 3, 4, 5];
const arr2x = [];
for (let i = 0; i < arr.length; i++){
    arr2.push(arr[i] * 2);
}
console.log(arr2x);

위의 일반적인 자바스크립트를 아래에서 맵 method로 고차함수를 인자로 넘겨 for 순환문을 대체하도록 구현한다

const arr2x = arr.map ( item => item * 2);  
여기서 item => item * 2 로 작성한 함수가 고차함수 */