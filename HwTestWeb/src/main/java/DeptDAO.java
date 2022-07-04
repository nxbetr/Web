import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class DeptDAO extends DAO {

	
	//전체조회
	public ArrayList<DeptVO> selectAll(){
		ArrayList<DeptVO> list = new ArrayList<DeptVO>();
		
		try {
			
			getConnect();
			
			String sql = "select * from departments order by dept_id";
			PreparedStatement stmt = conn.prepareStatement(sql);
			ResultSet rs = stmt.executeQuery();
			
			while(rs.next()) {
				DeptVO vo = new DeptVO();
				vo.setDeptId(rs.getString("dept_id"));
				vo.setFirstName(rs.getString("first_name"));
				vo.setSalary(rs.getString("salary"));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}finally {
			disconnect();
		}
		
		
		return list;
		
	}
	
	public DeptVO selectOne() {
		DeptVO vo = new DeptVO();
		return vo;
		
	}
	
	public int insert(DeptVO vo) {
		int cnt = 0;
		return cnt;
	}
}
