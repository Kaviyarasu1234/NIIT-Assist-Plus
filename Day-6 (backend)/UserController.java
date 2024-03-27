package com.jeeva.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.jeeva.constant.Api;
import com.jeeva.dto.request.UserRequest;
import com.jeeva.model.User;
import com.jeeva.service.UserService;

import lombok.RequiredArgsConstructor;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping(Api.USER)
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping
    public ResponseEntity<String> hello() {
        return ResponseEntity.ok().body("Hello User");
    }

    @GetMapping("/{userId}")
    public ResponseEntity<User> getUserById(@PathVariable String userId) {
        User user = userService.getUserById(userId);
        if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/all")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @PostMapping("/create")
    public ResponseEntity<String> createUser(@ModelAttribute UserRequest request) throws IOException {
        boolean isUserCreated = userService.createUser(request);
        if(isUserCreated) {
        	return ResponseEntity.ok("User created successfully");
        }
        else {
        	return ResponseEntity.ok("Something went wrong!");
        }
    }

    @PutMapping("/update/{userId}")
    public ResponseEntity<String> updateUser(@PathVariable String uid, @ModelAttribute UserRequest request) throws IOException {
        userService.updateUser(uid, request);
        return ResponseEntity.ok("User updated successfully");
    }

    @DeleteMapping("/delete/{userId}")
    public ResponseEntity<String> deleteUser(@PathVariable String userId) {
        userService.deleteUser(userId);
        return ResponseEntity.ok("User deleted successfully");
    }
}
