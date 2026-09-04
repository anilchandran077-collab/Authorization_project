package com.example.authorization.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
public class UserController {
    @GetMapping("/home")
    public String userHome() {
        return "Welcome USER. You are authorized.";
    }

    @GetMapping("/profile")
    public String profile() {
        return "This is USER profile.";
    }
}
