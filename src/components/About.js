import React from "react";
import "./About.css";

const About = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about">
      <div className="container">
        <div className="about-wrapper" data-aos="fade-right">
          <div className="about-flex">
            <div className="about-text">
              <h2 className="section-title" style={{ marginBottom: "20px" }}>
                لماذا نمير؟
              </h2>
              <p>
                شركة نمير هي أكثر من مجرد مقاول، نحن شركاء نجاح. ندمج بين الخبرة
                الهندسية العميقة والفهم الدقيق لاحتياجات السوق العقاري، لنقدم
                قيمة حقيقية لعملائنا. رؤيتنا أن نكون رواد التطوير العقاري في
                المنطقة من خلال الالتزام بالجودة والشفافية.
              </p>
              <button className="btn-outline-gold" onClick={scrollToContact}>
                تعرف على فريقنا <i className="fas fa-users"></i>
              </button>
            </div>
            <div className="stats-row">
              <div className="stat-block">
                <div className="stat-number">+200</div>
                <div className="stat-text">مشروع مميز</div>
              </div>
              <div className="stat-block">
                <div className="stat-number">+30</div>
                <div className="stat-text">جائزة تصميم</div>
              </div>
              <div className="stat-block">
                <div className="stat-number">100%</div>
                <div className="stat-text">رضا العملاء</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
