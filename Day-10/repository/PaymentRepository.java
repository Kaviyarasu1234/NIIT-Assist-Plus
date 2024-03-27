package com.jeeva.repository;

import com.jeeva.model.Course;
import com.jeeva.model.Payment;
import com.jeeva.model.roles.Student;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PaymentRepository extends JpaRepository<Payment, String> {
    
    List<Payment> findByStudent(Student student);
    List<Payment> findByCourse(Course course);

}
