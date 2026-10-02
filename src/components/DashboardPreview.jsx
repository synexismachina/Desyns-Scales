import { Activity, ArrowUpRight, Sparkles } from "lucide-react";
import "./DashboardPreview.css";

const NAV_DOTS = ["Dashboard", "Automation", "Leads", "Analytics"];

export default function DashboardPreview() {
  return (
    <div className="dash" role="img" aria-label="Preview of a Desyns Scales automation dashboard showing leads, bookings and growth metrics">
      <div className="dash__glow" aria-hidden="true" />
      <div className="dash__panel">
        <div className="dash__top">
          <div className="dash__brand">
            <span className="dash__dot" />
            System active
          </div>
          <span className="dash__user">KT</span>
        </div>

        <div className="dash__body">
          <div className="dash__nav">
            {NAV_DOTS.map((label, i) => (
              <div key={label} className={`dash__nav-item ${i === 0 ? "is-active" : ""}`}>
                <span />
                <em>{label}</em>
              </div>
            ))}
          </div>

          <div className="dash__main">
            <p className="dash__heading">Your systems, running 24/7</p>

            <div className="dash__stats">
              <div className="dash__stat">
                <span className="dash__stat-label">Leads generated</span>
                <span className="dash__stat-value">1,248</span>
                <span className="dash__stat-delta">
                  <ArrowUpRight size={12} /> 12%
                </span>
              </div>
              <div className="dash__stat">
                <span className="dash__stat-label">Appointments booked</span>
                <span className="dash__stat-value">324</span>
                <span className="dash__stat-delta">
                  <ArrowUpRight size={12} /> 18%
                </span>
              </div>
            </div>

            <div className="dash__chart-card">
              <div className="dash__chart-head">
                <span>Growth — last 30 days</span>
                <Activity size={13} />
              </div>
              <svg viewBox="0 0 240 64" className="dash__chart" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="dashArea" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--gold)" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="var(--gold)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 46 C 20 44, 34 50, 50 40 S 80 22, 100 28 S 130 44, 150 30 S 190 6, 210 14 S 232 6, 240 4"
                  fill="none"
                  stroke="var(--gold)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M0 46 C 20 44, 34 50, 50 40 S 80 22, 100 28 S 130 44, 150 30 S 190 6, 210 14 S 232 6, 240 4 V64 H0 Z"
                  fill="url(#dashArea)"
                  stroke="none"
                />
              </svg>
            </div>

            <div className="dash__ai-card">
              <div className="dash__ai-icon">
                <Sparkles size={14} />
              </div>
              <div>
                <p className="dash__ai-title">AI Assistant</p>
                <p className="dash__ai-copy">3 new leads qualified from this week's campaign.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
