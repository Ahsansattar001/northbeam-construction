/** The Northbeam mark: a gable with a beam. */
export default function Logo({ size = 30 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      <rect width="32" height="32" rx="6" fill="rgba(255,255,255,0.12)" />
      <path d="M7 24V12l9-6 9 6v12h-5v-8h-8v8z" fill="currentColor" />
      <path d="M12 24h8v-4h-8z" fill="var(--color-accent)" />
    </svg>
  );
}
