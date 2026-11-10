"use client";

import { useMemo, useState } from "react";
import { board, meats, links, site } from "@/lib/content";
import Reveal from "./Reveal";

type Line = { id: number; item: string; meat: string; qty: number };
const money = (n: number) => `$${n.toFixed(2)}`;

export default function OrderBuilder() {
  const [lines, setLines] = useState<Line[]>([{ id: 1, item: "taco-corn", meat: "Asada", qty: 3 }]);
  const [copied, setCopied] = useState(false);

  const rows = useMemo(
    () =>
      lines.map((l) => {
        const it = board.find((b) => b.id === l.item)!;
        const m = meats.find((x) => x.es === l.meat)!;
        const each = it.price + (m.extra ?? 0);
        return { ...l, it, each, total: each * l.qty };
      }),
    [lines],
  );
  const total = rows.reduce((s, r) => s + r.total, 0);

  const set = (id: number, patch: Partial<Line>) => setLines((ls) => ls.map((l) => (l.id === id ? { ...l, ...patch } : l)));
  const add = () => setLines((ls) => [...ls, { id: Math.max(0, ...ls.map((l) => l.id)) + 1, item: "taco-corn", meat: "Pastor", qty: 1 }]);
  const remove = (id: number) => setLines((ls) => (ls.length > 1 ? ls.filter((l) => l.id !== id) : ls));

  const text = rows
    .map((r) => `${r.qty} ${r.it.es.toLowerCase()}${r.it.id.startsWith("taco") || r.it.id.startsWith("quesa") ? ` (${r.it.en.toLowerCase()})` : ""}, ${r.meat.toLowerCase()}`)
    .join("; ");

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(`${text}. About ${money(total)}.`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      /* clipboard blocked; the order is on screen anyway */
    }
  };

  return (
    <Reveal delay={80}>
      <div className="builder" id="order">
        <div className="builder-head">
          <p className="script kicker kicker-brass">Armá tu orden</p>
          <h3 className="display">Work out your order</h3>
          <p>Build it here, see the total, then call it in and read it off.</p>
        </div>

        <ul className="lines">
          {rows.map((r) => (
            <li className="line" key={r.id}>
              <div className="qty" role="group" aria-label="Quantity">
                <button type="button" onClick={() => set(r.id, { qty: Math.max(1, r.qty - 1) })} aria-label="One less">−</button>
                <output aria-live="polite">{r.qty}</output>
                <button type="button" onClick={() => set(r.id, { qty: Math.min(30, r.qty + 1) })} aria-label="One more">+</button>
              </div>
              <label className="sel">
                <span className="sr">Item</span>
                <select value={r.item} onChange={(e) => set(r.id, { item: e.target.value })}>
                  {board.map((b) => (
                    <option key={b.id} value={b.id}>
                      {b.es}, {b.en.toLowerCase()} · ${b.price}
                    </option>
                  ))}
                </select>
              </label>
              <label className="sel">
                <span className="sr">Meat</span>
                <select value={r.meat} onChange={(e) => set(r.id, { meat: e.target.value })}>
                  {meats.map((m) => (
                    <option key={m.es} value={m.es}>
                      {m.es} · {m.en.toLowerCase()}
                      {m.extra ? " (+50¢)" : ""}
                    </option>
                  ))}
                </select>
              </label>
              <span className="line-total display">{money(r.total)}</span>
              <button type="button" className="x" onClick={() => remove(r.id)} aria-label="Remove this line" disabled={rows.length === 1}>×</button>
            </li>
          ))}
        </ul>

        <div className="builder-foot">
          <button type="button" className="btn btn-line btn-sm" onClick={add}>+ Add another</button>
          <div className="sum">
            <span>About</span>
            <b className="display">{money(total)}</b>
            <small>before drinks</small>
          </div>
        </div>

        <p className="read-out">
          <span>Tell them:</span> “{text}.”
        </p>
        <div className="builder-cta">
          <a className="btn btn-brass" href={links.tel}>Call {site.phone}</a>
          <button type="button" className="btn btn-line" onClick={copy}>{copied ? "Copied" : "Copy my order"}</button>
        </div>
      </div>
    </Reveal>
  );
}
