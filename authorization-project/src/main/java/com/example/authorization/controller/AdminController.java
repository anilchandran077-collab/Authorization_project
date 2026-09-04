package com.example.authorization.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin")
public class AdminController {
    @GetMapping("/home")
    public String adminHome() {
        return "Welcome ADMIN. You are authorized.";
    }

    @GetMapping("/dashboard")
    public String dashboard() {
        return "This is ADMIN dashboard.";
    }
}
