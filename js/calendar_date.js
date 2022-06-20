// calendar_date.js

let today = new Date('2022-06-19'); // 2022-06까지만 넣으면 1일 기준으로 정보가 나옴, 매개값이 아무것도 없으면 오늘 날짜 기준으로 출력
today = new Date(2022, 5, 1); //=> 5월이 아니라 6월 1일임. 0부터 시작. 
//today = new Date(2022,5,0); 0으로 적으면 6월 1일보다 하루 전날인 5월의 마지막날을 의미함

console.log(`올해는 ${today.getFullYear()}년도`);
console.log(`이번달은 ${today.getMonth()+1}월 입니다`); //월 정보는(getMonth) 0부터 11까지 존재
console.log(`오늘은 ${today.getDate()}일 입니다`); //날짜
console.log(`오늘은 ${today.getDay()}입니다`); //요일 정보 0부터 6 일~토

//달력 작성. 6월
// 6월 1일의 요일 정보. 6월의 마지막날
let year = 2021; // 2021
let month = 6; //6월달 

makeCalendar(year, month);

//년도, 월 달력 정보 생성
function makeCalendar(y, m) {
    let dayInfo = new Date(y, m - 1).getDay(); //매개값으로 들어온 월의 요일
    let lastDateInfo = new Date(y, m, 0).getDate; //마지막 날의 정보


    let days = ['일', '월', '화', '수', '목', '금', '토'];
    str = `<table border=1><caption> [${y}년 ${m}월]</caption><tr>`;
    for (let day of days) {
        str += '<th>' + day + '</th>'; //th 컬럼
    }
    str += '</tr><tr>';

    for (let i = 1; i < dayInfo; i++) {
        str += '<td></td>';
    }
    for (let i = 1; i <= lastDateInfo; i++) {
        str += '<td>' + i + '</td>';
        if ((dayInfo + i) % 7 == 0) {   //7의 배수
            str += '</tr><tr>';
        }
    }
    str += '</tr></table>';
    document.write(str)
    


}