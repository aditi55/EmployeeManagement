package com.aditi.employeemanagement.service;


import com.aditi.employeemanagement.model.Employee;

import java.util.List;
import java.util.Optional;

public interface IEmployeeService {

    public Employee saveEmployee(Employee employee);
    public Optional<Employee> getEmployeeById(int id);
    List<Employee> getAllEmployee();
    Employee updateEmployee(int id, Employee employee);
    void deleteEmployee(int id);
}
