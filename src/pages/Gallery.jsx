import PageHero from "../components/PageHero.jsx";
import { gallery } from "../data.js";

export default function Gallery() {
  return (
    <>
      <PageHero title="Gallery" crumb="Gallery" image="/images/architecture.jpg" />
      <section className="gallery-page">
        <div className="container">
          <div className="section-kicker light">PERGOLA MASTERS.IN</div>
          <h2>Gallery</h2>
          <p>
            Pergola Masters.in is a leading name in premium pergola manufacturing and outdoor
            fabrication solutions, delivering excellence through precision, quality, and innovation.
            With years of expertise and a dedicated team of skilled professionals, we specialize in
            designing and fabricating customized pergolas, lattice structures, CNC works, and
            landscape enhancements that elevate outdoor living spaces.
          </p>
          <div className="gallery-grid">
            {gallery.map((item) => (
              <figure key={item.src}>
                <img src={item.src} alt={item.alt} />
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
