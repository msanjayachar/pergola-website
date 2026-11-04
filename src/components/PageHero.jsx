export default function PageHero({ title, crumb, image }) {
  return (
    <section className="page-hero" style={{ backgroundImage: `url(${image})` }}>
      <div className="container page-hero-copy">
        <h1>{title}</h1>
        <p>
          PERGOLA MASTERS.IN <span>-</span> {crumb}
        </p>
      </div>
    </section>
  );
}
