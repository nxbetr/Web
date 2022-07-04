package co.micol.prj;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

 
@WebServlet("/EmpListServ")
public class EmpListServ extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    
    public EmpListServ() {
        super();
    }

	 
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	 //조회해서
	ArrayList<EmpVO> list = new ArrayList<>();
	list.add(new EmpVO("100", "ann", "43000"));
	list.add(new EmpVO("101", "tom", "23000"));
	list.add(new EmpVO("102", "ami", "53000"));
	
	request.setAttribute("list", list);	//조회된 결과를 list라는 이름으로 request에 담아
	//jsp에 보내줌
	request.getRequestDispatcher("empList.jsp").forward(request, response);
	
 
	
	}
	

	 
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		 
	}

}
