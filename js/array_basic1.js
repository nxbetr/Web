//array_basic1.js

let names = [];
names.push('이희수');
names.push('인은지');
names.unshift('박소현'); //['박소현', '이희수', '인은지']
names.splice(1,0, '오지민'); //박소현 뒤 오지민 추가
//names.splice(2,0,'김가윤','박경아');  //오지민 뒤 두명 추가
//names.splice(1,2,'김가윤','박경아');  //오지민과 이희수 대신 김가윤 박경아 추가
names.splice(4,0,'김가윤','박경아');  //김가윤 박경아를 제일 마지막에 추가

let newNames = [];
names.forEach(function(val,idx){
    if(idx % 2 == 0)    //홀수번째 인덱스 값만
    newNames.push(val);
});

console.log(names);
console.log(newNames);


let mapAry = names.map(function(val, idx, ary){  //function이 매개값으로 들어감
    if(idx % 2 == 0){
    return val;  //위를 만족하는 값들을 return, 아닌 경우 undefined 출력
}
});  // mapping A -> B
console.log(mapAry);
 
let filAry = mapAry.filter(function(val,idx){    //undefined을 빼고 조건을 만족하는 값들만 새로운 배열 요소로
    return val;
}); 
console.log(filAry);


//위에서 작업한걸 한번에 쓰는 법
let resultAry = names.map((val,idx) => {
    if(idx % 2 == 0){
        return val;   
    }
}).filter((val,idx) => {
    return val;

});

console.log(resultAry);