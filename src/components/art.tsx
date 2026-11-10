// Inline SVG: horseshoe, star, badge. No images, so everything stays sharp.

export function Horseshoe({ className = "", nails = true, ...rest }: { className?: string; nails?: boolean } & React.SVGProps<SVGSVGElement>) {
  // Open end points up, the "lucky" way.
  const holes = [
    [24, 62], [20, 44], [27, 27], [42, 16], [58, 16], [73, 27], [80, 44], [76, 62],
  ];
  return (
    <svg className={className} viewBox="0 0 100 100" aria-hidden="true" {...rest}>
      <path
        d="M22 90 C 12 88, 9 80, 12 66 C 9 52, 8 38, 17 26 C 26 12, 40 8, 50 8 C 60 8, 74 12, 83 26 C 92 38, 91 52, 88 66 C 91 80, 88 88, 78 90 L 66 90 C 63 90, 64 84, 66 76 C 68 66, 68 56, 66 48 C 64 36, 58 30, 50 30 C 42 30, 36 36, 34 48 C 32 56, 32 66, 34 76 C 36 84, 37 90, 34 90 Z"
        fill="currentColor"
      />
      {nails && holes.map(([x, y], i) => <ellipse key={i} cx={x} cy={y} rx="2.6" ry="3.4" fill="var(--hole, #173a2c)" transform={`rotate(${(i - 3.5) * 16} ${x} ${y})`} />)}
    </svg>
  );
}

export function Star({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 1.5l2.9 6.6 7.1.7-5.4 4.7 1.6 7-6.2-3.7-6.2 3.7 1.6-7L2 8.8l7.1-.7z" fill="currentColor" />
    </svg>
  );
}

export function Badge({ className = "", id = "badge" }: { className?: string; id?: string }) {
  return (
    <svg className={className} viewBox="0 0 240 240" role="img" aria-label="Tacos El Caballo">
      <defs>
        <path id={`${id}-top`} d="M 36 124 A 84 84 0 0 1 204 124" />
        <path id={`${id}-bot`} d="M 30 132 A 90 90 0 0 0 210 132" />
      </defs>
      <circle cx="120" cy="120" r="116" fill="var(--b-ring, #1d1510)" />
      <circle cx="120" cy="120" r="108" fill="none" stroke="var(--b-line, #f3e7cf)" strokeWidth="1.5" strokeDasharray="3 5" />
      <circle cx="120" cy="120" r="66" fill="var(--b-core, #f3e7cf)" />
      <g style={{ color: "var(--b-shoe, #1d1510)", ["--hole" as string]: "var(--b-core, #f3e7cf)" }}>
        <Horseshoe nails x={84} y={80} width={72} height={72} />
      </g>
      <text fontFamily="var(--font-display)" fontSize="30" fill="var(--b-text, #f3e7cf)" letterSpacing="4" textAnchor="middle">
        <textPath href={`#${id}-top`} startOffset="50%">TACOS</textPath>
      </text>
      <text fontFamily="var(--font-display)" fontSize="26" fill="var(--b-text, #f3e7cf)" letterSpacing="3" textAnchor="middle">
        <textPath href={`#${id}-bot`} startOffset="50%">EL CABALLO</textPath>
      </text>
      <g fill="var(--b-text, #f3e7cf)">
        <circle cx="32" cy="124" r="3.5" />
        <circle cx="208" cy="124" r="3.5" />
      </g>
    </svg>
  );
}
