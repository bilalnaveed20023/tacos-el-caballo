import { site } from "@/lib/content";
import Reveal from "./Reveal";
import { Horseshoe } from "./art";

const small = [
  ["Two kinds of onion", "Grilled and fresh, both on the tacos."],
  ["Salsa by the cup", "Green and red. Reviewers buy the green by the cup to take home."],
  ["Horchata and jamaica", "Rice water and hibiscus tea, next to the sodas."],
  ["A place to sit", "Picnic tables with an awning beside the truck, per reviews."],
];

export default function Story() {
  return (
    <section className="story" id="story">
      <div className="wrap story-grid">
        <Reveal className="story-num">
          <Horseshoe className="story-shoe" nails={false} />
          <span className="display num">18+</span>
          <span className="num-label">years on one corner</span>
        </Reveal>
        <Reveal className="story-copy" delay={80}>
          <p className="script kicker kicker-brass">La esquina</p>
          <h2 className="display h2">Springwells and Pershing. Same truck, same corner.</h2>
          <p>
            Owner {site.owner} has run this truck near Springwells and Pershing for more than eighteen years, long enough that a local TV
            feature called it a community staple. It’s open from 10 to 9 every day of the week, and people say it stays open through rain and snow.
          </p>
          <p>
            Reviewers say they drive in from the east side, from more than an hour away, from Ohio. The word that keeps coming up is “best.”
          </p>
          <ul className="facts">
            {small.map(([h, t]) => (
              <li key={h}>
                <b>{h}</b>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
