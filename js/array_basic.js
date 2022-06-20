// array_basic.js
//자바스크립트에선 다양한 타입이 한 배열에 들어감
let arr = [];    //let arr = new Array();  , new Object()/{}
arr[0] = 'Hello';
arr[1] = 100;
arr[2] = true;

delete arr[1];  //index 번 값은 undefined이 됨
console.log(arr);  
console.log(arr.length);

for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
//확장 for
for(let val of arr){
    console.log(val);
}
//forEach
arr.forEach((val,idx)=>{
    console.log(`${idx} = > ${val}`);  //배열의 값이 undefined이면 반복에서 제외 
})

console.clear();
arr.push('Apple');   //제일 뒤에 추가
arr.unshift('Banana');  //제일 앞에 추가
arr.pop();  //제일 마지막 위치부터 삭제
arr.shift();  //첫번째 위치부터 삭제
arr.splice();  //매개값에 따라 추가, 수정, 삭제 가능
arr.splice(0, 0, 'Apple');  // 맨 앞 인덱스에 Apple 추가 , 크기가 0이면 추가
arr.splice(0, 1, 'Apple');  // 크기가 1이면 대체 (Hello 수정해서 Apple 추가)
arr.splice(0, 1);  // 값을 안넣어줬으니 삭제를 의민
arr.splice(0, 3, 'Apple');  // 세개 만큼 삭제 후 Apple 추가


//인덱스 값(몇번째 위치), 크기, 어떤 값으로 대체 
arr.forEach((val,idx)=>{
    console.log(`${idx} = > ${val}`);  //배열의 값이 undefined이면 반복에서 제외 
})
 