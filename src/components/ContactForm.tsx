import { useActionState, useEffect, useRef } from "react";
import { LuSend } from "react-icons/lu";
import type { ContactForm } from "../types";

const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string;

if (!accessKey) {
  throw new Error("VITE_WEB3FORMS_ACCESS_KEY is not defined");
}

export default function ContactForm({ onStatusChange }: ContactForm) {
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

  useEffect(() => {
    onStatusChange(isPending ? "Sending your message..." : result);
  }, [isPending, onStatusChange, result]);

  return (
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
  );
}
