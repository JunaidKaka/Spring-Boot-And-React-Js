package com.techvista.assigement.endpont;

import com.techvista.assigement.models.Employee;
import com.techvista.assigement.service.EmployeeService;
import com.techvista.assigement.utils.GenericResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.io.IOException;
import java.util.List;

@RestController
public class EmployeeEndPoint implements BaseApiEndPoint {

    private static final String BASE_URI = "/employee";


    @Autowired
    private EmployeeService employeeService;

    @PostMapping(path = BASE_URI + "/")
    public ResponseEntity<GenericResponse> saveEmployee(@Valid @RequestBody Employee request) throws IOException {
        GenericResponse response = new GenericResponse();
        Employee employee = employeeService.save(request);
        response.setData(employee);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }


    @GetMapping(path = BASE_URI + "/findAll")
    public ResponseEntity<GenericResponse> getAllEmployees(
            @RequestParam(required = false, defaultValue = "0" , name = "page") Integer pageNo,
            @RequestParam(required = false, defaultValue = "5" , name = "size") Integer pageSize) {
        GenericResponse response = new GenericResponse();
        Page<Employee> list = employeeService.findAllEmployees(pageNo, pageSize);
        response.setData(list);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

}
