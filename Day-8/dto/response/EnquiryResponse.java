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
public class EnquiryResponse {

    private String eid;
    private String title;
    private String description;
    private String type;
    private Date createdAt;
    
}
