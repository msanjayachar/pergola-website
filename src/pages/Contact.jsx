import EnquiryForm from "../components/EnquiryForm.jsx";
import PageHero from "../components/PageHero.jsx";
import { IconMail, IconPhone, IconPin } from "../components/Icons.jsx";
import { ADDRESS, EMAIL, EMAIL_ALT, PHONE_PRIMARY, PHONE_SECONDARY } from "../data.js";

export default function Contact() {
  return (
    <>
      <PageHero title="Contact" crumb="Contact" image="/images/work/led-louver-terrace.jpg" />
      <section className="contact-page">
        <div className="container contact-grid">
          <div className="contact-cards">
            <article>
              <IconPin />
              <h2>Our Office Address</h2>
              <p>{ADDRESS}</p>
            </article>
            <article>
              <IconPhone />
              <h2>Phone Numbers</h2>
              <p>
                <a href="tel:+918971738777">{PHONE_PRIMARY}</a>
              </p>
              <p>
                <a href="tel:+917676408187">{PHONE_SECONDARY}</a>
              </p>
            </article>
            <article>
              <IconMail />
              <h2>Email Us</h2>
              <p>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </p>
              <p>
                <a href={`mailto:${EMAIL_ALT}`}>{EMAIL_ALT}</a>
              </p>
            </article>
            <div className="map-frame">
              <iframe
                title="Pergola Masters office in Whitefield, Bengaluru"
                src="https://maps.google.com/maps?q=Immadihalli%20Main%20Road%20Whitefield%20Bengaluru&z=15&output=embed"
                loading="lazy"
              />
            </div>
          </div>
          <EnquiryForm heading="Send a Message" submitLabel="Contact Now" />
        </div>
      </section>
    </>
  );
}
