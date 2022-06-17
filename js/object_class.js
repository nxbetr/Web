// object_class.js


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