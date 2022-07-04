<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>empInsert.jsp</title>
</head>
<body>
사원등록

<form action="member" name="memberFrm">
 

 <label for="employee_id">회원번호 : </label>
<input type="number" name="employee_id" id="employee_id" readonly><br> 

<label for="first_name">사원이름 : </label> 
<input type="text" name="first_name" id="first_name"><br>
<label for="email" name="email" id="email">메일주소 : </label>
<input type="text" name="email" id="email"><br>
<label for="phone_number">전화번호 : </label>
<input type="text" name="phone_number" id="phone_number"><br>
<label for="salary">사원급여 : </label>
<input type="text" name="salary" id="salary"><br>

<input type="submit" value="추가">


</form>
</body>
</html>