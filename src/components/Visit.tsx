import { byDay, links, open, site } from "@/lib/content";
import OpenStatus from "./OpenStatus";
import Reveal from "./Reveal";

export default function Visit() {
  return (
    <section className="visit" id="visit">
      <div className="wrap visit-grid">
        <Reveal className="visit-card paper">
          <p className="script kicker">Venga por acá</p>
          <h2 className="display h2">Find the truck</h2>
          <div className="signs" aria-hidden="true">
            <span className="street">Springwells</span>
            <span className="street street-2">Pershing</span>
          </div>
          <address>
            {site.street}
            <br />
            {site.city} {site.zip}
          </address>
          <p className="hours">
            <b>{open.label}</b> {open.time}
          </p>
          <OpenStatus byDay={byDay} className="visit-status" />
          <div className="visit-cta">
            <a className="btn btn-green" href={links.tel}>Call {site.phone}</a>
            <a className="btn btn-line-dark" href={links.directions} target="_blank" rel="noopener noreferrer">Directions</a>
          </div>
        </Reveal>
        <Reveal className="map" delay={80}>
          <iframe
            title="Map: Tacos El Caballo, 1445 Springwells St, Detroit"
            src={links.embed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </Reveal>
      </div>
    </section>
  );
}
