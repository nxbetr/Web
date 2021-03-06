// string_basic.js

let str = 'Hello'; //문자열 String
let str1 = new String('Hello');  //문자열 객체 Object

console.log(str == str1); // 값만 비교 True
console.log(str === str1); // 타입&값 비교  False
console.log(str === str1.valueOf());  //객체에 담긴걸 문자열로 바꿈  True

let num = new Number(123);   // 숫자타입의 객체
let num1 = 123;  //기본 데이터 타입
console.log(num == num1);
console.log(num.valueOf()===num1);  // valueOf => 기본데이터 타입으로 변환해줌 
 
/*원시타입(기본데이터타입)
String, Number, Boolean, undefined, 
 객체타입 
 함수, Object{name:..., age:...}, 배열, 객체*/

 "Hello".substring(0,3);  //문자열 객체 
 
 console.log(" Hello ")  //공백까지 출력
 console.log(" Hello ".trim());  //좌우 공백을 없애줌
 console.log("This is the only story".slice(10, 15)); //특정 위치의 값을 잘라옴. 10부터 15 앞까지
 
 str1 = "This is the only one story";
console.log(str1.slice(0,-10));
console.log(str1.slice(8,100));

console.log(str1.slice());

console.log(str1.substring(11,-8));
console.log(str1.substring(10,4));
console.log(str1.substring(8,100));

console.log(str1.substr(-10,8))

let num2 = 123.45;
let boo = true;
let str2 = '문자열타입'
let arr = [1, 2, 'a', 'b', 3];
let obj = {key:'data', value:15};

console.log(arr.toString());
console.log(obj.key.toString());


console.log(num2.toString());
console.log(str1.substring(8,100))


// indexOf()


// search()

console.log("This is the only story".replace('the','THE'));

/* 정규 표현식
let ary = [];
let oby = {};
let reg = / /;  // new RegExp();
*/

let regStr = "bad MORNING, GOOD AFTERNOON, goodevening, and good night";
console.log('기본 문장: '+regStr);
console.log(regStr.replace(/good/,' bad ')); 
console.log(regStr.replace(/good/g,' bad '));  //전체 바꾸기
console.log(regStr.replace(/good/gi,' bad '));  //대소문자
console.log(regStr.replace(/good\s/g,' bad ')); //공백 있는 것만 


const str1 = 'This is the only one story';
console.log(str1.slice(8,11));
console.log(str1.slice(-8,11));
console.log(str1.slice(10,4));
console.log(str1.slice(30));
console.log(str1.slice(0,10));
console.log(str1.slice(8,100));
console.log(str1.slice());

console.log(str.substring(8,11));
console.log(str.substring(11,8));
console.log(str.substring(11,-8));
console.log(str.substring(10,4));
console.log(str1.substring(30));
console.log(str1.substring(0,-10));
console.log(str1.substring(8,100));
console.log(str1.substring());

console.log(str1.substr(8,11));
console.log(str1.substr(11,8));
console.log(str1.substr(11,-8));
console.log(str1.substr(-10,8));
console.log(str1.substr(10));
console.log(str1.substr(0,-10));
console.log(str1.substr(8,100));
console.log(str1.substr());

const num1 = 123;
const num2 = 123.45;
const bool = true;
const str = '문자열타입';
const arr = [1,2,'a','b',3];
const obj - {key: 'data', value:15};

console.log(num1.toString());
console.log(num2.toString());
console.log(bool.toString());
console.log(str.toString());
console.log(arr.toString());
console.log(obj.toString());
console.log(obj.key.toString());
console.log(obj.value.toString());

const str1 = 'good morning, good afternoon, good evening, and good night';
console.log(str1.indexOf('even'));
console.log(str1.lastIndexOf('good'));
console.log(str1.lastIndexOf('dawn'));

const str1 = 'good morning, good afternoon, good evening, and good night';
console.log(str1.indexOf('good',15));

const str1 = 'good morning, good afternoon, good evening, and good night';
console.log(str1.charAt(30));
console.log(str1.charAt(100));

const str1 = 'good morning, good afternoon, good evening, and good night';
console.log(str1.includes('even'));
console.log(str1.includes('dawn'));

const str1 = 'good morning, good afternoon, GOOD EVENING, AND GOOD NIGHT';
console.log(str1.toLowerCase().indexOf('good'));
console.log(str1.toUpperCase().indexOf('GOOD'));
console.log(str1.search('GOOD'));
console.log(str1.search(/GOOD/i));

const str1 = "bad MORNING, GOOD AFTERNOON, good evening, and good night";
console.log(str1.match(/good\s\w+gi));
console.log(str1.match(/bad\s\w+gi));
console.log(str1.match(/none\s\w+gi));
console.log(str1.match('good'));


const str1 = 'GOOD MORNING, GOOD AFTERNOON, good evening, and good night';
console.log(str1.replace('good','bad'));
console.log(str1.toLowerCase().replace('good','bad'));
console.log(str1.replace(/good/i,'bad'));
console.log(str1.replace(/good/gi,'bad'));

var str1 = 'this is the only method! 대소문자 변환 THE END';
console.log(str1.toLowerCase());
console.log(str1.toUpperCase());