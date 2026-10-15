import { useEffect, useRef } from "react";
import { Link, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Introduction from "./sections/Introduction";
import Services from "./sections/Services";
import HowWeWork from "./sections/HowWeWork";
import WhyUs from "./sections/WhyUs";
import Showcase from "./sections/Showcase";
import Outcomes from "./sections/Outcomes";
import FinalCTA from "./sections/FinalCTA";
import About from "./pages/About";
import Insights from "./pages/insights";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import FAQ from "./sections/FAQ";
import AiAutomation from "./pages/services/AiAutomation";
import DigitalIdentity from "./pages/services/DigitalIdentity";
import GrowthVisibility from "./pages/services/GrowthVisibility";
import BusinessSystems from "./pages/services/BusinessSystems";





function Home() {
  return (
    <main>
      <Hero />
      <Introduction />
      <Services />
      <HowWeWork />
      <WhyUs />
      <Showcase />
      <Outcomes />
      <FAQ />
      <FinalCTA />
    </main>
  );
}

function NotFound() {
  return (
    <main className="legal">
      <div className="container legal__inner">
        <p className="eyebrow">404 · Page not found</p>
        <h1 className="legal__title">This page doesn&apos;t exist.</h1>
        <div className="legal__body">
          <p>The address may have changed, or the page may have been removed.</p>
          <p><Link to="/">Return to the Desyns Scales homepage</Link></p>
        </div>
      </div>
    </main>
  );
}

/** Scrolls to the top on page changes, or to the #section when the link has one. */
function ScrollManager() {
  const { pathname, hash, key } = useLocation();
  const first = useRef(true);

  useEffect(() => {
    const smooth = !first.current;
    first.current = false;

    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      let tries = 0;
      const go = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: smooth ? "smooth" : "instant", block: "start" });
        } else if (tries++ < 12) {
          requestAnimationFrame(go);
        }
      };
      requestAnimationFrame(go);
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname, hash, key]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/services/ai-automation" element={<AiAutomation />} />
        <Route path="/services/digital-identity" element={<DigitalIdentity />} />
        <Route path="/services/growth-visibility" element={<GrowthVisibility />} />
        <Route path="/services/business-systems" element={<BusinessSystems />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
