// string_literal.js

let str = 'Hello';  // "Hello"
str = `Hello`; // 문자열을 표현하는 방식

let person = {
    name:"hong",
    age:20,
    showInfo: function (){
        //return '이름은' + this.name + ', 나이는 ' + this.age;
        return `이름은 ${this.name}, 나이는 ${this.age}`;
    }
}
 
console.log(person.showInfo());

console.log(`나의 이름은 ${person.name}`);
console.log(`나의 나이는 ${person.age}`);

console.log(`${person.age >= 20 ? '성인' : '청소년'}`);  //person.age가 20보다 크면 성인, 그렇지 않으면 청소년

let strings = 'This\nis\na\nboy';
strings = `This
is
a
boy`;
console.log(strings);

"This is an apple".indexOf('apple');
"This is an apple".charAt(10);

let jm = '950101-1234567';
jm = '9102092869488';
// function checkGender(num){
//     // 1,3남자 2,4 여자
//     switch(jm.charAt(7)){
//         case '1' : case '3' :
//             return '남자';
//         case '2': case '4' :
//             return '여자';
//     }
// }


// let result = checkGender(jm);
// console.log(checkGender(jm));

function checkGender(num = ''){
    let jnum = num.replace('-','');
    jnum = num.substr(-7,1);
    console.log(jnum);

    switch(jnum.charAt(6)){
        case '1' : 
        case '3' :
            return '남자';
        case '2': 
        case '4' :
            return '여자';
    }
}
let result = checkGender(jm);
