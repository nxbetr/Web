//variable2.js
//var l1; hoisting(끌어올림) 되는 이유

let ary = new Array(); //배열 선언
ary[0] = 10; //index 값 

//자바에서는 배열의 크기가 위처럼 고정되면 추가 했을 시 오류가 나지만, 자바스크립트는 유동적이라 가능
ary = [20, 30, 15, 27]; //배열 선언 및 초기화
ary[ary.length] = 50; //인덱스 길이가 4이고 여기서 네번째 인덱스는 하나의 추가되는 인덱스
ary[ary.length] = 55;
ary[ary.length] = 65;
ary[10] = 100; //앞의 비어있는 index 값은 empty로 출력
console.log(ary);
console.log(typeof ary[7]); //undefined 상태가 됨

//배열 반복문
for (let i = 0; i < ary.length; i++) {
    console.log(i + "번째" + ary[i]);
}

//서로 다른 타입 배열도 가능
ary = ["망고스틴", "오렌지", "체리", "하미과", 32]

console.clear(); //로그를 clear 시킴
document.write("<ul>");
//배열일 경우 looping 돈다는 뜻 = of
for (let val of ary) {
    console.log(val);
    document.write('<li>' + val + '</li>');
}
document.write("</ul>");
// for in 오브젝트 속성의 갯수만큼 
// for of 배열만큼 

//복합적인 요소를 담은 object
//중괄호 안이 object
ary = [{
        name: "홍길동",
        age: 20,
        phone: "010-4564-2136"
    },
    {
        name: "박길동",
        age: 30,
        phone: "010-523-2136"
    },
    {
        name: "이길동",
        age: 26,
        phone: "010-0923-2136"
    },
    {
        name: "최길동",
        age: 43,
        phone: "010-3425-2136"
    }
]

//아래 두 반복문은 같은 형식의 결과를 출력함
// 반복문, ul태그 안에 
document.write("<ul>");
for (let person of ary) {
    //  document.write("<li>"+person.name+"</li>")
    document.write("<li>" + person['name'] + " " + person['phone'] + "</li>")
}
document.write("</ul>");

//문자열 타입 선언
let str = ' ';
str += '<ul>'; //원래 선언 된 값에 계속 누적 시켜 str에 담는다
for (let person of ary) { //반복문
    str += '<li> 이름: ' + person['name'] + ', 나이: ' + person['age'] + ', 연락처: ' + person['phone'] + '</li>';

}
str += '</ul>';
console.log(str);
document.write(str);

//반복문으로 테이블 만들기
//<table><tr><td>홍길동</td><tr><td>김길동</td></tr></table>
str = '<table border=1>';
for (let person of ary) {
    str += '<tr>';
    for (let field in person) {
        str += '<td>' + person[field] + '</td>'
    }
    str += '</tr>';
}
str += '</table>';
console.log(str);
document.write(str);


const v1 = 'hello';
//v1 = 'new';
//원시타입 vs. 참조타입. 
//object 타입 = 자바의 참조타입
// n1은 20 n2는 10 출력
let n1 = 10;
let n2 = n1;
n1 = 20;
console.log(n1, n2);

//o1 o1 둘 디 three 출력
let o1 = {
    name: 'one'
};
let o2 = o1;
o2.name = 'two';
o1.name = 'three';
console.log(o1, o2);
//object 일 경우엔 주소값을 가져옴
//o1의 메모리값을 o2에 넣어줘서 one

//2212312 출력
const obj = {
    sno: '123123',
    sname: 'Hong'
}
obj.sno = '2212312'; //obj 상수변수에 값을 새롭게 선언한게 아니라 obj를 참조하는 속성의 값을 변경함
console.log(obj.sno);
//obj = '';  이렇게 새로운 값을 할당하면 오류가 남


//var vs. let : 변수선언할때 사용하는 키워드
//var 변수선언 : 변수의 scope 전역변수/지역변수
//전역변수 모든 곳에서 유효한 변수
var var1 = "hello";
//지역변수(local variable) - 함수 안에서 선언된 변수

function localFnc() { //함수선언
    var var2 = "nice";
    console.log(var2);
    console.log(var1);
}
localFnc(); // 함수호출
console.log(var1); //전역변수는 함수 안과 밖 모두 가능
//console.log(var2);   여기서 호출하면 함수 밖에서 한 호출이라 에러남. 값이 없음
console.clear();
//------
// 아래의 lvar1 변수 둘은 같은 변수로 보이지만 하나는 블럭{} 안에서 생성된 서로 다른 변수
let lvar1 = "bye"; {
    let lvar1 = "new hello"
    console.log(lvar1);
}

function llocalFnc() {
    let lvar2 = "good";
    console.log(lvar2);
    console.log(lvar1);
}
llocalFnc(); // 함수호출
console.log(lvar1);


console.log(l1); //아직 선언되기 전이지만 이렇게 써도 출력 가능. 대신 undefined로 출력 됨 ,hoisting이라 함 , 함수호출도 마찬가지
var l1 = "yumm";
var l1 = "yumm";
console.log(l1);

//정확하게 하려면 var 보다 let을 쓰는게 좋음
console.clear
for (var num of ary) {
    console.log(num);
}
console.log(num)


TextDecoder

