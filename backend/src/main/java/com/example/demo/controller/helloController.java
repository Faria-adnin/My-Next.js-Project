
package com.example.demo.controller;

import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class helloController {

    @GetMapping("/api/hello")
    public String hello() {
        return "Hello! Welcome to Port Management API";
    }

     @GetMapping("/api/truck")
    public Map<String, Object> getTruck() {

        return Map.of(
            "driver_name", "Rahim",
            "driver_gate_pass", "GP-1001"
        );
    }

}
