/** Simple line icon drawn from an SVG path string in the data files. */
export default function Icon({ path, size = 40, className }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      <path d={path} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
