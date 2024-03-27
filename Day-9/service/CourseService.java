package com.jeeva.service;

import com.jeeva.dto.request.CourseRequest;
import com.jeeva.dto.response.CourseResponse;
import com.jeeva.model.Course;
import com.jeeva.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CourseService {

    @Autowired
    CourseRepository courseRepository;

    @Autowired
    AdminService adminService;


    public CourseResponse getCourseById(String cid) {
        Course course = courseRepository.findById(cid).orElse(null);
        return toResponse(course);
    }

    public List<CourseResponse> searchCourses(String keyword) {
        List<Course> courses = courseRepository.findByNameContainingIgnoreCase(keyword);
        return courses.stream()
                .map(this::toResponse)
                .collect(Collectors.toList());
    }

    public List<CourseResponse> getAllCourses() {
        List<Course> courses = courseRepository.findAll();
        return courses.stream().map(this::toResponse).collect(Collectors.toList());
    }

    public Long getCount(){
        return courseRepository.count();
    }

    public CourseResponse createCourse(CourseRequest request) {
        Course course = Course.builder()
                .name(request.getName())
                .description(request.getDescription())
                .duration(request.getDuration())
                .instructor(adminService.getAdminById(request.getInstructorId()))
                .genre(request.getGenre())
                .amount(request.getAmount())
                .build();
        Course response = courseRepository.save(course);
        return toResponse(response);
    }

    public CourseResponse updateCourse(String cid, CourseRequest request) {
        Course course = courseRepository.findById(cid).orElse(null);
        if (course != null) {
            course.setName(request.getName());
            course.setDescription(request.getDescription());
            course.setDuration(request.getDuration());
            course.setAmount(request.getAmount());
            CourseResponse response = toResponse(courseRepository.save(course));
            return response;
        }
        return null;
    }

    public void deleteCourse(String cid) {
        courseRepository.deleteById(cid);
    }

    private CourseResponse toResponse(Course course) {
        return (course != null) ? 
            CourseResponse.builder()
                .cid(course.getCid())
                .name(course.getName())
                .description(course.getDescription())
                .duration(course.getDuration())
                .instructor(course.getInstructor().getName())
                .genre(course.getGenre())
                .amount(course.getAmount())
                .build()
            : null;
    }
}
