import { Link } from "react-router-dom";
import Logo from "./Logo.jsx";
import { IconInstagram, IconMail, IconPhone, IconPin } from "./Icons.jsx";
import { ADDRESS, EMAIL, nav, PHONE_PRIMARY, PHONE_SECONDARY } from "../data.js";

const menuLinks = nav.flatMap((item) =>
  item.children ? [{ label: item.label, to: item.children[0].to }, ...item.children] : [item],
);

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-brand">
        <Logo size={168} wordmark />
        <p className="tagline">.Design .Fabricate .Inspire</p>
        <p>
          Pergola Masters.in is a leading name in premium pergola manufacturing and outdoor
          fabrication solutions, delivering excellence through precision, quality, and innovation.
          With years of expertise and a dedicated team of skilled professionals, we specialize in
          designing and fabricating customized pergolas, lattice structures, CNC works, and landscape
          enhancements that elevate outdoor living spaces.
        </p>
        <a
          className="ig"
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          <IconInstagram />
        </a>
      </div>

      <div className="container footer-grid">
        <div>
          <h2>Our Menu</h2>
          <span className="gold-rule" />
          <ul>
            {menuLinks.map((item) => (
              <li key={`${item.label}-${item.to}`}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Get In Touch</h2>
          <span className="gold-rule" />
          <ul className="contact-list">
            <li>
              <IconPin />
              <span>{ADDRESS}</span>
            </li>
            <li>
              <IconPhone />
              <span>
                <a href="tel:+918971738777">{PHONE_PRIMARY}</a>,{" "}
                <a href="tel:+917676408187">{PHONE_SECONDARY}</a>
              </span>
            </li>
            <li>
              <IconMail />
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </li>
          </ul>
        </div>
      </div>

      <p className="copyright">© 2026 Pergola Masters.in. All rights reserved.</p>
    </footer>
  );
}
