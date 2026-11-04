import { Link } from "react-router-dom";
import CtaBand from "../components/CtaBand.jsx";
import PageHero from "../components/PageHero.jsx";
import { IconChevron } from "../components/Icons.jsx";
import { COMPANY, featured, PHONE_PRIMARY, processSteps } from "../data.js";

const reasons = [
  {
    title: "Expert Craftsmanship",
    text: "Our skilled team carries out pergola and fabrication projects with precision, a superior finish, and attention to every joint.",
  },
  {
    title: "Engineering First",
    text: "An in-house architect shapes the design. A qualified structural engineer plans the framework for strength and safety.",
  },
  {
    title: "Certified Materials",
    text: "ISO-certified metal, sourced from trusted companies across India, passes five stages of quality checks.",
  },
  {
    title: "A Clear Handover",
    text: "We install on site and hand over on time, so the structure is ready for you to enjoy.",
  },
];

export default function About() {
  return (
    <>
      <PageHero title="About Us" crumb="About" image={featured.about} />

      <section className="hex-panel">
        <div className="container about-copy">
          <p className="kicker">About Us</p>
          <h2>
            Engineering Excellence.
            <br />
            Delivering Quality.
          </h2>
          <p>
            Welcome to {COMPANY}, a name trusted by clients, architects,
            engineers, builders, and developers for exceptional fabrication solutions. We are
            committed to delivering precision-driven results where quality and excellence come
            together.
          </p>
          <p>
            With years of industry experience and a team of highly skilled professionals, we
            specialize in providing superior fabrication services tailored to meet diverse project
            requirements. Our approach focuses on understanding your vision and transforming it into
            durable, high-quality structures.
          </p>
          <p>
            At {COMPANY}, quality and reliability are at the core of everything we do. From
            initial concept and design to final execution, every stage is carried out with meticulous
            attention to detail and uncompromising standards.
          </p>
          <p>
            Our advanced facility is equipped with modern technology and state-of-the-art machinery,
            enabling us to efficiently manage projects of varying sizes and complexities while
            maintaining the highest level of craftsmanship.
          </p>
        </div>
      </section>

      <section className="mission-wrap">
        <div className="container mission-grid">
          <article className="mission-card">
            <IconChevron />
            <h3>Mission</h3>
            <p>
              To deliver premium-quality pergolas and fabrication solutions that combine durability,
              innovation, and design excellence, enhancing outdoor living experiences for every
              client.
            </p>
          </article>
          <article className="mission-card">
            <IconChevron />
            <h3>Vision</h3>
            <p>
              To be a leading and most trusted name in pergola manufacturing and outdoor fabrication,
              recognized for precision, reliability, and exceptional craftsmanship.
            </p>
          </article>
        </div>
      </section>

      <section className="why">
        <div className="container why-grid">
          <div className="why-visual">
            <img src={featured.craft} alt="Embossed ceiling panels on a finished canopy" />
            <div className="call-card">
              <span>Call Us</span>
              <a href="tel:+918971738777">{PHONE_PRIMARY.replace(/\s/g, "")}</a>
            </div>
          </div>
          <div>
            <p className="kicker">Why Choose Us</p>
            <h2>Excellence in Pergolas & Outdoor Makeovers</h2>
            <ul className="reason-list">
              {reasons.map((reason) => (
                <li key={reason.title}>
                  <span className="chev-bubble" aria-hidden="true">
                    »
                  </span>
                  <div>
                    <h3>{reason.title}</h3>
                    <p>{reason.text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Link to="/get-a-quote" className="btn ink">
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="band iron">
        <div className="container">
          <p className="kicker">The process</p>
          <h2>Four stages. One accountable team.</h2>
          <div className="step-row">
            {processSteps.map((step, index) => (
              <article key={step.title} className="step-card">
                <span>0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
