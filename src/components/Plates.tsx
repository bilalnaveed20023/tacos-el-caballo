import { asset, dishes } from "@/lib/content";
import Reveal from "./Reveal";

export default function Plates() {
  return (
    <section className="plates" id="plates">
      <div className="wrap">
        <Reveal>
          <p className="script kicker">Lo que sale de la ventana</p>
          <h2 className="display h2">What comes out of the window</h2>
        </Reveal>
      </div>
      <ul className="rail">
        {dishes.map((d, i) => (
          <li key={d.name} className="plate">
            <Reveal delay={i * 50}>
              <figure>
                <div className="plate-img">
                  <img src={asset(d.src)} alt={d.alt} width={1200} height={1600} loading="lazy" />
                  {d.price ? <span className="tag">{d.price}</span> : null}
                </div>
                <figcaption>
                  <h3 className="display">{d.name}</h3>
                  <p className="script es">{d.es}</p>
                  <p>{d.line}</p>
                </figcaption>
              </figure>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
