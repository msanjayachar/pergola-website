import { Link } from "react-router-dom";
import Logo from "./Logo.jsx";
import { ADDRESS, COMPANY, EMAIL, EMAIL_ALT, nav, PHONE_PRIMARY, PHONE_SECONDARY } from "../data.js";

const menuLinks = nav.flatMap((item) => (item.children ? item.children : [item]));

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <Logo size={120} alt={`${COMPANY} logo`} />
        <div>
          <h2 style={{ textTransform: "uppercase", letterSpacing: "0.04em" }}>{COMPANY}</h2>
          <p>
            A fabrication workshop for pergolas, lattice, CNC screens, gates, ceilings, and outdoor
            structures. Design, steelwork, and installation stay with one team.
          </p>
        </div>
      </div>
      <div className="container footer-grid">
        <div>
          <h2>Work</h2>
          <ul>
            {menuLinks.map((item) => (
              <li key={`${item.label}-${item.to}`}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Contact</h2>
          <ul>
            <li>{ADDRESS}</li>
            <li>
              <a href="tel:+918971738777">{PHONE_PRIMARY}</a>
            </li>
            <li>
              <a href="tel:+917676408187">{PHONE_SECONDARY}</a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </li>
            <li>
              <a href={`mailto:${EMAIL_ALT}`}>{EMAIL_ALT}</a>
            </li>
          </ul>
        </div>
      </div>
      <p className="container copyright">© 2026 {COMPANY}. All rights reserved.</p>
    </footer>
  );
}
