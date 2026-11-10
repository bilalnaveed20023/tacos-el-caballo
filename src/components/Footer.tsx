import { links, open, site } from "@/lib/content";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="foot">
      <div className="rope" aria-hidden="true" />
      <div className="wrap foot-grid">
        <div className="foot-brand">
          <Logo className="foot-logo" id="fb" />
          <p className="script">Gracias por venir.</p>
        </div>
        <div className="foot-cols">
          <div>
            <p className="label">Find us</p>
            <p>
              {site.street}
              <br />
              {site.city} {site.zip}
            </p>
          </div>
          <div>
            <p className="label">Hours</p>
            <p>
              {open.label}
              <br />
              {open.time}
            </p>
          </div>
          <div>
            <p className="label">Call</p>
            <p>
              <a href={links.tel}>{site.phone}</a>
              <br />
              <a href={links.directions} target="_blank" rel="noopener noreferrer">Directions</a>
            </p>
          </div>
        </div>
        <p className="foot-fine">© {new Date().getFullYear()} Tacos El Caballo · Springwells St, Southwest Detroit</p>
      </div>
    </footer>
  );
}
