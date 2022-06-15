//variable.js

console.log("Hello World !!");
document.write('Hello');
document.write('<h3>Bye Bye</h3>');

let num = 0;
num = "Hello";
num = 10;
console.log(num);
document.write(num)

console.log(typeof num);

num = 10;
num = "ten";
num = true; //boolean
num = null; /* object => class의 인스턴스*/
let num1; //undefined

console.log(typeof num1);

num1 = 100;
num2 = 200; // let num2 = 200;이 아닌 변수의 선언이 없이 사용이 되면 전역객체로 (윈도우 객체의 속성이 됨)
console.log(num1 + num2);
console.log(window);

//window.alert('으ㅐ앵ㅇ애애애앵');

/* 자바에서는 Student라는 클래스의 값을 갖기 위해 작성
window가 비슷한 개념
class Student{
    String sno;
    String sname;
   
    void showInfo(){
        return this.sno + thi.sname;

    }
} 

Student student = new Student(); 
new 라는 키워드로 생성자 호출
클래스에 속성된 인스턴스를 만들어서 student에 할당
student는 sno라는 속성과 메소드 shoInfo를 가짐
student.sno;
student.showInfo(); */



//변수 하나에 복합적인 내용을 담고 싶을 때
//변수 -> 학생이름 , 학생번호, 영어, 수학
//자바에 클래스를 만들어 필드를 만든것 처럼
//object 선언
let student = new Object();
student.sno = '22-0123';
student.sname = '홍길동';
student.engScore = 90;
student.mathScore = 80;
console.log(student);

//위를 간단히 하는 초기화 
let person = {
    fname: '차은우',
    age: 20,
    height: 185,
    /* 속성도 담을수 있지만 함수도 담을 수 있음 (오브젝트 안에서 함수 기능을 하는 것 = method)
    person object 안에서의 this는 person*/
    showInfo: function () {
        return this.fname + ',' + this.age + ',' + this.height;
    }
};
/* 밖에서 선언해도 입력됨 */
person.weight = '68.5';

console.log(person);
console.log(person.fname);
console.log(person.showInfo());

console.log(person['age']); //위의 차은우 age 20을 가져옴
let field = 'height';
console.log(person[field]); //위의 차은우 height 185를 가져옴




//전체 필드를 for loop .. in
//person이 가진 field 를 looping 해 정보를 가져옴
// for()안의 field 변수는 for 안에서만 사용돼서 위의 let field = 'height' 변수와는 상관없음 
for (let field in person) {
    console.log(field);
}
//debugger; 를 원하는 위치에 넣으면 디버깅 가능
for (let field in person) {
    console.log(person[field]);
}

for (let field in person) {
    /* 여기서는 + 가 없지만 ,를 통해 3개가 담겨짐 */
    console.log(field, '=>', person[field]);
}

console.log(field); //height 출력
let x = 10
let y = 20

//변수 이름 me , 이름 취미 연락처 주소, 소개 메소드 = 이름 취미 연락처 반환
let me = {
    name: "김자바",
    age: 20,
    hobby: "games",
    tel: "010-1234-5232",
    add: "서울시",

    introduce: function () {
        return this.name + ',' + this.hobby + ',' + this.tel;
    }
};
console.log(me.introduce());

