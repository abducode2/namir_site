import React from "react";
import "./Projects.css";

const projectsData = [
  {
    img: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "أبراج نمير السكنية",
    desc: "معالم سكنية فاخرة بتصميم ذكي ومرافق عالمية.",
  },
  {
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "منتجع وادي نمير",
    desc: "وجهة سياحية متكاملة وسط الطبيعة الخلابة.",
  },
  {
    img: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "الحي التجاري الجديد",
    desc: "مركز أعمال يليق برؤية المستقبل.",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="flex-center text-center">
          <h2 className="section-title">أيقوناتنا المعمارية</h2>
          <p className="section-subtitle">مشاريع تجمع بين الإبداع والجودة</p>
        </div>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div
              className="project-card"
              key={index}
              data-aos="flip-up"
              data-aos-delay={index * 120}
            >
              <div
                className="project-img"
                style={{ backgroundImage: `url(${project.img})` }}
              ></div>
              <div className="project-info">
                <h4>{project.title}</h4>
                <p>{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
