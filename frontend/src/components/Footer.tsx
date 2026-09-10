import { useEffect, useState } from "react";
import "./Footer.css";

type WeatherData = {
  current: {
    temperature_2m: number;
    weather_code: number;
  };
};

type MarketData = {
  symbol?: string;
  close?: string;
  price?: string;
  percent_change?: string;
  change?: string;
};

export default function Footer() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [weatherError, setWeatherError] = useState(false);

  const [market, setMarket] = useState<MarketData | null>(null);
  const [marketError, setMarketError] = useState(false);

  /*
   * LOCAL WEATHER
   */
  useEffect(() => {
    if (!navigator.geolocation) {
      setWeatherError(true);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        fetch(`/api/weather?lat=${lat}&lon=${lon}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Weather request failed");
            }

            return response.json();
          })
          .then((data) => {
            setWeather(data);
          })
          .catch((error) => {
            console.error("Weather error:", error);
            setWeatherError(true);
          });
      },

      (error) => {
        console.error("Location error:", error);
        setWeatherError(true);
      }
    );
  }, []);

  /*
   * SPY MARKET DATA
   */
  useEffect(() => {
    fetch("/api/markets/SPY")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Market request failed");
        }

        return response.json();
      })
      .then((data) => {
        setMarket(data);
      })
      .catch((error) => {
        console.error("Market error:", error);
        setMarketError(true);
      });
  }, []);

  const marketPrice = market?.close ?? market?.price;

  return (
    <footer className="site-footer">
      <div className="footer-container">

        <div className="footer-header">
          <span className="footer-eyebrow">
            LIVE SYSTEMS
          </span>

          <span className="footer-subtitle">
            Engineering platform telemetry and external data
          </span>
        </div>

        <div className="footer-status-grid">

          {/* MARKET */}

          <div className="status-item">
            <span className="status-label">
              MARKETS
            </span>

            <span className="status-title">
              SPY
            </span>

            <span className="status-value">
              {marketPrice ? (
                <>
                  ${Number(marketPrice).toFixed(2)}

                  {market?.percent_change && (
                    <span
                      className={
                        Number(market.percent_change) >= 0
                          ? "positive"
                          : "negative"
                      }
                    >
                      {Number(market.percent_change) >= 0 ? " ▲ " : " ▼ "}
                      {Math.abs(Number(market.percent_change)).toFixed(2)}%
                    </span>
                  )}
                </>
              ) : marketError ? (
                "Market unavailable"
              ) : (
                "Loading..."
              )}
            </span>
          </div>

          {/* WEATHER */}

          <div className="status-item">
            <span className="status-label">
              WEATHER
            </span>

            <span className="status-title">
              Local Conditions
            </span>

            <span className="status-value">
              {weather
                ? `${Math.round(weather.current.temperature_2m)}°F`
                : weatherError
                  ? "Location unavailable"
                  : "Loading..."}
            </span>
          </div>

          {/* PLATFORM */}

          <div className="status-item">
            <span className="status-label">
              PLATFORM
            </span>

            <span className="status-title">
              API
            </span>

            <span className="status-value health-value">
              <span className="health-dot" />
              Healthy
            </span>
          </div>

          {/* BUILD */}

          <div className="status-item">
            <span className="status-label">
              BUILD
            </span>

            <span className="status-title">
              Production
            </span>

            <span className="status-value">
              ✓ Passing
            </span>
          </div>

        </div>

        <div className="footer-bottom">

          <div className="footer-brand">
            <span className="health-dot" />
            <span>LF Engineering</span>
          </div>

          <div className="footer-links">

            <a
              href="https://github.com/lfcareers"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/fosterlogan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <span className="copyright">
              © {new Date().getFullYear()} Logan Foster
            </span>

          </div>

        </div>

      </div>
    </footer>
  );
}