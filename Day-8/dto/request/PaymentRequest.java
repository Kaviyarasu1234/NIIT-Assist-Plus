package com.jeeva.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PaymentRequest {

    private String status;
    private Double amount;
    private String mode;
    private String studentId;
    private String courseId;
    
}
