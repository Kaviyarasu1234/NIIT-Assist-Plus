package com.jeeva.dto.response;


import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PaymentResponse {

    private String pid;
    private String status;
    private Double amount;
    private String mode;
    private String studentId;
    private String courseId;
    private Date createdAt;

}
