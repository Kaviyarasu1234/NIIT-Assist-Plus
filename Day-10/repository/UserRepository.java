package com.jeeva.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jeeva.model.User;

public interface UserRepository extends JpaRepository<User, String> {

    Optional<User> findByEmail(String username);

}
