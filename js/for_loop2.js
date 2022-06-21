// for_loop2.js
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
let ary = JSON.parse(data);
console.log(ary);

//forEach.
// forEach는 매개값이 세개
ary.forEach(elem => console.log(elem));  // elem 값 출력

ary.forEach(elem => {
    if(elem.id % 2 == 1) {   // id값이 홀수인 것만
    console.log(elem)
}
});


ary.forEach(elem => {
    if(elem.gender == 'Female') {   //  여성들만
    console.log(elem)
}
});
console.clear();

// gender 값이 Female 
let femaleAry = ary.filter(elem => elem.gender == 'Female')  {
};
console.log(femaleAry);

// mapping
let newCompany = ary.map( elem => {     //elem : A
    let newElem = {};   // newElem : A'
    newElem.nId = elem.id;
    newElem.name = elem.first_name + ',' + elem.last_name;
    newElem.salary = elem.salary * 1.5;
    newElem.isNew = elem.salary > 4000 ? false : true; 
    return newElem;
}) // A -> A'
.filter(elem => elem.isNew)  //true 값만 새로 담아줌
//.forEach(elem => console.log(elem));
console.log(newCompany);
console.clear();

// 새로운 회사 직원들 급여의 합
sum = 0;
let result = newCompany.reduce((accum,curr) => {
    console.log(accum,curr)
   for(i = 0; i < newCompany.length; i++){
       sum += curr.salary;
   }return sum;
},0);
console.log('합' + result);