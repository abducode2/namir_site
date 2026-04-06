import React from "react";
import "./Footer.css";

const Footer = () => {
  const handleLinkClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h2>نمير</h2>
            <p>بناء الجودة .. إرث من التميز</p>
          </div>

          <div className="footer-links-section">
            <h4>روابط سريعة</h4>
            <ul>
              <li>
                <a href="#home" onClick={(e) => handleLinkClick(e, "home")}>
                  الرئيسية
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleLinkClick(e, "services")}
                >
                  خدماتنا
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={(e) => handleLinkClick(e, "projects")}
                >
                  مشاريعنا
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleLinkClick(e, "about")}>
                  من نحن
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, "contact")}
                >
                  اتصل بنا
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-social">
            <h4>تابعنا</h4>
            <div className="social-icons">
              <a
                href="https://www.instagram.com/namir_co/"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://twitter.com/namir_co" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/namir-co"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://www.facebook.com/namir_co" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="copyright">
          <p>
            © 2025 شركة نمير للتطوير العقاري والمقاولات. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
