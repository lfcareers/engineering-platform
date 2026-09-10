package YOUR_PACKAGE.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestClient;

@RestController
@RequestMapping("/api/markets")
public class MarketController {

    private final RestClient restClient = RestClient.create();

    @Value("${twelvedata.api.key}")
    private String apiKey;

    @GetMapping("/{symbol}")
    public String getQuote(
            @PathVariable String symbol
    ) {

        String url =
                "https://api.twelvedata.com/quote"
                        + "?symbol=" + symbol
                        + "&apikey=" + apiKey;

        return restClient
                .get()
                .uri(url)
                .retrieve()
                .body(String.class);
    }
}