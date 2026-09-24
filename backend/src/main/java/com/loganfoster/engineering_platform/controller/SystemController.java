package com.loganfoster.engineering_platform.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;
import java.time.Instant;

@RestController
@CrossOrigin(origins = {
        "http://localhost:5173",
        "https://loganfoster.net",
        "https://www.loganfoster.net"
})
public class SystemController {

    private final JdbcTemplate database;
    private final HttpClient http = HttpClient.newBuilder()
            .connectTimeout(Duration.ofSeconds(2))
            .build();

    private final String sentinelApiHealthUrl;

    public SystemController(
            JdbcTemplate database,
            @Value("${SENTINEL_API_HEALTH_URL:}") String sentinelApiHealthUrl
    ) {
        this.database = database;
        this.sentinelApiHealthUrl = sentinelApiHealthUrl;
    }

    public record Snapshot(
            String api,
            String database,
            String sentinelSite,
            String sentinelApi,
            Instant checkedAt
    ) {}

    @GetMapping("/api/status")
    public Snapshot status() {
        String databaseResult;

        try {
            Integer result = database.queryForObject("SELECT 1", Integer.class);
            databaseResult = Integer.valueOf(1).equals(result)
                    ? "responding"
                    : "check_unavailable";
        } catch (Exception exception) {
            databaseResult = "check_unavailable";
        }

        return new Snapshot(
                "responding",
                databaseResult,
                checkHttp("https://sentinel.loganfoster.net"),
                sentinelApiHealthUrl.isBlank()
                        ? "not_configured"
                        : checkHttp(sentinelApiHealthUrl),
                Instant.now()
        );
    }

    private String checkHttp(String url) {
        try {
            HttpRequest request = HttpRequest.newBuilder(URI.create(url))
                    .timeout(Duration.ofSeconds(3))
                    .GET()
                    .build();

            HttpResponse<Void> response =
                    http.send(request, HttpResponse.BodyHandlers.discarding());

            return response.statusCode() >= 200 && response.statusCode() < 300
                    ? "responding"
                    : "check_unavailable";
        } catch (Exception exception) {
            return "check_unavailable";
        }
    }
}