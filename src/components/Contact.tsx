import { useActionState, useRef } from "react";
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
  const formRef = useRef<HTMLFormElement>(null);
  const [result, formAction, isPending] = useActionState(
    async (_previousResult: string, formData: FormData) => {
      formData.set("access_key", accessKey);

      let response: Response;
      try {
        response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData,
        });
      } catch {
        return "Unable to connect. Please try again.";
      }

      if (!response.ok) {
        return "Unable to send your message. Please try again.";
      }

      let data: unknown;
      try {
        data = await response.json();
      } catch {
        return "Unable to send your message. Please try again.";
      }

      if (
        typeof data === "object" &&
        data !== null &&
        "success" in data &&
        data.success === true
      ) {
        formRef.current?.reset();
        return "Message sent successfully.";
      }

      return "Unable to send your message. Please try again.";
    },
    "",
  );

  return (
    <section id="contact" aria-labelledby="contact-heading">
      <div className="contact-container-top">
        <div className="contact-container-result">
          <h1 id="contact-heading" className="text-gradient-gold">Get in touch</h1>
          {isPending ?
            <p className="contact-result" role="status" aria-live="polite" aria-atomic="true">
              Sending your message...
            </p>
          : result ?
            <p className="contact-result" role="status" aria-live="polite" aria-atomic="true">
              {result}
            </p>
          : null}
        </div>
        <h2>Open to freelance and full-time opportunities</h2>
      </div>

      <div className="contact-container-bottom">
        <address className="contact-container-content">
          <div className="contact-availability">
            <LuBellRing className="contact-availability-icon" aria-hidden="true" />
            <p>Available for new project, remote&nbsp;or&nbsp;in&nbsp;person</p>
          </div>

          <div className="contact-item">
            <a href="mailto:catevikawebdev@outlook.fr">
              <p>
                <LuMail className="contact-item-icon" aria-hidden="true" />
                <span>catevikawebdev@outlook.fr</span>
              </p>
            </a>
          </div>
          <div className="contact-item">
            <p>
              <LuMapPin className="contact-item-icon" aria-hidden="true" />
              <span>Paris, France</span>
            </p>
          </div>
          <div className="contact-item">
            <p>
              <LuAlarmClock className="contact-item-icon" aria-hidden="true" />
              <span>Response time typically within 24 hours</span>
            </p>
          </div>
          <div className="contact-item contact-socials">
            <a
              href="https://github.com/catevika"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub (opens in a new tab)"
            >
              <p>
                <img
                  src="/src/assets/icons/github.svg"
                  alt=""
                  className="contact-item-img"
                />
              </p>
            </a>
            <a
              href="https://x.com/dominique_bello"
              target="_blank"
              rel="noreferrer"
              aria-label="X (opens in a new tab)"
            >
              <p>
                <img
                  src="/src/assets/icons/x.svg"
                  alt=""
                  className="contact-item-img"
                />
              </p>
            </a>
            <a
              href="https://bsky.app/profile/catevika.bsky.social"
              target="_blank"
              rel="noreferrer"
              aria-label="Bluesky (opens in a new tab)"
            >
              <p>
                <img
                  src="/src/assets/icons/bluesky.svg"
                  alt=""
                  className="contact-item-img"
                />
              </p>
            </a>
          </div>
        </address>

        <div className="contact-container-content">
          <form ref={formRef} action={formAction} className="contact-form">
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
            <button
              type="submit"
              className="btn contact-form-button"
              disabled={isPending}
            >
              <LuSend aria-hidden="true" />
              <span>{isPending ? "Sending..." : "Send Message"}</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
