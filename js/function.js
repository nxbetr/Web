//function.js


function sum(num1, num2) {           //변수 두개를 받는다는 의미, 받고싶은 변수의 이름을 적음
    let result = num1 + num2;
    console.log(result);          // return문 없으면 undefined
    document.write(result)
    return result;
}
sum(10, 20);
console.log(sum(10, 20));

function makeTd(val) {
    return '<td>' + val + '</td>';       //val값을 받아서 td로 감싸줌
}

function makeTr(val) {
    return '<tr>' + val + '</tr>';      //val값을 받아서 tr로 감싸줌
}

let values = ['김', '이', '박'];
//['Kim','Lee','Park'];
['김', '이', '박'];

let str = '<table border=1>';
for (let val of values) {        //위에 있는 values의 수만큼 김,이,박=3개
    let td = makeTd(val); //<td>김</td>
    str += makeTr(td);            //위의 td로 감싸진 값을 tr 태그로 감싸줌
}
str += '</table>'
document.write(str);

