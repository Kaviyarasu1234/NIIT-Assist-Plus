package com.jeeva.model.roles;

import com.jeeva.model.User;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Staff {
    
    @Id
    private String sid;

    private String name;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;

}
