package com.jeeva.repository;

import com.jeeva.model.Course;
import com.jeeva.model.Enroll;
import com.jeeva.model.roles.Student;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface EnrollRepository extends JpaRepository<Enroll, String> {

    List<Enroll> findByStudent(Student student);
    List<Enroll> findByCourse(Course course);
    
}
