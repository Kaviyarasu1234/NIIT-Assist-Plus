package com.jeeva.controller;

import com.jeeva.constant.Api;
import com.jeeva.dto.request.PaymentRequest;
import com.jeeva.dto.response.PaymentResponse;
import com.jeeva.service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(Api.PAYMENT)
public class PaymentController {

    @Autowired
    private PaymentService paymentService;

    @GetMapping("/{pid}")
    public ResponseEntity<?> getPaymentById(@PathVariable String pid) {
        PaymentResponse response = paymentService.getPaymentById(pid);
        if (response != null) {
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAllPayments() {
        List<PaymentResponse> responses = paymentService.getAllPayments();
        return ResponseEntity.ok(responses);
    }

    @GetMapping("/student/{studentId}")
    public ResponseEntity<?> findByStudentId(@PathVariable String studentId) {
        List<PaymentResponse> responses = paymentService.findByStudentId(studentId);
        return ResponseEntity.ok(responses);
    }

    @GetMapping("/course/{courseId}")
    public ResponseEntity<?> findByCourseId(@PathVariable String courseId) {
        List<PaymentResponse> responses = paymentService.findByCourseId(courseId);
        return ResponseEntity.ok(responses);
    }

    @PostMapping("/create")
    public ResponseEntity<PaymentResponse> createPayment(@RequestBody PaymentRequest paymentRequest) {
        PaymentResponse response = paymentService.createPayment(paymentRequest);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

}
