//object.js

// 오브젝트 . student 라는 변수에 인수,메소드를 담음
// 객체(오브젝트) = 인스턴스 (클래스 구조를 통해 실체를 하나 만든 것) . 여러개 만들때 불편
const student = {
    sno:'22-1313',
    sname:'김자바',
    mathScore:80,
    engScore:90,
    age:10,
    showInfo: function(){
        return '이름은 ' + this.sname + ', 나이는 ' + this.age;
    }
}

const student2 = {
    sno:'22-5213',
    sname:'최자바',
    mathScore:90,
    engScore:30,
    age:32,
    showInfo: function(){
        return '이름은 ' + this.sname + ', 나이는 ' + this.age;
    }
}

// 만들어진 class 인스턴스를 통해 속성 값을 매번 안만들어도 됨
class Student{
    constructor(sno, sname, age){   //자바에서 말하는 생성자
    this.sno = sno;                        //클래스 안에서 this를 붙여 사용
    this.sname = sname;
    this.age = age; //매개 값으로 들어온 age를 받는다는 의미
    }
    // 메소드
    setMathScore(mathScore){   
        this.mathScore = mathScore;  //속성 값으로 들어온 mathScore를 담아준다는의미
    }
    setEngScore(engScore){
        this.engScore = engScore;   
    }
    showInfo(){
        return '이름은 ' + this.sname + ', 나이는 ' + this.age;
    }
}
//const student3 = new Student();
const student3 = new Student('21-123', '김익수', 23);
student3.setMathScore(88);
student3.setEngScore(78);

console.log(student2);
console.log(student3);
console.log(student3.showInfo());

