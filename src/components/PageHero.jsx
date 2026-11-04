import { COMPANY } from "../data.js";

export default function PageHero({ title, crumb, image }) {
  return (
    <section className="page-hero">
      <div className="page-hero-copy">
        <p>
          {COMPANY} / {crumb}
        </p>
        <h1>{title}</h1>
      </div>
      <img src={image} alt="" />
    </section>
  );
}
