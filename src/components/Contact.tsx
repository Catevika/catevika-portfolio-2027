import { useState } from "react";
import {
  LuBellRing,
  LuAlarmClock,
  LuMail,
  LuMapPin,
  LuSend,
} from "react-icons/lu";

const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string;

if (!accessKey) {
  throw new Error("VITE_WEB3FORMS_ACCESS_KEY is not defined");
}
function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    void (async () => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
      formData.append("access_key", `${accessKey}`);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = (await response.json()) as { success: boolean };
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        setResult("Error");
      }
    })();
  };

  return (
    <section id="contact">
      <div className="contact-container-top">
        <div className="contact-container-result">
          <h1 className="text-gradient-gold">Get in touch</h1>
          {result ? <p className="contact-result">{result}</p> : null}
        </div>
        <h2>Open to freelance and full-time opportunities</h2>
      </div>

      <div className="contact-container-bottom">
        <address className="contact-container-content">
          <div className="contact-availability">
            <LuBellRing className="contact-availability-icon" />
            <p>Available for new project, remote&nbsp;or&nbsp;in&nbsp;person</p>
          </div>

          <div className="contact-item">
            <a href="mailto:catevikawebdev@outlook.fr">
              <p>
                <LuMail className="contact-item-icon" />
                <span>catevikawebdev@outlook.fr</span>
              </p>
            </a>
          </div>
          <div className="contact-item">
            <p>
              <LuMapPin className="contact-item-icon" />
              <span>Paris, France</span>
            </p>
          </div>
          <div className="contact-item">
            <p>
              <LuAlarmClock className="contact-item-icon" />
              <span>Response time typically within 24 hours</span>
            </p>
          </div>
        </address>

        <div className="contact-container-content">
          <form onSubmit={onSubmit} className="contact-form">
            <p className="contact-form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                autoComplete="name"
                placeholder="Surname Name"
                required
                className="glass-card p-2"
              />
            </p>
            <p className="contact-form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                placeholder="email@example.com"
                required
                className="glass-card p-2"
              />
            </p>
            <p className="contact-form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Project Inquiry"
                required
                className="glass-card p-2"
              />
            </p>
            <p className="contact-form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project..."
                required
                rows={5}
                className="glass-card p-2"
              ></textarea>
            </p>
            <button type="submit" className="btn contact-form-button">
              <LuSend />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
