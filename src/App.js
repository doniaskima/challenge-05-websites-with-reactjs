import React, { useEffect } from "react";
import FirstSection from './components/FirstSection';
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Recommend from "./components/Recommend";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import  Footer from "./components/Footer";
import scrollreveal from "scrollreveal";

const App = () => {
    useEffect(() => {
      const sr = scrollreveal({
        origin: "top",
        distance: "80px",
        duration: 2000,
        reset: true,
      });
      sr.reveal(
        `
        nav,
        #hero,
        #services,
        #recommend,
        #testimonials,
        footer
        `,
        {
          opacity: 0,
          interval: 300,
        }
      );
    }, []);
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <FirstSection />
      <Services />
      <Recommend />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App