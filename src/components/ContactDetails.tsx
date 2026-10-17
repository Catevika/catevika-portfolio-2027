import { LuAlarmClock, LuBellRing, LuMail, LuMapPin } from "react-icons/lu";

function ContactDetails() {
  return (
    <address className="contact-container-content">
      <div className="contact-availability">
        <LuBellRing className="contact-availability-icon" aria-hidden="true" />
        <p>Available for new projects, remote&nbsp;or&nbsp;in&nbsp;person</p>
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
  );
}

export default ContactDetails;
