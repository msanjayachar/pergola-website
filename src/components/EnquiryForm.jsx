import { useState } from "react";
import { services } from "../data.js";

export default function EnquiryForm({ heading = "Send a Message", submitLabel = "Submit" }) {
  const [sent, setSent] = useState(false);

  function onSubmit(event) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="form-success" role="status">
        <h3>Thank you.</h3>
        <p>We have received your enquiry and will call you on the number you shared.</p>
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
        <input name="phone" required type="tel" autoComplete="tel" placeholder="+91" />
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
