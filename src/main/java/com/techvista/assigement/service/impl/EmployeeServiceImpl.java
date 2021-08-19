package com.techvista.assigement.service.impl;

import com.techvista.assigement.models.Employee;
import com.techvista.assigement.repository.EmployeeRepository;
import com.techvista.assigement.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Override
    public Employee save(Employee employee) {
        return employeeRepository.save(employee);
    }

    @Override
    public Employee update(Employee employee) {
        return employeeRepository.save(employee);
    }



   @Override
    public Page<Employee> findAllEmployees(Integer pageNo, Integer pageSize)
    {
        Pageable paging = PageRequest.of(pageNo, pageSize);

        Page<Employee> pagedResult = employeeRepository.findAll(paging);

        if(pagedResult.hasContent()) {
            return pagedResult;
        } else {
            return Page.empty();
        }
    }

}
