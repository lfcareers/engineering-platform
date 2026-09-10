import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">

        <div className="footer-header">
          <span className="footer-eyebrow">LIVE SYSTEMS</span>
          <span className="footer-subtitle">
            Engineering platform telemetry and external data
          </span>
        </div>

        <div className="footer-status-grid">

          <div className="status-item market-card">
            <span className="status-label">MARKETS</span>
            <span className="status-title">SPY</span>
            <span className="status-value">
              684.22 <span className="positive">▲ 0.42%</span>
            </span>
          </div>

          <div className="status-item weather-card">
            <span className="status-label">WEATHER</span>
            <span className="status-title">Orlando</span>
            <span className="status-value">82°F · Clear</span>
          </div>

          <div className="status-item platform-card">
            <span className="status-label">PLATFORM</span>
            <span className="status-title">API</span>

            <span className="status-value health-value">
              <span className="health-dot" />
              Healthy
            </span>
          </div>

          <div className="status-item build-card">
            <span className="status-label">BUILD</span>
            <span className="status-title">Production</span>
            <span className="status-value">✓ Passing</span>
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