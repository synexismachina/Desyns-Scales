import logoDark from "../assets/logo-dark.png";
import { Link } from "react-router-dom";
import "./Footer.css";
import { serviceLinks } from "../data/serviceLinks";

const NAV = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#work" },
  { label: "Contact", href: "/#contact" },
];


export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img src={logoDark} alt="Desyns Scales" className="footer__logo" />
          <p className="footer__tagline">Strategy | Growth | Impact</p>
        </div>

        <nav className="footer__col" aria-label="Footer navigation">
          <p className="footer__heading">Navigation</p>
          <ul>
            {NAV.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__col">
          <p className="footer__heading">Services</p>
          <ul>
            {serviceLinks.map((s) => (
              <li key={s.slug}>
                <Link to={s.path}>{s.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <p className="footer__heading">Contact</p>
          <ul>
            <li>
              <a href="mailto:info@desynsscales.com">info@desynsscales.com</a>
            </li>
            <li>
              <span className="footer__location">Pretoria, South Africa</span>
            </li>
            <li>
              <a href="https://www.desynsscales.com">www.desynsscales.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>© {year} Desyns Scales. All Rights Reserved.</p>
        <nav className="footer__legal" aria-label="Legal">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <span className="footer__legal-dot" aria-hidden="true">•</span>
          <Link to="/terms-of-service">Terms of Service</Link>
        </nav>
      </div>
    </footer>
  );
}
