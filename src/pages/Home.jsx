import { Link } from "react-router-dom";
import CtaBand from "../components/CtaBand.jsx";
import {
  COMPANY,
  designBenefits,
  materialStandards,
  PHONE_PRIMARY,
  PHONE_SECONDARY,
  processSteps,
  featured,
  services,
  visionCards,
} from "../data.js";

export default function Home() {
  return (
    <>
      <section className="studio-hero">
        <div className="container studio-copy">
          <p className="kicker">Steel. Shade. Structure.</p>
          <h1>
            MS
            <span>Pergola</span>
            Fabrications
          </h1>
          <p className="studio-lead">
            Custom pergolas, lattice, CNC screens, gates, and outdoor structures, fabricated and
            installed by one workshop.
          </p>
          <div className="studio-actions">
            <Link className="btn" to="/get-a-quote">
              Get a quote
            </Link>
            <Link className="btn ghost" to="/gallery">
              See the work
            </Link>
          </div>
        </div>
        <div className="studio-photos">
          <img src={featured.hero[0]} alt="Finished terrace pergola with a tiled roof" />
          <img src={featured.hero[1]} alt="CNC-cut metal pergola roof on a house" />
          <img src={featured.hero[2]} alt="Laser-cut leaf screen under a canopy" />
        </div>
      </section>

      <section className="band">
        <div className="container split">
          <img src={featured.intro} alt="Terrace canopy with a leaf-pattern metal screen and stair railing" />
          <div>
            <p className="kicker">{COMPANY}</p>
            <h2>Built for the site, not pulled from a catalogue.</h2>
            <p>
              {COMPANY} designs and fabricates pergolas, extensions, privacy screens, gates,
              ceilings, railings, and safety grills. An in-house architect shapes the design. A
              structural engineer plans the frame. The same team fabricates and installs it.
            </p>
            <p>
              Materials are ISO-certified metal, checked before they reach the site, and finished
              for weather, strength, and a clean handover.
            </p>
          </div>
        </div>
      </section>

      <section className="band iron">
        <div className="container">
          <p className="kicker">How a job moves</p>
          <h2>Four stages. One team.</h2>
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

      <section className="band">
        <div className="container">
          <p className="kicker">The workshop</p>
          <h2>What you can count on.</h2>
          <div className="vision-grid">
            {visionCards.map((card) => (
              <article key={card.title} className="vision-card">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band iron">
        <div className="container split">
          <div>
            <p className="kicker">Materials</p>
            <h2>Certified metal. Checked before it is cut.</h2>
            <ul className="plain-list">
              {materialStandards.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="kicker">Design first</p>
            <h2>The drawing is settled before fabrication starts.</h2>
            <ul className="checks">
              {designBenefits.map((item) => (
                <li key={item.title}>
                  <span>→</span>
                  <p>
                    <strong>{item.title}.</strong> {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="container">
          <p className="kicker">Services</p>
          <h2>What we fabricate.</h2>
          <div className="service-index">
            {services.map((service, index) => (
              <article key={service.slug} className="service-row">
                <Link to={`/${service.slug}`}>
                  <img src={service.image} alt="" />
                  <div>
                    <span className="index-no">0{index + 1}</span>
                    <h3>{service.title}</h3>
                    <p>{service.summary}</p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band" style={{ paddingTop: 0 }}>
        <div className="container">
          <p className="kicker">Selected work</p>
          <h2>From the yard and the site.</h2>
          <div className="teaser-row">
            {featured.teaser.map((src) => (
              <img key={src} src={src} alt="" />
            ))}
          </div>
          <Link to="/gallery" className="section-link">
            Open the full gallery
          </Link>
        </div>
      </section>

      <section className="band iron">
        <div className="container">
          <p className="kicker">Call</p>
          <h2>
            <a href="tel:+918971738777">{PHONE_PRIMARY}</a>
          </h2>
          <p>
            <a href="tel:+917676408187">{PHONE_SECONDARY}</a>
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
