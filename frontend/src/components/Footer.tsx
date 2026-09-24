import { useState } from 'react'
import { API_BASE_URL } from '../config'
import { useApiReachability } from '../hooks/useApiReachability'
import './Footer.css'

type Weather = {
  current?: {
    temperature_2m?: number
    precipitation_probability?: number
  }
}

export default function Footer() {
  const apiState = useApiReachability()

  const [weather, setWeather] = useState<Weather | null>(null)
  const [weatherState, setWeatherState] = useState<
      'idle' | 'locating' | 'loading' | 'unavailable'
  >('idle')

  function loadLocalWeather() {
    if (!navigator.geolocation) {
      setWeatherState('unavailable')
      return
    }

    setWeatherState('locating')

    navigator.geolocation.getCurrentPosition(
        async ({ coords }) => {
          setWeatherState('loading')

          try {
            const params = new URLSearchParams({
              lat: String(coords.latitude),
              lon: String(coords.longitude),
            })

            const response = await fetch(
                `${API_BASE_URL}/api/weather?${params}`
            )

            if (!response.ok) {
              throw new Error(`Weather HTTP ${response.status}`)
            }

            const result: Weather = await response.json()

            if (
                typeof result.current?.temperature_2m !== 'number' ||
                typeof result.current?.precipitation_probability !== 'number'
            ) {
              throw new Error('Weather data is incomplete')
            }

            setWeather(result)
          } catch (error) {
            console.error('Weather request failed:', error)
            setWeatherState('unavailable')
          }
        },
        () => setWeatherState('unavailable'),
        { timeout: 10000, maximumAge: 10 * 60 * 1000 }
    )
  }

  return (
      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-header">
            <span className="footer-eyebrow">ENGINEERING PLATFORM</span>
            <span className="footer-subtitle">
            Projects and current availability
          </span>
          </div>

          <div className="footer-status-grid">
            {/* API card */}
            <div className="status-item">
              <span className="status-label">API CHECK</span>
              <span className="status-title">Engineering Platform</span>
              <span className="status-value">
              {apiState === 'reachable'
                  ? 'Responding now'
                  : apiState === 'checking'
                      ? 'Checking…'
                      : 'Check unavailable'}
            </span>
            </div>

            {/* Sentinel card */}
            <div className="status-item">
              <span className="status-label">PROJECT</span>
              <span className="status-title">Sentinel Security</span>
              <a
                  className="status-value"
                  href="https://sentinel.loganfoster.net"
              >
                View preview →
              </a>
            </div>

            {/* Replace the old SOURCE card with this WEATHER card */}
            <div className="status-item">
              <span className="status-label">LOCAL WEATHER</span>
              <span className="status-title">Your current area</span>

              {typeof weather?.current?.temperature_2m === 'number' &&
              typeof weather?.current?.precipitation_probability === 'number' ? (
                  <span className="status-value">
                {Math.round(weather.current.temperature_2m)}°F ·{' '}
                    {weather.current.precipitation_probability}% chance of
                precipitation
              </span>
              ) : (
                  <button
                      className="weather-button"
                      type="button"
                      onClick={loadLocalWeather}
                      disabled={
                          weatherState === 'locating' ||
                          weatherState === 'loading'
                      }
                  >
                    {weatherState === 'locating'
                        ? 'Getting location…'
                        : weatherState === 'loading'
                            ? 'Loading weather…'
                            : weatherState === 'unavailable'
                                ? 'Unavailable — retry'
                                : 'Use my location'}
                  </button>
              )}

              <a
                  href="https://open-meteo.com/"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                Weather data: Open-Meteo
              </a>
            </div>

            {/* Contact card */}
            <div className="status-item">
              <span className="status-label">CONTACT</span>
              <span className="status-title">Opportunities</span>
              <a className="status-value" href="/contact">
                Get in touch →
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-brand">
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
  )
}