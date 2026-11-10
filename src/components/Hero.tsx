import { asset, links, site, meats, byDay } from "@/lib/content";
import OpenStatus from "./OpenStatus";
import Logo from "./Logo";
import { Horseshoe } from "./art";

export default function Hero() {
  return (
    <>
      <section className="hero" id="top">
        <div className="stitch" aria-hidden="true" />
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <p className="script hero-kicker">Springwells St. · Southwest Detroit</p>
            <h1 className="display hero-h1">
              Tacos on the corner.
              <span className="brass"> Every day.</span>
            </h1>
            <p className="hero-sub">
              Corn or flour, grilled onions on top, green salsa by the cup. Walk up, pull up or call it in. Open 10 to 9, rain or snow.
            </p>
            <div className="hero-cta">
              <a className="btn btn-brass" href={links.tel}>Call {site.phone}</a>
              <a className="btn btn-line" href="#menu">See the board</a>
            </div>
            <OpenStatus byDay={byDay} className="hero-status" />
          </div>
          <div className="hero-art">
            <div className="arch">
              <img src={asset("/img/tacos-green.webp")} alt="Tacos with grilled onions and green salsa on a paper plate" width={1200} height={1600} fetchPriority="high" />
            </div>
            <div className="sticker" aria-hidden="true">
              <Horseshoe className="sticker-shoe" nails={false} />
              <span className="sticker-top">Tacos</span>
              <span className="sticker-price display">$3</span>
              <span className="sticker-bot">corn tortilla</span>
            </div>
            <Logo className="hero-badge" id="hb" />
          </div>
        </div>
        <div className="rope" aria-hidden="true" />
      </section>
      <div className="marquee" aria-label="Meats we have">
        <div className="marquee-track" aria-hidden="true">
          {[0, 1].map((k) => (
            <ul key={k}>
              {meats.map((m) => (
                <li key={m.es}>
                  {m.es}
                  <Horseshoe className="mq-shoe" nails={false} />
                </li>
              ))}
            </ul>
          ))}
        </div>
        <p className="sr">{meats.map((m) => `${m.es} (${m.en})`).join(", ")}</p>
      </div>
    </>
  );
}
