import logoDark from "../assets/logo-dark.png";
import "./Footer.css";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  "AI & Automation",
  "Digital Identity",
  "Growth & Visibility",
  "Business Systems",
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
            {SERVICES.map((s) => (
              <li key={s}>
                <a href="#services">{s}</a>
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
              <a href="https://www.desynsscales.com">www.desynsscales.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>© {year} Desyns Scales. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
