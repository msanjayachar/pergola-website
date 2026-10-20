import { useState } from "react";
import { services, WHATSAPP } from "../data.js";

export default function EnquiryForm({ heading = "Send a Message", submitLabel = "Submit" }) {
  const [sent, setSent] = useState(false);

  function onSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const city = String(data.get("city") || "").trim();
    const localPhone = String(data.get("phone") || "").trim().replace(/^\+91\s*/, "");
    const lines = [
      "New enquiry from the Pergola Masters website",
      "",
      `Name: ${data.get("name")}`,
      `Phone: +91 ${localPhone}`,
      `Email: ${data.get("email")}`,
      `Service: ${data.get("service")}`,
      city ? `City: ${city}` : null,
      `Message: ${data.get("message")}`,
    ].filter((line) => line !== null);
    const url = `${WHATSAPP}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  if (sent) {
    return (
      <div className="form-success" role="status">
        <h3>WhatsApp is open.</h3>
        <p>Your enquiry is filled in. Tap Send in WhatsApp to deliver it to Pergola Masters.</p>
        <button type="button" className="btn-gold" onClick={() => setSent(false)}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="enquiry" onSubmit={onSubmit}>
      <h2>{heading}</h2>
      <label>
        Name
        <input name="name" required autoComplete="name" placeholder="Your name" />
      </label>
      <label>
        Phone
        <span className="phone-field">
          <span className="phone-prefix">+91</span>
          <input
            name="phone"
            required
            type="tel"
            inputMode="numeric"
            autoComplete="tel-national"
            placeholder="xxxxxxxxxx"
          />
        </span>
      </label>
      <label>
        Email
        <input name="email" required type="email" autoComplete="email" placeholder="you@email.com" />
      </label>
      <label>
        Service
        <select name="service" defaultValue="Pergolas">
          {services.map((service) => (
            <option key={service.slug}>{service.nav}</option>
          ))}
          <option>Not sure yet</option>
        </select>
      </label>
      <label>
        City / Location
        <input name="city" placeholder="Bengaluru" />
      </label>
      <label>
        Message
        <textarea name="message" rows="5" required placeholder="Tell us about the space and what you need." />
      </label>
      <button className="btn-gold" type="submit">
        {submitLabel}
      </button>
    </form>
  );
}
