package com.jeeva.dto.response.user;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserFullResponse {
	
    private String uid;
    private String name;
    private String email;
    private String mobile;
    private String password;
    private String image;
    private String role;
    private List<String> courses;
    private List<String> enquiries;
    private List<String> payments;

}
