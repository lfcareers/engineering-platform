package com.loganfoster.engineering_platform.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestClient;

@RestController
@RequestMapping("/api/weather")
public class WeatherController {

    private final RestClient restClient = RestClient.create();

    @GetMapping
    public String getWeather(
            @RequestParam double lat,
            @RequestParam double lon
    ) {

        String url =
                "https://api.open-meteo.com/v1/forecast"
                        + "?latitude=" + lat
                        + "&longitude=" + lon
                        + "&current=temperature_2m,weather_code"
                        + "&temperature_unit=fahrenheit";

        return restClient
                .get()
                .uri(url)
                .retrieve()
                .body(String.class);
    }
}