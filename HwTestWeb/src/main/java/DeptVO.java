
public class DeptVO {
	private String deptId;
	private String firstName;
	private String salary;
	
	
	
	public DeptVO(String dept_Id, String firstName, String salary) {
		super();
		this.deptId = dept_Id;
		this.firstName = firstName;
		this.salary = salary;
	}
	public DeptVO() {
		super();
	}
	public String getDeptId() {
		return deptId;
	}
	public void setDeptId(String deptId) {
		this.deptId = deptId;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getSalary() {
		return salary;
	}
	public void setSalary(String salary) {
		this.salary = salary;
	}
	
	

}
