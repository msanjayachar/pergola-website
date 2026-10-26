import EnquiryForm from "../components/EnquiryForm.jsx";
import PageHero from "../components/PageHero.jsx";
import { PHONE_PRIMARY, PHONE_SECONDARY } from "../data.js";

export default function Quote() {
  return (
    <>
      <PageHero title="Get a Quote" crumb="Get a Quote" image="/images/work/deck-gazebo.jpg" />
      <section className="contact-page">
        <div className="container quote-layout">
          <div className="quote-copy">
            <div className="section-kicker">Custom fabrication</div>
            <h2>Tell us about the space. We will come back with a clear quote.</h2>
            <p>
              Share the service, the location, and a short note on size or style. Pergola Masters.in
              designs, fabricates, and installs pergolas, extensions, privacy structures, gates,
              ceilings, railings, and safety grills across Bengaluru.
            </p>
            <p className="quote-phones">
              <a href="tel:+918971738777">{PHONE_PRIMARY}</a>
              <a href="tel:+917676408187">{PHONE_SECONDARY}</a>
            </p>
          </div>
          <EnquiryForm heading="Get a Quote" submitLabel="Request Quote" />
        </div>
      </section>
    </>
  );
}
