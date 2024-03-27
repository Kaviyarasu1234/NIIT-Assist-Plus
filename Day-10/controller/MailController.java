package com.jeeva.controller;

import java.io.IOException;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jeeva.constant.Api;
import com.jeeva.dto.request.UserRequest;
import com.jeeva.dto.response.APIResponse;
import com.jeeva.model.User;
import com.jeeva.repository.UserRepository;
import com.jeeva.service.MailService;

import jakarta.mail.MessagingException;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(Api.MAIL)
@RequiredArgsConstructor
public class MailController {

    private final MailService mailService;
    private final UserRepository userRepository;

    @PostMapping("/signup/send-otp")
    public ResponseEntity<APIResponse> sendOtpForSignUp(@RequestBody UserRequest request) throws IOException {
        User isExistEmail = userRepository.findByEmail(request.getEmail()).orElse(null);
        if (isExistEmail == null) {
            try {
                String otp = generateRandomOtp();
                APIResponse apiResponse = mailService.sendOtpEmailForSignUP(request.getEmail(),
                        request.getEmail(), otp);
                return ResponseEntity.status(apiResponse.getStatus()).body(apiResponse);
            } catch (MessagingException e) {
                APIResponse apiResponse = new APIResponse();
                apiResponse.setStatus(500);
                apiResponse.setError("Failed to send OTP");
                return ResponseEntity.status(apiResponse.getStatus()).body(apiResponse);
            }
        }
        APIResponse apiResponse = new APIResponse();
        apiResponse.setError("Already Registered email address");
        return ResponseEntity.status(apiResponse.getStatus()).body(apiResponse);
    }

    private String generateRandomOtp() {
        return String.valueOf((int) (Math.random() * 900000) + 100000);
    }
}
