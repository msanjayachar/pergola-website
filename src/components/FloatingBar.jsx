import { Link } from "react-router-dom";
import { IconPhone, IconWhatsApp } from "./Icons.jsx";
import { COMPANY, PHONE_TEL, WHATSAPP } from "../data.js";

export default function FloatingBar() {
  return (
    <div className="floating-bar">
      <a className="float-btn phone" href={PHONE_TEL} aria-label={`Call ${COMPANY}`}>
        <IconPhone />
      </a>
      <Link className="float-contact" to="/contact">
        Contact us
      </Link>
      <a
        className="float-btn wa"
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        aria-label={`WhatsApp ${COMPANY}`}
      >
        <IconWhatsApp />
      </a>
    </div>
  );
}
