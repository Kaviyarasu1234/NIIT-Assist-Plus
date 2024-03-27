package com.jeeva.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jeeva.model.roles.Admin;

@Repository
public interface AdminRepository extends JpaRepository<Admin, String> {

}
