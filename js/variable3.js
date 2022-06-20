//variable3.js
//구구단 / 달력


//테이블에 구구단 넣기
let str = '';
str = '<table border=1>'
str += '<tr>';
let num = 9;
for (i = 1; i < 10; i++) {
    str += '<tr><td>' + num + '</td><td>*</td>' + i + '</td><td>' + (num * i) + '</td></tr>'
    // str+='<td>'+num+'</td>'
    // str+='<td>'+'x' +'</td>'
    // str+='<td>'+i+'</td>'
    // str+='<td>'+'='+'</td>'
    // str+='<td>'+i*num+'</td>' 
    //   str+='<td>' + num+'x'+i+'='+num*i+'</td>'
    str += '</tr>';
}
str += '</table>';
//document.write(str);


// 1부터 31까지 7단위로 끊어서 테이블에 넣기
str = '<table border = 1>';
str += '<tr>'
for (let i = 1; i <= 31; i++) {
    str += '<td>' + i + '</td>';
    if (i % 7 == 0) {  //7의배수
        str += '</tr><tr>';
    }
}
str += '</tr></table>';

document.write(str)

// tr
// td1~7
// /tr

// tr
// td8~14
// /tr

console.log(getFirstDay(6));

function getFirstDay(mon){
    switch(mon){
        case 1: 
            return 7;

        case 2: case 3: case 11:
            return 3;

        case 5:
            return 1;

        case 6: 
            return 4;

        case 7: case 4:
            return 6;

        case 8: 
            return 2;
            
            case 9: case 12:
                return 5;
                
                case 10:
            return 7;

            default: 0;
        }
}

function getLastDate(mon){
    //1,3,5,7,8,10,12 =>31
    //4,6,9,11=> 30
    //2=>28
    switch(mon){
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            return 31;
            
         case 4: case 6: case 9: case 11:
            return 30;

        case 2 :
            return 28
            default: 0;
    }
}
// 11월 달력
//getFirstDay() 안에 원하는 월을 넣어주면 달력 호출
//getLastDay() 안에 들어간 월의 마지막 날을 계산해 호출

//let mon = 9;
showCal(2);

function showCal(month){
    let days = ['일','월','화','수','목','금','토'];
str = '<table border = 1><caption>'+month+'월달력</caption><tr>';
for(let day of days){
    str+='<th>' + day + '</th>';  //th 컬럼
}
str += '</tr><tr>';
let vtd = getFirstDay(month);  

for(let i=1; i<vtd; i++){
    str += '<td></td>';
}
for (let i = 1; i <= getLastDate(month); i++) {
    str += '<td>' + i + '</td>';
    if ((vtd-1+i)%7 == 0){  //7의 배수
        str += '</tr><tr>';
    }
}
str += '</tr></table>';
document.write(str)
}

// 함수에 안넣은 달력의 기능들
// let days = ['일','월','화','수','목','금','토'];
// str = '<table border = 1><caption>'+month+'월달력</caption><tr>';
// for(let day of days){
//     str+='<th>' + day + '</th>';  //th 컬럼
// }
// str += '</tr><tr>';
// let vtd = getFirstDay(11);  

// for(let i=1; i<vtd; i++){
//     str += '<td></td>';
// }
// for (let i = 1; i <= getLastDate(11); i++) {
//     str += '<td>' + i + '</td>';
//     if ((vtd-1+i)%7 == 0){
//         str += '</tr><tr>';
//     }
// }
// str += '</tr></table>';
// document.write(str)
