import { useState, useEffect } from "react";
import logo from "../assets/nmr logo1 .png";
import logo2 from "../assets/nmr logo2 .png";
import { useTheme } from "../contexts/ThemeContext";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { darkMode, toggleDarkMode } = useTheme();

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <img src={logo} alt="Namir Logo" className="logo-img" />
          <div className="logo-text">
            <img src={logo2} alt="Namir Logo" className="logo-img" />
          </div>
        </div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <a
              href="#home"
              className={activeSection === "home" ? "active" : ""}
              onClick={(e) => handleLinkClick(e, "home")}
            >
              الرئيسية
            </a>
          </li>
          <li>
            <a
              href="#services"
              className={activeSection === "services" ? "active" : ""}
              onClick={(e) => handleLinkClick(e, "services")}
            >
              خدمات فاخرة
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={activeSection === "projects" ? "active" : ""}
              onClick={(e) => handleLinkClick(e, "projects")}
            >
              إنجازاتنا
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={activeSection === "about" ? "active" : ""}
              onClick={(e) => handleLinkClick(e, "about")}
            >
              قصة التميز
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={activeSection === "contact" ? "active" : ""}
              onClick={(e) => handleLinkClick(e, "contact")}
            >
              تواصل معنا
            </a>
          </li>
        </ul>

        <div className="nav-actions">
          <button className="dark-toggle" onClick={toggleDarkMode}>
            <i className={darkMode ? "fas fa-sun" : "fas fa-moon"}></i>
          </button>
          <div className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)}>
            <i className={menuOpen ? "fas fa-times" : "fas fa-gem"}></i>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
