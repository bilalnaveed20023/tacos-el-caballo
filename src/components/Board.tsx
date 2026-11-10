import { board, drinks, meats } from "@/lib/content";
import Reveal from "./Reveal";
import OrderBuilder from "./OrderBuilder";

const money = (n: number) => (Number.isInteger(n) ? `$${n}` : `$${n.toFixed(2)}`);

export default function Board() {
  return (
    <section className="menu" id="menu">
      <div className="wrap">
        <Reveal>
          <p className="script kicker">La lista</p>
          <h2 className="display h2">The board, same as the sign on the truck.</h2>
          <p className="lede">Pick a thing, pick a meat. Everything is made to order.</p>
        </Reveal>

        <div className="menu-grid">
          <Reveal className="paper board" delay={60}>
            <div className="board-head">
              <span>Precio · Price</span>
            </div>
            <ul className="board-list">
              {board.map((b) => (
                <li key={b.id}>
                  <span className="b-name">
                    <b>{b.es}</b>
                    <i>{b.en}</i>
                  </span>
                  <span className="b-dots" aria-hidden="true" />
                  <span className="b-price display">{money(b.price)}</span>
                </li>
              ))}
            </ul>
            <p className="board-note">Tripa is 50¢ extra. Add-ons cost extra.</p>
            <div className="drinks">
              <p className="label">Bebidas</p>
              <p>{drinks.join(" · ")}</p>
            </div>
          </Reveal>

          <Reveal className="paper meats" delay={120}>
            <p className="label">Tipo de carnes · Choice of meat</p>
            <ul className="meat-grid">
              {meats.map((m) => (
                <li key={m.es} className={m.extra ? "has-extra" : ""}>
                  <b>{m.es}</b>
                  <i>{m.en}</i>
                  {m.extra ? <em>+50¢</em> : null}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <OrderBuilder />
      </div>
    </section>
  );
}
