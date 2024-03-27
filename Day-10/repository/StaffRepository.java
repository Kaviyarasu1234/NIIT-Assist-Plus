package com.jeeva.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jeeva.model.roles.Staff;

@Repository
public interface StaffRepository extends JpaRepository<Staff, String> {

}
