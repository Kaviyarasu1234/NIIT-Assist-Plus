package com.jeeva.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jeeva.model.roles.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, String> {

}
