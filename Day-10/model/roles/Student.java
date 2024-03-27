package com.jeeva.model.roles;

import java.util.List;

import com.jeeva.model.Enquiry;
import com.jeeva.model.Payment;
import com.jeeva.model.User;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
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
public class Student {

    @Id
    private String sid;

    private String name;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany(mappedBy = "student")
    private List<Enquiry> enquiries;

    @OneToMany(mappedBy = "student")
    private List<Payment> payments;

}
