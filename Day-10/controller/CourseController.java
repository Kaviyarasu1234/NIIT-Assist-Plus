package com.jeeva.controller;

import com.jeeva.constant.Api;
import com.jeeva.dto.request.CourseRequest;
import com.jeeva.dto.response.CourseResponse;
import com.jeeva.service.CourseService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(Api.COURSE) 
@RequiredArgsConstructor
public class CourseController {

    @Autowired
    private CourseService courseService;

    @GetMapping("/get/{cid}")
    public ResponseEntity<?> getCourseById(@PathVariable String cid) {
        CourseResponse response = courseService.getCourseById(cid);
        return ResponseEntity.status(response != null ? HttpStatus.OK : HttpStatus.NOT_FOUND)
                .body(response);
    }

    @GetMapping("/search")
    public ResponseEntity<?> searchCourses(@RequestParam(value = "keyword") String keyword) {
        List<CourseResponse> searchResults = courseService.searchCourses(keyword);
        if (!searchResults.isEmpty()) {
            return ResponseEntity.ok(searchResults);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/get/all")
    public ResponseEntity<?> getAllCourses() {
        List<CourseResponse> responses = courseService.getAllCourses();
        return ResponseEntity.ok(responses);
    }

    @GetMapping("/get/count")
    public ResponseEntity<?> getCount() {
        Long count = courseService.getCount();
        return ResponseEntity.ok(count);
    }

    @PostMapping("/create")
    public ResponseEntity<?> createCourse(@RequestBody CourseRequest request) {
        CourseResponse response = courseService.createCourse(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @PutMapping("/update/{cid}")
    public ResponseEntity<?> updateCourse(@PathVariable String cid, @RequestBody CourseRequest request) {
        CourseResponse response = courseService.updateCourse(cid, request);
        return ResponseEntity.status(response != null ? HttpStatus.OK : HttpStatus.NOT_FOUND)
                .body(response);
    }

    @DeleteMapping("/delete/{cid}")
    public ResponseEntity<?> deleteCourse(@PathVariable String cid) {
        courseService.deleteCourse(cid);
        return ResponseEntity.noContent().build();
    }

}
