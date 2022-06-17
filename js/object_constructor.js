// object_constructor.js

// 객체를 생성하기 위한 방법

function Student(sno, sname, age){
    this.sno = sno;   // class에서 this는 객체 자신을 가르킴 , 함수 안에서의 this는 window가(전역객체) 됨
    this.sname = sname;
    this.age = age;
    this.showInfo = function (){
        return '이름은 ' + this.sname + ', 나이는 ' + this.age;
    }
}
//생성자 함수
let s1 = new Student('22-12312', '길동', '19');   // new를 안쓰면 함수
let s2 = s1;  //s2에 s1 값을 주고
s2.sno = '22-9999';  //{sno: '22-9999', sname: '길동', age: '19'} 출력됨
console.log(s1);  //{sno: '22-12312', sname: '길동', age: '19'}
console.log(s1.showInfo());


//테이블 
function Table(param){
    this.data = param;   //window가 아니라 아래에 new로 만들어진 새로운 객체
    this.fields = ['sname', 'age', 'height', 'weight'];        //필드선언
    this.tag = 'null';

    this.createTable = function(){   
        this.tag += '<table border=1>';
        this.createHead();
        this.createBody();
        this.tag += '</table>';
        return this.tag;
    }

    this.createHead = function(){
        this.tag += '<thead><tr>';
        for(let field of this.fields){
        this.tag += '<th'> + field + '</th>';
        }
        this.tag += '</tr></thead>';

        // this.tag += '<thead>';
        // this.fields.forEach((val) => {
        //     this.tag += '<tr>' + val + '</tr>'
        // });
        // this.tag += '</thead>';
    }

    this.createBody = function(){
        this.tag += '<tbody>';
        this.data.forEach((val) => {
            this.tag += '<tr>';
            
            for(let field in val){
                this.tag += '<td>' + val[field] + '</td>';
            }
            this.tag += '</tr>';
        });
        this.tag += '</tbody>';

    }
}     

/* function(){this => window} , 
객체를 만드는 new 함수 안에서 => this : new로 만들어진 객체(object) 
이벤트 => this : 이벤트를 받는 대상 */
let data = [{
    sname: '홍길동',
    age: 25,
    height: 197.6,
    weight: 92.8
},
{
    sname: '이찬희',
    age: 20,
    height: 183.4,
    weight: 80.2
},
{
    sname: '김민수',
    age: 32,
    height: 169,
    weight: 48.5
}
]

let t1 = new Table(data);
let str = t1.createTable();
document.write(str);
console.log(str);