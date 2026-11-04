import { PHONE_PRIMARY, PHONE_SECONDARY } from "../data.js";

export default function CtaBand() {
  return (
    <section className="callout">
      <div className="container">
        <p className="kicker" style={{ color: "#f0b429" }}>
          Start a project
        </p>
        <h2>Talk to the fabrication team about the space you want to cover.</h2>
        <p className="callout-phones">
          <a href="tel:+918971738777">{PHONE_PRIMARY}</a>
          <a href="tel:+917676408187">{PHONE_SECONDARY}</a>
        </p>
      </div>
    </section>
  );
}
