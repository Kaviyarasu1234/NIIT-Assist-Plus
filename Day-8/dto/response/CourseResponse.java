package com.jeeva.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CourseResponse{

    private String cid;
    private String name;
    private String description;
    private String instructor;
    private String genre;
    private String duration;
    private String amount;
    
}
