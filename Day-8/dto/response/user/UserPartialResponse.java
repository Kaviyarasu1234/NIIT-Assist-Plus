package com.jeeva.dto.response.user;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserPartialResponse {
	
    private String uid;
    private String firstName;
    private String lastName;
    private String email;
    private String mobile;
    private String password;
    private String image;
    private String role;

}
