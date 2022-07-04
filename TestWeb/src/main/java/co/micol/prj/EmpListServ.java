package co.micol.prj;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(urlPatterns = { "/EmpListServ", "/empList" })
public class EmpListServ extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public EmpListServ() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// 조회해서
		// ArrayList<EmpVO> list = new ArrayList<>();
		EmpDAO dao = new EmpDAO(); // EmpDAO에서 만든걸 import

		request.setAttribute("list", dao.selectAll()); // 조회된 결과를 list라는 이름으로 request에 담아
		request.getRequestDispatcher("/WEB-INF/jsp/empList.jsp").forward(request, response); // jsp에 보내줌
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

	}

}
