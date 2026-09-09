package com.loganfoster.engineering_platform.controller.contact;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = {
        "http://localhost:5173",
        "https://loganfoster.net"
})
public class ContactController {

    private final ContactMessageRepository repository;

    public ContactController(ContactMessageRepository repository) {
        this.repository = repository;
    }

    @PostMapping
    public ResponseEntity<ContactMessage> createContactMessage(
            @RequestBody ContactMessage contactMessage
    ) {
        ContactMessage savedMessage = repository.save(contactMessage);

        return ResponseEntity.ok(savedMessage);
    }
}