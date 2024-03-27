package com.jeeva.controller;

import com.jeeva.constant.Api;
import com.jeeva.dto.request.EnquiryRequest;
import com.jeeva.dto.response.EnquiryResponse;
import com.jeeva.service.EnquiryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(value = "*")
@RequestMapping(Api.ENQUIRY)
public class EnquiryController {

    @Autowired
    private EnquiryService enquiryService;

    @GetMapping("/get/{eid}")
    public ResponseEntity<?> getEnquiryById(@PathVariable String eid) {
        EnquiryResponse response = enquiryService.getEnquiryById(eid);
        if (response != null) {
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/get/all")
    public ResponseEntity<?> getAllEnquiries() {
        List<EnquiryResponse> responses = enquiryService.getAllEnquiries();
        return ResponseEntity.ok(responses);
    }

    @GetMapping("/get/student/{studentId}")
    public ResponseEntity<?> findByStudentId(@PathVariable String studentId) {
        List<EnquiryResponse> responses = enquiryService.findByStudentId(studentId);
        return ResponseEntity.ok(responses);
    }

    @GetMapping("/get/course/{courseId}")
    public ResponseEntity<?> findByCourseId(@PathVariable String courseId) {
        List<EnquiryResponse> responses = enquiryService.findByCourseId(courseId);
        return ResponseEntity.ok(responses);
    }

    @GetMapping("/get/count")
    public ResponseEntity<?> getCourseCount() {
        Long count = enquiryService.getCount();
        return ResponseEntity.ok(count);
    }

    @PostMapping("/create")
    public ResponseEntity<?> createEnquiry(@RequestBody EnquiryRequest enquiryRequest) {
        EnquiryResponse response = enquiryService.createEnquiry(enquiryRequest);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @PutMapping("update/{eid}")
    public ResponseEntity<EnquiryResponse> updateEnquiry(@PathVariable String eid, @RequestBody EnquiryRequest enquiryRequest) {
        EnquiryResponse response = enquiryService.updateEnquiry(eid, enquiryRequest);
        if (response != null) {
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("delete/{eid}")
    public ResponseEntity<Void> deleteEnquiry(@PathVariable String eid) {
        enquiryService.deleteEnquiry(eid);
        return ResponseEntity.noContent().build();
    }
}
