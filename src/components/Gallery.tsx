import { asset, gallery } from "@/lib/content";
import Reveal from "./Reveal";

export default function Gallery() {
  return (
    <section className="gallery" aria-label="Photos from customers">
      <div className="wrap">
        <ul className="masonry">
          {gallery.map((g, i) => (
            <li key={g.src} className={g.span}>
              <Reveal delay={(i % 3) * 60}>
                <img src={asset(g.src)} alt={g.alt} loading="lazy" width={1200} height={g.span === "wide" ? 800 : 1600} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
