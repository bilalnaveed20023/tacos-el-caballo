import { links } from "@/lib/content";
import { Horseshoe } from "./art";

export default function Header() {
  return (
    <header className="top">
      <a href="#top" className="brand" aria-label="Tacos El Caballo, home">
        <Horseshoe className="brand-shoe" />
        <span className="brand-name">El <b>Caballo</b></span>
      </a>
      <nav className="top-nav" aria-label="Sections">
        <a href="#menu">Menu</a>
        <a href="#story">The truck</a>
        <a href="#visit">Find us</a>
        <a href="#reviews">Reviews</a>
      </nav>
      <a className="btn btn-brass btn-sm" href={links.tel}>Call</a>
    </header>
  );
}
