import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import markIcon from "../assets/mark-dark.png";
import "./Navbar.css";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`navbar ${scrolled ? "navbar--solid" : ""}`}>
      <div className="navbar__inner container">
        <a href="#home" className="navbar__brand" onClick={() => setOpen(false)}>
          <img src={markIcon} alt="" className="navbar__mark" />
          <span className="navbar__wordmark">
            <span className="navbar__wordmark-main">DESYNS</span>
            <span className="navbar__wordmark-sub">SCALES</span>
          </span>
        </a>

        <nav className="navbar__links" aria-label="Primary">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="navbar__cta">
          <span>Get Started</span>
        </a>

        <button
          className="navbar__toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div className={`navbar__mobile ${open ? "navbar__mobile--open" : ""}`}>
        <nav aria-label="Mobile">
          {LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              style={{ transitionDelay: `${i * 40}ms` }}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="navbar__mobile-cta" onClick={() => setOpen(false)}>
          Get Started
        </a>
      </div>
    </header>
  );
}
