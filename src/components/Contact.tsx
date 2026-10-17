import { useState } from "react";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";
import SectionWave from "./SectionWave";

function Contact() {
  const [status, setStatus] = useState("");

  return (
    <section id="contact" aria-labelledby="contact-heading">
      <div className="contact-container-top">
        <div className="contact-container-result">
          <h1 id="contact-heading" className="text-gradient-gold">
            Get in touch
          </h1>
          {status && (
            <p
              className="contact-result"
              role="status"
              aria-live="polite"
              aria-atomic="true"
            >
              {status}
            </p>
          )}
        </div>
        <h2>Open to freelance and full-time opportunities</h2>
      </div>

      <div className="contact-container-bottom">
        <ContactDetails />
        <ContactForm onStatusChange={setStatus} />
      </div>
      <SectionWave />
    </section>
  );
}

export default Contact;
