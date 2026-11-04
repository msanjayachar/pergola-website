import { useEffect, useRef, useState } from "react";
import PageHero from "../components/PageHero.jsx";
import { COMPANY, featured, gallery } from "../data.js";

export default function Gallery() {
  const [active, setActive] = useState(null);
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (active && !dialog.open) dialog.showModal();
    if (!active && dialog.open) dialog.close();
  }, [active]);

  return (
    <>
      <PageHero title="Gallery" crumb="Gallery" image={featured.gallery} />
      <section className="band">
        <div className="container">
          <p className="kicker">{COMPANY}</p>
          <h2>The work.</h2>
          <p>
            Pergolas, roofs, lattice, CNC screens, railings, and terrace structures from the
            workshop and the sites.
          </p>
          <div className="gallery-mosaic">
            {gallery.map((item) => (
              <figure key={item.src}>
                <button type="button" onClick={() => setActive(item)}>
                  <img src={item.src} alt={item.alt} loading="lazy" />
                </button>
              </figure>
            ))}
          </div>
        </div>
      </section>
      <dialog ref={dialogRef} className="lightbox" onClose={() => setActive(null)} onClick={() => setActive(null)}>
        {active && <img src={active.src} alt={active.alt} />}
      </dialog>
    </>
  );
}
