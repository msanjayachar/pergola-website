import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CtaBand from "../components/CtaBand.jsx";
import { FeatureIcon, IconShield } from "../components/Icons.jsx";
import {
  designBenefits,
  gallery,
  heroSlides,
  materialStandards,
  PHONE_PRIMARY,
  PHONE_SECONDARY,
  processSteps,
  services,
  visionCards,
} from "../data.js";

export default function Home() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((current) => (current + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const featured = services.slice(0, 3);

  return (
    <>
      <section className="hero" aria-roledescription="carousel">
        {heroSlides.map((item, index) => (
          <div
            key={item.title}
            className={`hero-slide ${index === slide ? "is-active" : ""}`}
            style={{ backgroundImage: `url(${item.image})` }}
            aria-hidden={index !== slide}
          >
            <div className="container hero-copy">
              <h1>{item.title}</h1>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
        <div className="hero-dots">
          {heroSlides.map((item, index) => (
            <button
              key={item.title}
              type="button"
              className={index === slide ? "is-active" : ""}
              aria-label={`Show slide ${index + 1}`}
              onClick={() => setSlide(index)}
            />
          ))}
        </div>
      </section>

      <section className="dark-block intro-block">
        <div className="container narrow">
          <h2>High-Quality Pergolas at Best Prices, Backed by an Unmatched Warranty.</h2>
          <p>
            Experience excellence with one of Bangalore’s leading professional pergola manufacturers
            and privacy structure fabricators. We deliver superior quality craftsmanship at
            competitive prices, ensuring exceptional value for your investment. Transform your home
            with beautifully customized pergolas that enhance your outdoor aesthetics and
            functionality.
          </p>
          <p>
            We specialize in pergolas, lattice, jali tiles, CNC designs, rafters, and landscape
            architecture, providing durable, precision-crafted solutions tailored to your needs.
          </p>
        </div>
      </section>

      <section className="dark-block story-block">
        <div className="container">
          <h2>Crafting Exceptional Outdoor Spaces</h2>
          <p>
            Pergola Masters.in is a leading name in premium pergola manufacturing and outdoor
            fabrication solutions, delivering excellence through precision, quality, and innovation.
            With years of expertise and a dedicated team of skilled professionals, we specialize in
            designing and fabricating customized pergolas, lattice structures, CNC works, and
            landscape enhancements that elevate outdoor living spaces. From concept to completion, we
            focus on superior craftsmanship, durable materials, and modern aesthetics to create
            functional and visually stunning environments. Trusted by architects, engineers, builders,
            and thousands of satisfied clients, Pergola Masters.in transforms ordinary spaces into
            extraordinary outdoor experiences.
          </p>
          <p>
            Our in-house architect carefully develops the design to ensure it aligns with both
            aesthetics and functionality. Once the design is finalized, the structural framework and
            technical aspects are planned and provided by a qualified structural engineer, ensuring
            strength, stability, and long-lasting safety for the entire structure.
          </p>
        </div>
      </section>

      <section className="dark-block">
        <div className="container">
          <div className="section-kicker">How we work</div>
          <h2 className="light-title">From the first sketch to installation.</h2>
          <div className="steps">
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

      <section className="dark-block vision-block">
        <div className="container">
          <h2 className="center-title">Our Vision</h2>
          <div className="vision-grid">
            {visionCards.map((card) => (
              <article key={card.title} className="vision-card">
                <FeatureIcon name={card.icon} />
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="gold-block">
        <div className="container">
          <h2>Our Material Standards</h2>
          <ul className="bullets">
            {materialStandards.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="gold-block gold-soft">
        <div className="container">
          <h2>A Clear Design Before We Fabricate</h2>
          <ul className="checks">
            {designBenefits.map((item) => (
              <li key={item.title}>
                <span aria-hidden="true">✓</span>
                <p>
                  <strong>{item.title}</strong> – {item.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="services-band">
        <div className="container">
          <div className="band-head">
            <h2>What We Fabricate</h2>
            <Link to="/gallery" className="view-more">
              VIEW MORE <span aria-hidden="true">›</span>
            </Link>
          </div>
          <div className="service-grid">
            {featured.map((service) => (
              <article key={service.slug} className="service-card">
                <img src={service.image} alt="" />
                <div className="service-body">
                  <span className="gold-badge" aria-hidden="true">
                    <IconShield />
                  </span>
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                  <Link to={`/${service.slug}`} className="read-more">
                    Read More
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <ul className="service-list">
            {services.slice(3).map((service) => (
              <li key={service.slug}>
                <Link to={`/${service.slug}`}>
                  <strong>{service.nav}</strong>
                  <span>{service.summary}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="call-strip">
        <div className="container">
          <p>Call for Services</p>
          <div>
            <a href="tel:+918971738777">{PHONE_PRIMARY}</a>
            <a href="tel:+917676408187">{PHONE_SECONDARY}</a>
          </div>
        </div>
      </section>

      <section className="gallery-teaser">
        <div className="container">
          <div className="section-kicker light">PERGOLA MASTERS.IN</div>
          <h2>Our Gallery</h2>
          <p>
            Pergolas, lattice, CNC screens, gates, and landscape fabrication: a look at the outdoor
            work we design and build.
          </p>
          <div className="teaser-grid">
            {gallery.slice(0, 6).map((item) => (
              <img key={item.src} src={item.src} alt={item.alt} />
            ))}
          </div>
          <Link to="/gallery" className="btn-gold">
            View Gallery
          </Link>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
