package com.jeeva.service;

import com.jeeva.dto.request.EnrollRequest;
import com.jeeva.dto.response.EnrollResponse;
import com.jeeva.model.Course;
import com.jeeva.model.Enroll;
import com.jeeva.model.roles.Student;
import com.jeeva.repository.CourseRepository;
import com.jeeva.repository.EnrollRepository;
import com.jeeva.repository.StudentRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EnrollService {

    @Autowired
    private EnrollRepository enrollRepository;

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private CourseRepository courseRepository;

    public EnrollResponse getEnrollById(String eid) {
        Enroll enroll = enrollRepository.findById(eid).orElse(null);
        return toResponse(enroll);
    }

    public List<EnrollResponse> getAllEnrollments() {
        List<Enroll> enrollments = enrollRepository.findAll();
        return toResponses(enrollments);
    }

    public List<EnrollResponse> findByStudentId(String studentId) {
        List<Enroll> enrollments = enrollRepository.findByStudent(studentRepository.findById(studentId).get());
        return toResponses(enrollments);
    }

    public List<EnrollResponse> findByCourseId(String courseId) {
        List<Enroll> enrollments = enrollRepository.findByCourse(courseRepository.findById(courseId).get());
        return toResponses(enrollments);
    }

    public Long getEnrollCount(){
        return enrollRepository.count();
    }

    public EnrollResponse createEnroll(EnrollRequest request) {
        Student student = studentRepository.findById(request.getStudentId()).orElseThrow(() -> new RuntimeException("Student not found"));
        Course course = courseRepository.findById(request.getCourseId()).orElseThrow(() -> new RuntimeException("Course not found"));
        Enroll enroll = Enroll.builder()
                .student(student)
                .course(course)
                .build();
        EnrollResponse response = toResponse(enrollRepository.save(enroll));
        return response;
    }

    public void deleteEnroll(String eid) {
        enrollRepository.deleteById(eid);
    }


    private List<EnrollResponse> toResponses(List<Enroll> enrollments) {
        return enrollments.stream()
            .map(this::toResponse)
            .collect(Collectors.toList());
    }

    private EnrollResponse toResponse(Enroll enroll) {
        return EnrollResponse.builder()
            .eid(enroll.getId())
            .studentId(enroll.getStudent().getSid())
            .courseId(enroll.getCourse().getCid())
            .createdAt(enroll.getCreatedAt())
            .build();
    }
}
