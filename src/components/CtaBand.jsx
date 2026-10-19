import { IconChat } from "./Icons.jsx";
import { PHONE_PRIMARY, PHONE_SECONDARY } from "../data.js";

export default function CtaBand() {
  return (
    <section className="cta-band">
      <div className="container">
        <div className="cta-card">
          <span className="cta-icon">
            <IconChat />
          </span>
          <h2>Reach Out to Our Experts and Start Your Custom Pergola or Outdoor Project Today</h2>
          <p>
            <a href="tel:+918971738777">{PHONE_PRIMARY}</a>,{" "}
            <a href="tel:+917676408187">{PHONE_SECONDARY}</a>
          </p>
        </div>
      </div>
    </section>
  );
}
