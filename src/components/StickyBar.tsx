import { links, site } from "@/lib/content";

export default function StickyBar() {
  return (
    <div className="sticky-bar">
      <a className="btn btn-brass" href={links.tel}>Call {site.phone}</a>
      <a className="btn btn-line" href={links.directions} target="_blank" rel="noopener noreferrer">Directions</a>
    </div>
  );
}
