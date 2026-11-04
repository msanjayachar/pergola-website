import { useEffect, useRef, useState } from "react";
import PageHero from "../components/PageHero.jsx";
import { gallery } from "../data.js";

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
      <PageHero title="Gallery" crumb="Gallery" image="/images/work/red-tile-roof.jpg" />
      <section className="gallery-page">
        <div className="container">
          <div className="section-kicker light">PERGOLA MASTERS.IN</div>
          <h2>Gallery</h2>
          <p>
            Pergolas, glass roofs, lattice, CNC ceilings, railings, and terrace structures from
            work we have designed and fabricated.
          </p>
          <div className="gallery-grid">
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
