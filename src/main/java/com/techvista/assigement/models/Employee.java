package com.techvista.assigement.models;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import java.math.BigDecimal;
import java.sql.Date;

@Entity
@Table(name = "employees")
@Data
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "employee_id")
    private Long employeeId;
    @Column(name = "first_name")
    @NotEmpty(message = "Please provide a First Name")
    @Size(min = 3, message = "First Name should be at least 3 characters")
    private String firstName;
    @Column(name = "last_name")
    @NotEmpty(message = "Please provide a Last Name")
    @Size(min = 3, message = "Last Name should be at least 3 characters")
    private String lastName;
    private String email;
    @Min(value = 1,message = " the salary should not be 0 ")
    private BigDecimal salary;
    @Column(name = "phone_number")

    @Pattern(regexp = " ^(?=(?:[^-]*-){4}[^-]*$)(?=(?:\\D*\\d){13}\\D*$).*$", message = "invalid phone number")
    private String phoneNumber;
    @Column(name = "hire_date")
    private Date hireDate;
    @Column(name = "manager_id")
    private Long managerId;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "department_id", referencedColumnName = "department_id")
    private Department department;
}
