package com.loganfoster.engineering_platform.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ProjectController {

    @GetMapping("/api/projects")
    public List<Project> projects() {
        return List.of(
                new Project(
                        "Flight Control Lab",
                        "Real-time flight control and simulation",
                        "C++ / WebAssembly"
                ),
                new Project(
                        "AI Lab",
                        "Machine learning and data experiments",
                        "Python / FastAPI"
                )
        );
    }

    public record Project(
            String name,
            String description,
            String technology
    ) {}
}
