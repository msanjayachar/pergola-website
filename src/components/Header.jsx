import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "./Logo.jsx";
import { COMPANY, nav, PHONE_PRIMARY, PHONE_TEL } from "../data.js";

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
      <div className="container nav-row">
        <Link to="/" className="brand" aria-label={`${COMPANY} home`}>
          <Logo size={54} alt="" />
          <span className="brand-name">
            MS Pergola
            <small>Fabrications</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary">
          {nav.map((item) =>
            item.children ? (
              <div className="desktop-drop" key={item.label}>
                <button type="button" className="desktop-link drop-trigger">
                  {item.label}
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
                className={({ isActive }) => `desktop-link${isActive ? " active" : ""}`}
              >
                {item.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="nav-actions">
          <a className="nav-phone" href={PHONE_TEL}>
            {PHONE_PRIMARY}
          </a>
          <Link to="/get-a-quote" className="btn">
            Quote
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
        <nav className="mobile-menu container" aria-label="Mobile">
          {nav.map((item) =>
            item.children ? (
              <div key={item.label}>
                <button
                  type="button"
                  className="mobile-link"
                  aria-expanded={servicesOpen}
                  onClick={() => setServicesOpen((value) => !value)}
                >
                  {item.label}
                  <span>{servicesOpen ? "–" : "+"}</span>
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
    </header>
  );
}
