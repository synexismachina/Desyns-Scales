import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";
import markIcon from "../assets/mark-dark.png";
import { serviceLinks } from "../data/serviceLinks";
import "./Navbar.css";

const LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about", menu: "about" },
  { label: "Services", to: "/#services", menu: "services" },
  { label: "Work", to: "/#work" },
  { label: "Insights", to: "/insights" },
  { label: "Contact", to: "/#contact" },
];

const MENUS = {
  about: {
    columns: [
      {
        heading: "Who We Are",
        links: [
          { label: "About Desyns Scales", to: "/about" },
          { label: "Why We Built Desyns", to: "/about#story" },
          { label: "Our Philosophy", to: "/about#philosophy" },
          { label: "What We Believe", to: "/about#beliefs" },
        ],
      },
      {
        heading: "How We Work",
        links: [
          { label: "Our Method", to: "/about#how-we-work" },
          { label: "What We Build", to: "/about#capabilities" },
          { label: "What Makes Us Different", to: "/about#difference" },
          { label: "Who We Work With", to: "/about#industries" },
        ],
      },
      {
        heading: "Explore",
        links: [
          { label: "Services", to: "/#services" },
          { label: "What We've Built", to: "/about#proof" },
          { label: "Insights", to: "/insights" },
          { label: "Contact", to: "/#contact" },
        ],
      },
    ],
    feature: {
      quote: "Technology should work around the business, not the other way around.",
      label: "Read our philosophy",
      to: "/about#philosophy",
    },
  },
  services: {
    columns: [
      {
        heading: "Our Services",
        links: serviceLinks.map((s) => ({ label: s.name, to: s.path })),
      },
      {
        heading: "AI & Automation",
        links: [
          { label: "AI Receptionist", to: "/services/ai-automation#ai-receptionist" },
          { label: "Website Chatbot", to: "/services/ai-automation#website-chatbot" },
          { label: "WhatsApp Automation", to: "/services/ai-automation#whatsapp-automation" },
          { label: "Workflow & CRM Automation", to: "/services/ai-automation#workflow-crm-automation" },
        ],
      },
      {
        heading: "Systems & Growth",
        links: [
          { label: "Brand Identity", to: "/services/digital-identity#logo-identity" },
          { label: "SEO & Content", to: "/services/growth-visibility#seo" },
          { label: "CRM & Dashboards", to: "/services/business-systems#crm-systems" },
          { label: "Process Optimisation", to: "/services/business-systems#process-optimisation" },
        ],
      },
    ],
    feature: {
      quote: "Tell us what's slowing the business down and we'll map where automation fits.",
      label: "Book a consultation",
      to: "/#contact",
    },
  },
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const closeTimer = useRef(null);
  const { pathname, hash, key } = useLocation();

  const openMega = (name) => {
    clearTimeout(closeTimer.current);
    setOpenMenu(name);
  };
  const scheduleClose = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 140);
  };

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

  // close menus whenever the route changes
  useEffect(() => {
    setOpenMenu(null);
    setOpen(false);
  }, [pathname, hash, key]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpenMenu(null);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      clearTimeout(closeTimer.current);
    };
  }, []);

  const isCurrent = (menu) =>
    (menu === "about" && pathname === "/about") || (menu === "services" && pathname.startsWith("/services"));

  return (
    <header className={`navbar ${scrolled ? "navbar--solid" : ""}`}>
      <div className="navbar__inner container">
        <Link to="/" className="navbar__brand" onClick={() => setOpen(false)}>
          <img src={markIcon} alt="" className="navbar__mark" />
          <span className="navbar__wordmark">
            <span className="navbar__wordmark-main">DESYNS</span>
            <span className="navbar__wordmark-sub">SCALES</span>
          </span>
        </Link>

        <nav className="navbar__links" aria-label="Primary">
          {LINKS.map((link) => {
            if (!link.menu) {
              return (
                <Link key={link.label} to={link.to} className="navbar__link">
                  {link.label}
                </Link>
              );
            }

            const menu = MENUS[link.menu];
            const isOpen = openMenu === link.menu;

            return (
              <div
                key={link.label}
                className="navbar__item"
                onMouseEnter={() => openMega(link.menu)}
                onMouseLeave={scheduleClose}
                onFocus={() => openMega(link.menu)}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget)) scheduleClose();
                }}
              >
                <Link
                  to={link.to}
                  className="navbar__link navbar__link--menu"
                  aria-haspopup="true"
                  aria-expanded={isOpen}
                  aria-current={isCurrent(link.menu) ? "page" : undefined}
                >
                  {link.label}
                  <ChevronDown size={14} className={`navbar__chev ${isOpen ? "is-open" : ""}`} aria-hidden="true" />
                </Link>

                <div className={`navbar__mega ${isOpen ? "navbar__mega--open" : ""}`}>
                  <div className="container">
                    <div className="navbar__mega-panel">
                      {menu.columns.map((col) => (
                        <div key={col.heading} className="navbar__mega-col">
                          <p className="navbar__mega-heading">{col.heading}</p>
                          <ul>
                            {col.links.map((l) => (
                              <li key={l.to}>
                                <Link to={l.to} className="navbar__mega-link">
                                  {l.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}

                      <div className="navbar__mega-feature">
                        <img src={markIcon} alt="" width="34" height="36" className="navbar__mega-mark" />
                        <p className="navbar__mega-quote">{menu.feature.quote}</p>
                        <Link to={menu.feature.to} className="navbar__mega-cta">
                          {menu.feature.label} <ArrowUpRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </nav>

        <Link to="/#contact" className="navbar__cta">
          <span>Get Started</span>
        </Link>

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
            <div key={link.label} className="navbar__mobile-group">
              <Link
                to={link.to}
                style={{ transitionDelay: `${i * 40}ms` }}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
              {link.menu === "services" && (
                <div className="navbar__mobile-subnav" aria-label="Service pages">
                  {serviceLinks.map((service) => (
                    <Link key={service.slug} to={service.path} onClick={() => setOpen(false)}>
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        <Link to="/#contact" className="navbar__mobile-cta" onClick={() => setOpen(false)}>
          Get Started
        </Link>
      </div>
    </header>
  );
}
