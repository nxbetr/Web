// array_basic3
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

let gender = prompt('Male or Female 을 입력');
console.log(gender);

let objAry = JSON.parse(data); //문자열을 object 타입으로 변환
console.log(objAry);

//표(table) 형태로 출력
// let result = objAry.reduce((accum, curr) => {
//         if(gender == 'Male'){
//             accum = '<table border=1>'; 
//         }
//         accum += `<tr>${accum}${curr}</tr>`;
//     if (gender == objAry.length -1){
//         accum += `</table>`
  



//     // if(curr == 'Male'){
//     //     accum = '<table border=1>';
//     // }
//     // accum += `<tr><td>${accum}${curr}</td></tr>`;
//     // if (curr == ary.length -1){
//     //     accum += '</table>'
//     // }
// }
//     });
//     console.log();
// document.write(result);


let result = objAry.reduce(function(accum,curr,currIdx){
    if(currIdx == 0){
        accum += '<table border = 1>';
    }
    if (curr.gender == gender){
        accum += '<tr>';
        for(let field in curr){
            accum += `<td>${curr[field]}</td>}`;
    }
    accum += '</tr>';
    }
    if(currIdx == objAry.length - 1){
        accum += '</table>';
    }
    return accum;
},'');
document.write(result);