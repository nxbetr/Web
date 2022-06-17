// function_table.js

// 테이블 전체를 생성하는 함수  <table>...</table>
function createTable(aryData) {
    let fields = ['sname', 'age', 'height', 'weight'];
    let tag = '<table border=1>';

    let head = createHead(fields); //<thead><tr><th>...</th></tr></thead>
    tag += head;

    let body = createBody(aryData); //<tbody><tr><td>값</td>...</tr></tbody>
    tag += body;

    tag += '</table>'
    // <table>...</table>
    return tag;
}

// 헤더 부분을 만드는 함수, 어떤 필드가 있는지 매개값으로 줘야함
function createHead(fieldData) {
    let str = '<thead><tr>';
   fieldData.forEach((val) => {
       str += '<tr>' + val + '</tr>';
   }); 
   str += '</tr></thead>'
   return str;
}

//         for(let field in val){ 
//             this.tag += '<tr><th>' + field + '</th><tr>'; 
//         }   this.tag += '</thead>';
//     });   
//     return this.tag;  
//    // this.tag += '</thead>';
 

//    let str = '<thead><tr>';
//    fieldDate.forEach



// 바디 부분을 만드는 함수.  
function createBody(bodyData) {
     let str = '<tbody>';
     bodyData.forEach((val) => {
         str+='<tr>';

         for(let field in val){
             str += '<td>' + val[field] + '</td>';
         }
         str +='</tr>';
         return str;

     })
    
    }
/* forEach 대신 이렇게 써도 됨
    for (let val of bodyData){
        str+='<tr>';
    for(let field in val){
    str += '<td>' + val[field] + '</td>';
}
str +='</tr>';
}
str +='</tr>';
return str;
}
*/


    // this.aryData.forEach((val) => {
    //       tag += '<tbody>';
    //       for(let field in val){
    //           this.tag += '<tr><td>' + val[fields] + '</td>';
    //       }
    //       this.tag += '</tr>';
    //           });
    //   this.tag += '</tbody>';

    //  return this.tag; 




let data = [{
        sname: '홍길동',
        age: 25,
        height: 197.6,
        weight: 92.8
    },
    {
        sname: '이찬희',
        age: 20,
        height: 183.4,
        weight: 80.2
    },
    {
        sname: '김민수',
        age: 32,
        height: 169,
        weight: 48.5
    }
]


let str = createTable(data);
document.write(str);

console.log(str);


 