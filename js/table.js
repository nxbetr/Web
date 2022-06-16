// table.js

let data = [
    {sname:'Hong', age:15, height:167.8,weight:90},
    {sname:'Kim', age:19,height:190,weight:50}   //블럭 안에 항목을 추가해도 자동적으로 표에 추가 해줌
]

class Table{
    //생성자
    constructor(ary){   //변수 이름 아무거나 설정하면 됨
        this.aryData = ary;  // aryData속성에 매개값으로 들어온 ary 넣어줌
    }
    //기능을 담은 메소드
    createTable(){
        this.tag = '<table border=1><tr>';         // tag 라는 속성값으로 테이블을 만든다고 정의
        //헤더정보 '<thead> </thead>'
         //첫번째 가지고 있는 값  object 타입의 {sname:'Hong', age:15} 를 타이틀로 쓰고싶ㄷ ㅏ
        for(let field in this.aryData[0]) {   // for in 오브젝트의 속성값을 가져오는 반복문
        this.tag += '<th>' + field + '</th>';        //field 갯수만큼 th 담음
        };   
     //   this.tag += '<th>이름</th><th>나이</th>';
        this.tag += '</tr>';
        //this.tag += '';

        //바디정보  '<tbody></tbody>'
        this.aryData.forEach((val,idx) => {
          //  console.log(val);
            this.tag += '<tr>';
            for(let field in val){
                this.tag += '<td>' + val[field] + '</td>';
            }
            this.tag += '</tr>';
                });
        this.tag += '</table>';

       return this.tag;  // 만들어진 tag를 반환
    }
} 

let table = new Table(data);   // data값을 주면 
let str = table.createTable();    //table이 가지고 있는 createTable 호출 했을때 표형식으로 화면출력
console.log(str);
document.write(str);

console.log('HongKildong'.length); // 글자수 길이 11 반환

//find 배열의 특정 값을 찾음
let names = ['Hong','Hwang','Kim'];

// find 메소드 . 함수를 매개값으로 받음 .   true를 만족하는 값을 찾아 반환
let searchName = names.find(function(val){     
    //return val == 'Hwang';   'Hwang'이라는 값을 찾으면 반환해줌 true를 만족하는 값을 찾아 반환
    return val.length == 4; //길이가 4인 값 중 첫번째 값만 반환함 = Hong과 Hwang 중 Hong 반환
}); 
console.log(searchName);



// 책 p100

//객체 생성의 두가지 방법

//1. 클래스 선언으로 만들기
// {unit:param} unit이라는 속성에 매개값 param을 담음
class Estimate {  // 클래스로 구현
    constructor (param){  //생성자 . 변수이름 param
        this.unit = param;  
    }
//견적가 얻기 method . find 값이 true일 경우 찾아서 priceinfo에 담아둠
getEstimate(unittype, width, height){
    let priceinfo = this.unit.find(item => item.type == unittype);  //매개변수 이름을 val이 아닌 item으로 설정해둠
    return priceinfo.price * width * height;
}
//배열에 요소를 추가하는 메소드 push
addUnit(unit){
    this.unit.push(unit);
}
}
let unitinfo = [{type:"wood", price:100}, 
                {type:"iron", price:300},
                {type:"plastic", price:200}];
const estimator = new Estimate(unitinfo);
estimator.addUnit({type: 'glass', price: 500}); //새로운 단위 추가
let result = estimator.getEstimate('glass', 20, 20);
console.log(result);



//object 타입으로 만들기
/*  이렇게 안에 넣어서 만들어도 됨
     let obj = {
    unit:unitInfo,
    getEstimate:function(){}
    addUnit:function(){}
}; */

let obj = {};  //obj 선언 . 
obj.unit = unitinfo;  //unifInfo 라는 값을 unit에 담아줌
obj.getEstimate = function(unitType, width, height){   // getEstimate라는 메소드 생성
     let priceInfo = this.unit.find( item => item.type == unitType);  
     return priceInfo.price * width * height;
}
obj.addUnit = function(unit){
    this.unit.push(unit);
}
let result2 = obj.getEstimate('wood',250,20);
console.log(result2)
