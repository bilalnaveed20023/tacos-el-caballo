import { Badge } from "./art";

export default function Logo({ className = "", id }: { className?: string; id?: string }) {
  return <Badge className={className} id={id} />;
}
