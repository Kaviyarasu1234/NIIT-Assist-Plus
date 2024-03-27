package com.jeeva.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jeeva.model.roles.Admin;
import com.jeeva.repository.AdminRepository;

@Service
public class AdminService {
    
    @Autowired
    AdminRepository adminRepository;

    public Admin getAdminById(String aid){
        return adminRepository.findById(aid).get();
    }
    
}
