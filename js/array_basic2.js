let data = `[{"id":1,"first_name":"Francine","last_name":"Chesterman","email":"fchesterman0@histats.com","gender":"Female","salary":2704},
{"id":2,"first_name":"Ofelia","last_name":"Lamartine","email":"olamartine1@macromedia.com","gender":"Female","salary":2580},
{"id":3,"first_name":"Cosmo","last_name":"Leahair","email":"cleahair2@icio.us","gender":"Male","salary":3272},
{"id":4,"first_name":"Carlye","last_name":"Farquar","email":"cfarquar3@bigcartel.com","gender":"Female","salary":1304},
{"id":5,"first_name":"Valenka","last_name":"Haythorne","email":"vhaythorne4@illinois.edu","gender":"Female","salary":4053},
{"id":6,"first_name":"Velvet","last_name":"Rentoul","email":"vrentoul5@ucsd.edu","gender":"Female","salary":2405},
{"id":7,"first_name":"Milton","last_name":"Durban","email":"mdurban6@dailymail.co.uk","gender":"Male","salary":4355},
{"id":8,"first_name":"Laverne","last_name":"Coffey","email":"lcoffey7@blogspot.com","gender":"Genderqueer","salary":1644},
{"id":9,"first_name":"Angil","last_name":"Smiley","email":"asmiley8@sciencedirect.com","gender":"Genderqueer","salary":3100},
{"id":10,"first_name":"Edsel","last_name":"Connaughton","email":"econnaughton9@fc2.com","gender":"Male","salary":4308},
{"id":11,"first_name":"Faith","last_name":"Auletta","email":"faulettaa@comcast.net","gender":"Female","salary":2107},
{"id":12,"first_name":"Agnes","last_name":"Campey","email":"acampeyb@bbb.org","gender":"Female","salary":2403},
{"id":13,"first_name":"Daffy","last_name":"Lenton","email":"dlentonc@hud.gov","gender":"Female","salary":3391},
{"id":14,"first_name":"Efren","last_name":"Ivanilov","email":"eivanilovd@wikispaces.com","gender":"Male","salary":1589},
{"id":15,"first_name":"Jackson","last_name":"Littlecote","email":"jlittlecotee@bigcartel.com","gender":"Male","salary":3075}]`;

let objAry = JSON.parse(data); //JSON.parse()메소드는 문자열을 자바스크립트에서 사용하는 object 타입으로 변경
console.log(data);
console.log(objAry);
console.clear();

//salary가 3000이 넘는 사람을 over3000에 담는다
let over3000 = objAry.filter((val, idx) => { //{id:? , fname:? , salary: ? ...}  //salary가 3천보다 큰사람을 가져와서
    return val.salary >= 3000;
}).map((val, idx) => { //위의 값을 name과 salary값만 가진 새로운 object 타입으로 만들어 return
    let obj = {}; // A형태를 B형태로
    obj.name = `${val.last_name}, ${val.first_name}`;
    obj.sal = val.salary;
    return obj;
});
console.log(over3000);
console.clear();

// Female 값만 가져와서 평균값 구하는 기능
let avg, sum, cnt;
sum = 0;
ppl = 0;
let gender = objAry.filter((val) => {
    return val.gender == 'Female';
});

gender.forEach(function (val) { //forEach는 반환값이 없는 void타입
    sum += val.salary;
    ppl++;
});
avg = sum / ppl;
console.log(gender)
console.log(sum)
console.log(ppl)
console.log(`여사원의 급여평균 ${avg}`);
/* 선생님꺼
objAry.filter(val => val.gender == 'Female')
    .forEach(val => {
        sum += val.salary;
        cnt++;
    })
    avg = sum /cnt;
    console.log(`여사원의 급여평균 ${avg}`);
  */

//salary 값들 출력 
let salaries = [];
objAry.forEach(val => salaries.push(val.salary));
console.log(salaries);

// salaries.map((val) => {
//     return val.salary
// })
// console.log(salaries.map)

function getMaxValue(ary = []) { // 배열 요소에서 제일 큰 값을 반환
    let max = 0;

    ary.forEach(val => {
        if (max < val) {
            max = val;
        }
    })
    return max;
}
let maxVal = getMaxValue(salaries);
console.log(`가장 큰 값 : ${maxVal}`)


function getMinValue(ary = []) { // 배열 요소에서 제일 작은 값을 반환
    let min = 0;
    ary.forEach(val => {
        if (min > val) {
            min = val;
        }
    })
    return min;
}

let minVal = getMinValue(salaries);
console.log(`가장 작은 값 : ${minVal}`)



function sortAscend(ary = []) { //오름차순 정렬 함수
    let numAry = ary;
    let newAry = [];
    return newAry;
}
result = sortAscend(salaries);
console.log(salaries);

//reduce 메소드. 배열 [1,2,3,4] 
//accum: 그 전 순번을 리턴해줌, curr: 이번 순번의 배열에 들어있는 값, 인덱스 값, 배열 그자체
result = salaries.reduce(function (accum, curr, curIdx, ary) {
    console.log(`누적값 ${accum} 현재 값 ${curr} => 두수의 합 ${accum+curr}`);
    return curr + accum;
}, 0); // map, filter 메소드
console.log(`최종결과 : ${result}`);

result = [1, 2, 3, 4].reduce(function (accum, curr) {
    //if(curr % 2 == 0) //짝수만
    accum.push(curr); //배열의 제일 마지막에 추가
    return accum;
}, []); // accum = [1] =>  accum = [1,2] =>  accum = [1,2,3] =>  accum = [1,2,3,4] =>   

/* 위의 reduce와 같은 기능
result = [1,2,3,4].map(val => val);
*/

/*result = [1,2,3,4].filter(val => {
위의 짝수만과 같은 기능   
 if ( val % 2 == 0){
         return val;
     }
})*/
console.log(result);
console.clear();

result = ['Apple', 'Banana', 'Cherry'].reduce((accum, curr, currIdx,ary) => {
    if(currIdx == 0){
        accum = '<ul>';
    }
    accum += `<li>${curr}</li>`;
    if (currIdx == ary.length - 1){   //마지막 요소
        accum += '</ul>'
    }
    console.log(accum);
    return accum;

}, '');
console.log(result);
document.write(result);

//배열 중 제일 큰 값을 반환
result = [3,2,4,1,5].reduce(function(accum,curr){
    if(accum > curr){
        return accum;   //accum의 초기값 0과 첫번째 curr 3을 비교후 , 큰 값을 curr에 넣고 그 다음 비교 대상에서 첫번째 값으로 넣어준다
    }
},0);
console.log(result);


//배열 중 제일 작은 값을 반환
result = [3,2,4,1,5].reduce(function(accum,curr){
    if(accum < curr){
        return accum;   
    }
},10);   // 배열에서 가장 작은 값을 구해야 해서 0을 넣으면 안됨 
console.log(result);
console.clear(); 


//배열의 총 합
result = [3,2,4,1,5].reduce((accum,curr) => {
   return accum+curr
});

console.log(result);

//배열의 평균
result = [3,2,4,1,5].reduce((accum,curr,currIdx,ary) => {
if(currIdx == ary.length - 1) {
    return (accum + curr) / ary.length;
} 
return accum + curr;
});
console.log(result);




