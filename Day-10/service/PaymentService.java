package com.jeeva.service;

import com.jeeva.dto.request.PaymentRequest;
import com.jeeva.dto.response.PaymentResponse;
import com.jeeva.model.Payment;
import com.jeeva.repository.CourseRepository;
import com.jeeva.repository.PaymentRepository;
import com.jeeva.repository.StudentRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private CourseRepository courseRepository;

    public PaymentResponse getPaymentById(String pid) {
        Payment payment = paymentRepository.findById(pid).orElse(null);
        return toResponse(payment);
    }

    public List<PaymentResponse> getAllPayments() {
        List<Payment> payments = paymentRepository.findAll();
        return payments.stream().map(this::toResponse).collect(Collectors.toList());
    }

    public List<PaymentResponse> findByStudentId(String studentId) {
        List<Payment> payments = paymentRepository.findByStudent(studentRepository.findById(studentId).get());
        return payments.stream().map(this::toResponse).collect(Collectors.toList());
    }

    public List<PaymentResponse> findByCourseId(String courseId) {
        List<Payment> payments = paymentRepository.findByCourse(courseRepository.findById(courseId).get());
        return payments.stream().map(this::toResponse).collect(Collectors.toList());
    }

    public PaymentResponse createPayment(PaymentRequest request) {
        Payment payment = Payment.builder()
                .status(request.getStatus())
                .amount(request.getAmount())
                .mode(request.getMode())
                .student(studentRepository.findById(request.getStudentId()).get())
                .course(courseRepository.findById(request.getCourseId()).get())
                .build();
        PaymentResponse response = toResponse(paymentRepository.save(payment));
        return response;
    }

    private PaymentResponse toResponse(Payment payment) {
        if (payment != null) {
            return PaymentResponse.builder()
                    .pid(payment.getPid())
                    .status(payment.getStatus())
                    .amount(payment.getAmount())
                    .mode(payment.getMode())
                    .studentId(payment.getStudent().getSid())
                    .courseId(payment.getCourse().getCid())
                    .createdAt(payment.getCreatedAt())
                    .build();
        }
        return null;
    }

}
