package com.loganfoster.engineering_platform.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class SystemController {

    @GetMapping("/api/status")
    public Map<String, String> status() {
        return Map.of(
                "application", "Logan Foster Engineering Platform",
                "status", "ONLINE",
                "version", "0.1.0"
        );
    }
}