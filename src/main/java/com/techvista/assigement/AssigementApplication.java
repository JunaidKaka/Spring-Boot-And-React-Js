package com.techvista.assigement;

import com.techvista.assigement.models.Employee;
import com.techvista.assigement.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AssigementApplication implements CommandLineRunner {

    @Autowired
    EmployeeRepository repository;
    public static void main(String[] args) {
        SpringApplication.run(AssigementApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        Employee employee = new Employee();
        employee.setFirstName("first nanme");
        employee.setLastName("last nanme");
        repository.save(employee);

        Employee employee1 = new Employee();
        employee1.setFirstName("first nanme");
        employee1.setLastName("last nanme");
        repository.save(employee1);

        Employee employee2 = new Employee();
        employee2.setFirstName("first nanme");
        employee2.setLastName("last nanme");
        repository.save(employee2);

        Employee employee3 = new Employee();
        employee3.setFirstName("first nanme");
        employee3.setLastName("last nanme");
        repository.save(employee3);
        Employee employee4 = new Employee();
        employee4.setFirstName("first nanme");
        employee4.setLastName("last nanme");
        repository.save(employee4);

        Employee employee5 = new Employee();
        employee5.setFirstName("first nanme");
        employee5.setLastName("last nanme");
        repository.save(employee5);
    }
}
