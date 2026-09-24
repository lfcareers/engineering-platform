package com.loganfoster.engineering_platform.controller.contact;

import java.time.LocalDateTime;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestClient;
import org.springframework.web.client.RestClientException;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = {
        "http://localhost:5173",
        "https://loganfoster.net",
        "https://www.loganfoster.net"
})
public class ContactController {

    private final ContactMessageRepository repository;
    private final RestClient mailClient = RestClient.create("https://api.resend.com");

    @Value("${CONTACT_RESEND_API_KEY:}")
    private String apiKey;

    @Value("${CONTACT_NOTIFICATION_FROM:}")
    private String sender;

    @Value("${CONTACT_NOTIFICATION_TO:FosterF35@hotmail.com}")
    private String recipient;

    public ContactController(ContactMessageRepository repository) {
        this.repository = repository;
    }

    @PostMapping
    public ResponseEntity<?> createContactMessage(
            @RequestBody ContactMessage contactMessage
    ) {
        if (contactMessage == null ||
                blank(contactMessage.getName()) ||
                blank(contactMessage.getEmail()) ||
                blank(contactMessage.getTopic()) ||
                blank(contactMessage.getMessage()) ||
                contactMessage.getName().length() > 200 ||
                contactMessage.getEmail().length() > 254 ||
                contactMessage.getTopic().length() > 200 ||
                contactMessage.getMessage().length() > 5000 ||
                (contactMessage.getOrganization() != null &&
                        contactMessage.getOrganization().length() > 200)) {
            return ResponseEntity.badRequest()
                    .body(Map.of("error", "Invalid contact message"));
        }

        String email = contactMessage.getEmail().trim();
        if (!email.matches("^[^\\s@\\r\\n]+@[^\\s@\\r\\n]+\\.[^\\s@\\r\\n]+$")) {
            return ResponseEntity.badRequest()
                    .body(Map.of("error", "Invalid email address"));
        }

        long recent = repository.countByEmailIgnoreCaseAndCreatedAtAfter(
                email,
                LocalDateTime.now().minusMinutes(15)
        );
        if (recent >= 3) {
            return ResponseEntity.status(HttpStatus.TOO_MANY_REQUESTS)
                    .header("Retry-After", "900")
                    .body(Map.of("error", "Too many messages. Try again later."));
        }

        if (apiKey.isBlank() || sender.isBlank()) {
            return ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE)
                    .body(Map.of("error", "Contact email is not configured"));
        }

        String body = "Name: " + contactMessage.getName()
                + "\nEmail: " + email
                + "\nOrganization: "
                + (contactMessage.getOrganization() == null
                    ? ""
                    : contactMessage.getOrganization())
                + "\nTopic: " + contactMessage.getTopic()
                + "\n\n" + contactMessage.getMessage();

        try {
            mailClient.post()
                    .uri("/emails")
                    .header("Authorization", "Bearer " + apiKey)
                    .body(Map.of(
                            "from", sender,
                            "to", new String[]{recipient},
                            "reply_to", email,
                            "subject", "Engineering Hub contact: "
                                    + contactMessage.getTopic().replaceAll("[\\r\\n]", " "),
                            "text", body
                    ))
                    .retrieve()
                    .toBodilessEntity();
        } catch (RestClientException exception) {
            return ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE)
                    .body(Map.of("error", "Could not send message"));
        }

        contactMessage.setEmail(email);
        repository.save(contactMessage);

        return ResponseEntity.accepted()
                .body(Map.of("status", "received"));
    }

    private static boolean blank(String value) {
        return value == null || value.isBlank();
    }
}