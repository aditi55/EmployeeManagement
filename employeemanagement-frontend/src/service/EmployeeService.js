import axios from "axios";

const BASE_URL = "http://localhost:8080/employee";
class EmployeeService {
  //get all employee from our API or DB
  getAllEmployee() {
    return axios.get(BASE_URL);
  }
  //save an employee
  saveEmployee(employeeData) {
    return axios.post("http://localhost:8080/employee/add", employeeData);
  }
  updateEmployee(id, employeeData) {
    return axios.put(`${BASE_URL}/${id}`, employeeData);
  }
  getEmployeeById(id) {
    return axios.get(`${BASE_URL}/${id}`);
  }
  deleteEmployee(id) {
    return axios.delete(BASE_URL + "/" + id);
  }
}
export default new EmployeeService();
