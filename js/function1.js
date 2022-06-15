//function1.js

// 더하기 function
function sum(n1,n2){
    return n1 + n2;
}
console.log(sum(10,20));   // 30출력
console.log(sum('10','20'));  //1020 출력

// 마이너스 function , 곱하기 , 나누기 
function minus(v1,v2){
    return v1-v2;
}
console.log(minus(20,10));   // 10출력
console.log(minus('20','10'));  //문자열로 받았지만 숫자 타입으로 자동형변환, 10 출력

//배열의 요소들을 모두 더해 반환하는 함수
function sumAry(ary){
    


    for (let i = 0; i < ary.length; i++) {
    sum += numAry[i];
    }

    }
let numAry  = [20,27,33,19,44];
let result = sumAry(numAry);
console.log('배열의 합:' + result);

 
//배열이 가진 메소드
//forEach 배열의 각각 요소들에 대해 함수를 실행하라
//함수가 메소드의 매개값으로 쓰임. 콜백함수/
numAry.forEach(function(){
    console.log('hi')
}); 

//첫번째 두번째 세번째의 매개변수가 뭔지 출력
//배열의 순서대로 값이 출력 + 인덱스값 + 배열 그자체 출력
numAry.forEach(function(a,b,c){
    console.log(a,b,c)

}); 


// 배열의 값을 모두 더해서 출력
result = 0;
numAry.forEach(function(a,b,c){
    result += a;
});
console.log('배열의 합:' + result);

//홀수 값만 출력
//if(arr[i]%2 == 0)


// result = 0;
// numAry.forEach(function(){
//     result = 
// });
// console.log('배열의 홀수 값:' + result)
