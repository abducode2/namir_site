import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("يرجى إكمال جميع الحقول");
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="contact-premium" data-aos="zoom-in">
          <div className="contact-grid">
            <div className="contact-info">
              <h2 className="section-title" style={{ marginBottom: "20px" }}>
                تواصل مع نخبة خبرائنا
              </h2>
              <p className="contact-info-text">
                نحن على بعد رسالة لتلبية طموحاتك العقارية
              </p>

              <div className="contact-detail-item">
                <div className="contact-icon">
                  <i className="fas fa-map-pin"></i>
                </div>
                <div>
                  <strong>الرياض، المملكة العربية السعودية</strong>
                  <br />
                  طريق الملك فهد - الحي الدبلوماسي
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-icon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div>
                  <strong>رقم الهاتف</strong>
                  <br />
                  +966 11 456 7890
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-icon">
                  <i className="fas fa-envelope-open-text"></i>
                </div>
                <div>
                  <strong>البريد الإلكتروني</strong>
                  <br />
                  hello@namer.sa
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="الاسم الكامل"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="البريد الإلكتروني"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  rows="4"
                  name="message"
                  placeholder="تفاصيل استفسارك"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn-primary submit-btn">
                إرسال الطلب <i className="fas fa-send"></i>
              </button>
              {submitted && (
                <p className="success-message">
                  ✅ تم استلام طلبك، سنتصل بك قريباً
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
