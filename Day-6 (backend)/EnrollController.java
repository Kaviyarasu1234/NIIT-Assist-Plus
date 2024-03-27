package com.jeeva.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jeeva.constant.Api;
import com.jeeva.dto.request.EnrollRequest;
import com.jeeva.dto.response.EnrollResponse;
import com.jeeva.dto.response.Message;
import com.jeeva.service.EnrollService;

@RestController
@RequestMapping(Api.ENROLL)
public class EnrollController {

    @Autowired
    EnrollService enrollService;

    @GetMapping("/get/{enrollId}")
    public ResponseEntity<?> getEnrollById(@PathVariable String studentId) {
        EnrollResponse response = enrollService.getEnrollById(studentId);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/get/all")
    public ResponseEntity<?> getAllEnrollments() {
        List<EnrollResponse> responses = enrollService.getAllEnrollments();
        return ResponseEntity.ok(responses);
    }

    @GetMapping("/student/{studentId}")
    public ResponseEntity<?> findByStudentId(@PathVariable String studentId) {
        List<EnrollResponse> responses = enrollService.findByStudentId(studentId);
        return ResponseEntity.ok(responses);
    }

    @GetMapping("/course/{courseId}")
    public ResponseEntity<?> findByCourseId(@PathVariable String courseId) {
        List<EnrollResponse> responses = enrollService.findByCourseId(courseId);
        return ResponseEntity.ok(responses);
    }

    @GetMapping("/count")
    public ResponseEntity<?> getEnrollCount() {
        Long count = enrollService.getEnrollCount();
        return ResponseEntity.ok(count);
    }

    @PostMapping("/create")
    public ResponseEntity<?> createEnroll(@RequestBody EnrollRequest request) {
        EnrollResponse response = enrollService.createEnroll(request);
        if (response != null) {
            return ResponseEntity.status(HttpStatus.CREATED)
                                 .body(new Message("Enroll created successfully"));
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                                 .body(new Message("Enroll creation failed"));
        }
    }

    @DeleteMapping("/{eid}")
    public ResponseEntity<?> deleteEnroll(@PathVariable String eid) {
        enrollService.deleteEnroll(eid);
        return ResponseEntity.ok(new Message("Enroll deleted successfully"));
    }
}
