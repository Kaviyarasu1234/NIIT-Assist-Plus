// package com.jeeva.controller;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.*;

// import com.jeeva.constant.Api;
// import com.jeeva.model.User;
// import com.jeeva.service.UserService;
// import lombok.RequiredArgsConstructor;

// import java.util.List;

// @RestController
// @RequestMapping(Api.ADMIN)
// @RequiredArgsConstructor
// public class AdminController {

//     @Autowired
//     private UserService userService;

//     @GetMapping("/Hello")
//     public ResponseEntity<String> hello() {
//         return ResponseEntity.ok().body("Hello Admin");
//     }

//     @GetMapping("/users/all")
//     public ResponseEntity<?> getAllUsers() {
//         List<User> users = userService.getAllUsers();
//         return new ResponseEntity<>(users, HttpStatus.OK);
//     }

//     @GetMapping("/users/{userId}")
//     public ResponseEntity<?> getUserById(@PathVariable String userId) {
//         User user = userService.getUserById(userId);
//         if (user != null) {
//             return ResponseEntity.ok(user);
//         } else {
//             return ResponseEntity.notFound().build();
//         }
//     }

//     @DeleteMapping("/users/{userId}")
//     public ResponseEntity<?> deleteUser(@PathVariable String userId) {
//         userService.deleteUser(userId);
//         return ResponseEntity.ok("User deleted successfully");
//     }
    
// }
