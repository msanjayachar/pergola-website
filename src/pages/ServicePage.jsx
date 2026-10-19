import { Link, Navigate, useParams } from "react-router-dom";
import CtaBand from "../components/CtaBand.jsx";
import PageHero from "../components/PageHero.jsx";
import { serviceBySlug } from "../data.js";

export default function ServicePage() {
  const { slug } = useParams();
  const service = serviceBySlug(slug);

  if (!service) return <Navigate to="/" replace />;

  return (
    <>
      <PageHero title={service.title} crumb={service.nav} image={service.image} />
      <section className="service-page">
        <div className="container service-layout">
          <article>
            <div className="section-kicker">{service.nav}</div>
            <h2>{service.title}</h2>
            <p className="lede">{service.lead}</p>
            {service.extra && <p>{service.extra}</p>}
            {service.note && <p className="note">{service.note}</p>}
            <div className="block-grid">
              {service.blocks.map((block) => (
                <article key={block.title} className="info-block">
                  <h3>{block.title}</h3>
                  {block.text && <p>{block.text}</p>}
                  {block.points && (
                    <ul>
                      {block.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </div>
            {service.materials && (
              <>
                <h3 className="materials-title">Roofing Material Selection</h3>
                <ul className="material-pills">
                  {service.materials.map((material) => (
                    <li key={material}>{material}</li>
                  ))}
                </ul>
              </>
            )}
            <Link to="/get-a-quote" className="btn-gold">
              Get a Quote
            </Link>
          </article>
          <aside className="service-aside">
            <img src={service.image} alt="" />
            <div>
              <h3>Start This Project</h3>
              <p>{service.summary}</p>
              <Link to="/contact">Talk to Us</Link>
            </div>
          </aside>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
