// exception.js

//id 값으로 element를 찾아오는 메소드 getElementsByID
let fname = document.getElementByID('selectFile');

let data = '';
//  예외가 발생하면 try catch를 통해 에러 메세지를 띄워줌
try { 
const reader = new FileReader(); //FileReader 라는 객체를 생성
//reader라는 객체에 event를 등록하는 메소드  
//reader 라는 객체가 정상적으로 load 된 후 실행할 함수
reader .addEventListener('load',function(){
    data = reader.result;
    console.log('파일 내용: ' + data);
})  
reader.addEventListener('error', function(){
    throw'파일 읽기 에러'; 
})
fname.addEventListener('change',function(){
    reader.readAsText(fname.files[0], 'utf-8');
})
} catch (err){  //err은 매개변수
  console.log(err.message);
  console.log('정상진행');
}