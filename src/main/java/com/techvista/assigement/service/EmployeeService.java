package com.techvista.assigement.service;

import com.techvista.assigement.models.Employee;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface EmployeeService {
    Employee save(Employee employee);

    Employee update(Employee employee);

    Page<Employee> findAllEmployees(Integer pageNo, Integer pageSize);
}
