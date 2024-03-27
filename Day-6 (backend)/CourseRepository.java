package com.jeeva.repository;

import com.jeeva.model.Course;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepository extends JpaRepository<Course, String> {
    List<Course> findByNameContainingIgnoreCase(String keyword);
}
