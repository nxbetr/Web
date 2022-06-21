//for_loop.js

/* 배열 관련 반복되는 메소드
forEach : void, 
map:[배열] A형태 타입을 A'형태로 변환 , 
filter:[배열] A를 받으면 새로운 형태 B를 만듦 (ex 전국 의료시설 중 서울에 있는 곳만 필터),
reduce: 문자열, Number, [배열], {오브젝트}
*/

//let ary = [];  배열 객체 선언 = new Array();
let ary = [3, 5, 8, 9, 12]
ary.push(5); //맨뒤에 추가적인걸 담는다는 의미  <-> pop(); 맨뒤부터 삭제
ary.unshift(7); //앞쪽에 추가 <-> shift(); 맨앞부터 삭제
// [7, 3, 5, 8, 9, 12, 5]
ary.splice(3,1)   // 3번의 값 1개 요소를 가져오는데 대체 값을을 안넣어주면 삭제가 됨
// [7, 3, 5, 9, 12, 5]

let newAry = [];
let result = ary.forEach(firstCallback)  

ary.forEach(elem => console.log(elem));   //()안에 콜백함수를 넣어주면 됨. 배열의 요소 출력결과: [7, 3, 5, 9, 12, 5]
/*다른 형식의 콜백함수
function firstCallback(){   //콜백함수 정의 후  , forEach는 결과값을 리턴하지 않아서 ary.forEach라 쓰면 undefined이라 뜸
    console.log(elem);
}
ary.forEach(firstCallback)  //forEach안에 써줘도 됨 */
 
//newAry
function firstCallback(elem){   
    newAry.push(elem)
}
console.log(newAry);



// 2. map
result = ary.map(elem => elem * 2);  // A -> A'(A * 2) elem(변수)의 두배되는 값을 반환 . ary에 들어있는 값이 A라고 쳤을때 A'의 모습이 됨. ary에 들어있는 갯수만큼 mapping 함
console.log(newAry);    // 원래 값
console.log(result);  //두배되는 값 


/* 3. filter 원래 배열의 요소에 대해 조건을 만족하는 것만 새로운 배열에 담아줌. A -> a 
ary.filter(elem,ind,ary);  ary가 있어야함. ary만큼 돌아감. ()안에 만족하는 값이 들어와야 함 */
result = ary.filter((elem, ind, ary) => elem % 2 ==0);  //배열 요소, 인덱스 값, 배열. 여기서 ary.filter의 ary는 위의 배열이지만 ()안의 ary는 함수 안에서 설정된 변수의 이름
console.log(result);  

result = ary.filter((elem, ind, ary) => ind > 3);  //3보다 큰 값만
console.log(result);  

/* 이렇게 쓰면 ind값이 인덱스가 아니라 맨 첫번째 값 elem의 다른 이름이 됨  .
result = ary.filter((ind) => ind > 3);  
console.log(result);  */


// 4.reduce . A -> 문자열, Number, [], {}
/*result = ary.reduce();
console.log(result); */

//배열의 요소에 대해 각각의 누적 값 구하기
result = ary.reduce((accum, curr, currIdx, arry) => {      //accum 이번 순번이 뭐냐에 따라 다음 순번이 뭐냐는 의미, 이번 요소의 값은 curr.첫번째 매개값은 함수, 두번째는 리턴하고 싶은 초기값(0)
    console.log(accum, curr, currIdx);
    return accum + curr;   //반환되는 값이 뭐냐에 따라 그 다음 값의 초기값으로 쓰여짐. 안적으면 undefined으로 뜸 return currIdx라 적으면 인덱스 값이 그다음 순번의 초기값으로 쓰여짐
}, 0);   
console.log(result); 
//초기값 0이 accum이라는 변수에 들어오고, curr은 배열에 들어와있는 요소, Idx는 인덱스 값, 

// 4-1 reduce를 map과 같은 기능으로 사용하기
// 배열의 요소를 * 2 한 결과
result = ary.reduce((accum, curr) => {
    console.log(accum, curr);
    accum.push(curr * 2);  //현재값을 그대로 담지 말고 * 2 한 값을 넣어줌 
    return accum;  //누적된 값을 그 다음 순번의 초기값으로 쓴다. 안하면 undefined 뜸
}, []);   //배열 객체를 초기값으로 설정
console.log(result);

// 4-2  filter와 map 기능3보다 큰 값을 구한 후 * 2 한 값만 담는다
result = ary.reduce((accum,curr,currIdx) => {
    if(currIdx > 3){   //인덱스 값이 3보다 큰 값만 반환
        accum.push(curr * 2);   // * 2 한 값
    }
    return accum;
}, []);  //filter map   
console.log(result);