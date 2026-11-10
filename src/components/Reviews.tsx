import { links, reviews, site, stars } from "@/lib/content";
import Reveal from "./Reveal";
import { Star } from "./art";

export default function Reviews() {
  const max = Math.max(...stars);
  return (
    <section className="reviews" id="reviews">
      <div className="wrap">
        <Reveal className="rev-head">
          <div>
            <p className="script kicker kicker-brass">Lo dicen ellos</p>
            <h2 className="display h2">Don’t take our word for it</h2>
          </div>
          <div className="score">
            <span className="display big">{site.rating}</span>
            <span className="stars" aria-label={`${site.rating} out of 5 stars`}>
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="st" />
              ))}
            </span>
            <span className="count">{site.reviewCount.toLocaleString()} Google reviews</span>
            <ul className="hist" aria-label="Rating breakdown">
              {stars.map((n, i) => (
                <li key={i}>
                  <span>{5 - i}</span>
                  <i style={{ width: `${(n / max) * 100}%` }} />
                  <em>{n}</em>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <ul className="tickets">
          {reviews.map((r, i) => (
            <li key={r.who} className="ticket">
              <Reveal delay={(i % 4) * 60}>
                <blockquote>
                  <p>“{r.text}”</p>
                  <footer>
                    <b>{r.who}</b> <span>· {r.when}</span>
                  </footer>
                </blockquote>
              </Reveal>
            </li>
          ))}
        </ul>
        <p className="rev-foot">
          Public Google reviews, first names only. <a href={links.place} target="_blank" rel="noopener noreferrer">Read them all on Google Maps</a>
        </p>
      </div>
    </section>
  );
}
