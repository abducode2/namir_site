import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import FloatingActions from "./components/FloatingActions";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <ThemeProvider>
      <div className="app">
        <Header />
        <main>
          <Hero />
          <Services />
          <Projects />
          <About />
          <Contact />
        </main>
        <Footer />
        <FloatingActions />
      </div>
    </ThemeProvider>
  );
}

export default App;
