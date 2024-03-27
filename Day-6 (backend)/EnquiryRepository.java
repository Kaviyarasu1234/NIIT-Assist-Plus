package com.jeeva.repository;

import com.jeeva.model.Course;
import com.jeeva.model.Enquiry;
import com.jeeva.model.roles.Student;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface EnquiryRepository extends JpaRepository<Enquiry, String> {

    List<Enquiry> findByStudent(Student student);
    List<Enquiry> findByCourse(Course course);

}
