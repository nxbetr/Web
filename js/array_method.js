// array_method.js

/* 
some:조건을 만족하는 요소가 하나라도 있으면 true 하나도 없으면 false , 
every: 조건을 만족하는 요소들. 전체가 만족하면 true 그렇지 않으면 false, 
find: 조건을 만족하는 한 건만 가져옴, findIdx : 해당되는 요소의 인덱스 값을 반환
indexOf: 배열 요소에서 하나의 요소의 값을 인덱스 값으로 반환
sort(): 정렬
split(구분자): 구분자를 가지고 문자열을 배열타입으로 바꿔줌
join(구분자): 구분자를 가지고 온 배열 요소를 문자열로 바꿈.
*/

let idx = "This is a story".indexOf("is");
//console.log(idx);   // index 값 2를 반환

idx = [1, 2, 3, 4, 5].indexOf(5);
console.log(idx);   // index 값 4를 반환
idx = [1, 2, 3, 4, 5].indexOf(8);   
//console.log(idx);   // 없는 값 8을 넣었기 때문에 -1을 반환

let str = `PHP is a server scripting language, and a powerful tool for making dynamic and interactive Web pages.`
let strAry = str.split(' ');     // 공백을 기준으로 단어를 가져옴. return 되는 타입이 배열 . 문자열을 가지고 배열로 만듦 split
idx = strAry.indexOf('dynamic');    // indexOf는 앞에서 부터 찾음, lastIndexOf();는 뒤에서 부터
//console.log(strAry);
//console.log(idx);

let names = ['박은지','윤정은','박지혜','김나희']
idx = names.indexOf('김나희');  
//console.log(idx);    // index 값 3 출력

// find
let result = names.find(function(elem, idx, ary){
    return elem == '김나희'
});
console.log(result)


//  find
result = [6, 4, 3, 21, 14].find(elem => {
    return elem % 7 == 0;
});
console.log(result) // 조건을 만족하는 값 중 첫번째 값인 21을 출력. 찾는 값이 없으면 undefined 출력


//  findIndex
result = [6, 4, 3, 21, 14].findIndex(elem => {
    return elem % 7 == 0;
});
console.log(result)  // index 값 3을 출력. 찾는 값이 없으면 -1 출력


//  some
result = [6, 4, 3, 21, 14].some((elem, idx, ary) => {
   console.log(elem, idx, ary)
  return elem > 20;     // elem 중에 20보다 큰 값이 하나라도 있으면 true 출력, 하나도 없으면 false
});
console.log(result)


//  every
result = [6, 4, 3, 21, 14].every((elem, idx, ary) => {
    return elem % 2 == 0;
});
console.log(result)

console.clear();

//
let tempAry = [];
for ( let i = 0; i <5; i++){
    let temp = Math.random();   // math.random = 0보단 크고 1보단 작은 수를 만들어줌
    console.log(temp);
}

for ( let i = 0; i <5; i++){
    let temp = parseInt(Math.random() * 10);  // 1부터 9까지의 임의의 수 만들기
  //  let temp = parseInt(Math.random() * 10) + 1 ; 을 하면 1부터 10까지의 수
    console.log(temp);
    tempAry.push(temp);
}

// 1. tempAry 배열에 만들어진 값이 다 짝수가 맞는지
result = tempAry.every((elem,idx,ary) => {
    return elem % 2 == 0;
});
console.log(result);

// 2. tempAry 배열의 값 중 3의 배수가 있는지
result = tempAry.some((elem,idx,ary) => {
    return elem % 3 == 0;
});
console.log(result);

reusult = tempAry.filter((elem, idx, ary) => elem % 3 == 0);
console.log('3의 배수 값 출력'+result);



// 3. 5보다 큰 값이 있으면 그 값을 반환 . 
result = tempAry.find((elem) => {
    return elem > 5;
})
console.log(result);

// 3-1. 5보다 큰 값을 모두 출력
result = tempAry.filter((elem, ind, ary) => elem > 5); 

console.clear();

//  sort
result = [6, 4, 3, 21, 14].sort();   // sort() 안에 매개값으로 정렬기준을 넣어줘야함, 안넣어주면 아래처럼
console.log(result) // 출력: [14, 21, 3, 4, 6]

result = [6, 4, 3, 21, 14].sort(function(a,b){  // a,b는 값이 아닌 앞 뒤 순서를 의미함 
    if( a < b){
        return -1;  // 음수가 나오면 오름차순으로 정렬
    } else {
        return 1;   // 양의 값이 나오면 내림차순으로 정렬
    }           //반대로 정렬하고 싶으면 return 값 1 -1 의 순서를 바꿔주면 됨
});
console.log(result) 

result = [6, 4, 3, 21, 14].sort(function(a,b){   
   return a - b;  // - 값이 나오면 오름차순 
   // 내림차순으로 하려면 return b - a;  . + 값이 나오면 내림차순    
});
console.log(result) 


result = [6, 4, 3, 21, 14].sort(function(a,b){
    console.log(a,b);
    return a - b;   // 음의 값 : 오름차순
});
console.log(result);   

let objAry = [
    {
        name:"홍길동", 
        age:18
    }, {
        name: "김민수", 
        age:20
    }, {
        name: "박세민", 
        age:19
    }
];
console.clear();
console.log("홍" > "박");   // abc 순이라 문자 비교 가능

result = objAry.sort(function(a,b){
    if(a.name < b.name){
        return -1;
    } else {
        return 1;
    }
    /* 위의 if문을 삼항연산자로 (이름의 오름차순)
    return a.name < b.name ? -10 : 10; */
    /* return a.age < b.age ? -1 : 1;  (나이 순서대로)*/
});
console.log(result);
console.clear();

//  join
result = ['홍길동', '백민규', '김상우'].join('-');  // ()에 매개값을 아무 것도 안넣으면 구분자는 콤마 ,
console.log(result);

console.clear();

//'권소정,김하은,유선희,김가윤';  => '권소정 김가윤 김하은 유선희 순으로'  스플릿 솔트 조인
names = '권소정, 김하은, 유선희, 김가윤'.split(' ');
result = names.sort();
result = names.join(' ');
console.log(result);
 

//  split
strAry = 'Littering'.split(''); // 문자 단위 하나하나를 배열 요소로 만듦 (공란 아님)
//console.log(strAry);

let cnt = 0;    // t라는 글자가 총 몇개인지 cnt에 담을거임 . 반복문 forEach 안에 선언하면 반복할때 마다 초기화가 돼서 누적이 안됨
strAry.forEach((elem) => {      
    cnt += elem == 't' ? 1 : 0;    // elem에 t라는 글자가 있으면 1 그렇지 않으면 0을 더함
   // console.log(cnt);
});

cnt = strAry.reduce((accum,curr) => {
    accum += curr == 't'? 1 : 0;  // 카운트. reduce는 forEach랑 다르게 안에 선언해도 누적됨
    return accum;
},0);
//console.log(cnt);



