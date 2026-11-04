import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "./Logo.jsx";
import { nav } from "../data.js";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    function onKey(event) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="site-header">
      <div className="topbar">
        <div className="container topbar-inner">
          <span>Bangalore, 560066</span>
          <a href="tel:+918971738777">+91 8971738777</a>
          <a href="mailto:info@pergolamasters.in">info@pergolamasters.in</a>
        </div>
      </div>
      <div className="nav-wrap">
        <div className="container nav-row">
          <Link to="/" className="brand" aria-label="Pergola Masters home">
            <Logo size={54} />
            <span className="brand-name">
              PERGOLA
              <br />
              MASTERS.IN
            </span>
          </Link>

          <nav className="desktop-nav" aria-label="Primary">
            {nav.map((item) =>
              item.children ? (
                <div className="desktop-drop" key={item.label}>
                  <button type="button" className="desktop-link drop-trigger">
                    {item.label}
                    <span aria-hidden="true">▾</span>
                  </button>
                  <div className="desktop-menu">
                    {item.children.map((child) => (
                      <NavLink key={child.to} to={child.to}>
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  className="desktop-link"
                >
                  {item.label}
                </NavLink>
              ),
            )}
          </nav>

          <div className="nav-actions">
            <Link to="/contact" className="btn-gold">
              Contact Now
            </Link>
            <button
              type="button"
              className={`burger ${open ? "is-open" : ""}`}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        {open && (
          <nav className="mobile-menu" aria-label="Mobile">
            {nav.map((item) =>
              item.children ? (
                <div key={item.label} className="mobile-services">
                  <button
                    type="button"
                    className="mobile-link"
                    aria-expanded={servicesOpen}
                    onClick={() => setServicesOpen((value) => !value)}
                  >
                    {item.label}
                    <span className={`plus ${servicesOpen ? "is-open" : ""}`}>
                      {servicesOpen ? "–" : "+"}
                    </span>
                  </button>
                  {servicesOpen && (
                    <div className="mobile-sub">
                      {item.children.map((child) => (
                        <NavLink key={child.to} to={child.to}>
                          {child.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  className="mobile-link"
                >
                  {item.label}
                </NavLink>
              ),
            )}
          </nav>
        )}
      </div>
    </header>
  );
}
