import "./Hero.css";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content" data-aos="fade-up">
          <div className="hero-badge">
            <i className="fas fa-crown"></i> الريادة في التطوير العقاري
          </div>
          <h2>
            نمير <span>للتطوير العقاري والمقاولات</span> <br /> حيث تلتقي الجودة
            بالابتكار
          </h2>
          <p>
            أكثر من 25 عاماً من التميز في المقاولات والتطوير العقاري، نصنع معالم
            تلهم الأجيال.
          </p>
          <button className="btn-primary" onClick={scrollToContact}>
            تواصل معنا <i className="fas fa-arrow-left"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
