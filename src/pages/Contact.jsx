import EnquiryForm from "../components/EnquiryForm.jsx";
import PageHero from "../components/PageHero.jsx";
import { IconMail, IconPhone, IconPin } from "../components/Icons.jsx";
import { ADDRESS, COMPANY, EMAIL, EMAIL_ALT, featured, PHONE_PRIMARY, PHONE_SECONDARY } from "../data.js";

export default function Contact() {
  return (
    <>
      <PageHero title="Contact" crumb="Contact" image={featured.contact} />
      <section className="contact-page">
        <div className="container contact-grid">
          <div className="contact-cards">
            <article>
              <IconPin />
              <h2>Our Office Address</h2>
              <p>{ADDRESS}</p>
              <p className="address-note">This line is a placeholder until the workshop address is confirmed.</p>
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
            <article>
              <h2>Map</h2>
              <p className="address-note">
                The map for {COMPANY} will go here once the address is updated.
              </p>
            </article>
          </div>
          <EnquiryForm heading="Send a Message" submitLabel="Contact Now" />
        </div>
      </section>
    </>
  );
}
