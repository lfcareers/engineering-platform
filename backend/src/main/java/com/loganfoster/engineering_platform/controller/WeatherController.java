package com.loganfoster.engineering_platform.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestClient;

@RestController
@RequestMapping("/api/weather")
@CrossOrigin(origins = {
        "http://localhost:5173",
        "https://loganfoster.net",
        "https://www.loganfoster.net"
})
public class WeatherController {

    private final RestClient restClient = RestClient.create();

    @GetMapping
    public ResponseEntity<String> getWeather(
            @RequestParam double lat,
            @RequestParam double lon
    ) {
        if (!Double.isFinite(lat) || !Double.isFinite(lon)
                || lat < -90 || lat > 90
                || lon < -180 || lon > 180) {
            return ResponseEntity.badRequest().body("{\"error\":\"Invalid coordinates\"}");
        }

        String url = "https://api.open-meteo.com/v1/forecast"
                + "?latitude=" + lat
                + "&longitude=" + lon
                + "&current=temperature_2m,precipitation_probability"
                + "&temperature_unit=fahrenheit";

        String weather = restClient.get()
                .uri(url)
                .retrieve()
                .body(String.class);

        return ResponseEntity.ok(weather);
    }
}