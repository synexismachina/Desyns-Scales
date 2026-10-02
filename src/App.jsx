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

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Introduction />
        <Services />
        <HowWeWork />
        <WhyUs />
        <Showcase />
        <Outcomes />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
