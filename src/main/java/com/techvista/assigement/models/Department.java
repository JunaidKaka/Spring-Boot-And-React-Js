package com.techvista.assigement.models;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name="departments")
@Data
public class Department {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="department_id")
    private Long departmentId;
    @Column(name="department_name")
    private String departmentName;
    @Column(name = "manager_id")
    private Long managerId;      //   here we will use relation annotation i.e @ManytoOne , @OneToOne

}
