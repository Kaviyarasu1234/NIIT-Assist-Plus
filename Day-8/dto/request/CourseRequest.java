package com.jeeva.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CourseRequest{

    private String name;
    private String description;
    private String duration;
    private String instructorId;
    private String genre;
    private String amount;
    
}

