import "./Services.css";

const servicesData = [
  {
    icon: "fa-solid fa-building-columns",
    title: "تطوير متكامل",
    desc: "حلول عقارية مبتكرة من الفكرة إلى التسليم النهائي.",
  },
  {
    icon: "fa-solid fa-compass-drafting",
    title: "هندسة راقية",
    desc: "تصاميم عصرية تعكس الفخامة والاستدامة.",
  },
  {
    icon: "fa-solid fa-helmet-safety",
    title: "مقاولات كبرى",
    desc: "تنفيذ احترافي بأعلى معايير الجودة العالمية.",
  },
  {
    icon: "fa-solid fa-chart-line",
    title: "استشارات استثمارية",
    desc: "تعظيم العائد على استثماراتك العقارية.",
  },
];

const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="flex-center text-center">
          <h2 className="section-title">خدمات حصرية</h2>
          <p className="section-subtitle">
            نقدم حلولاً شاملة بمعايير استثنائية لعملائنا الكرام
          </p>
        </div>
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div
              className="service-card"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
