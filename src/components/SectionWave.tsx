function SectionWave() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className="section-wave pointer-events-none absolute inset-x-0 bottom-0 z-1 h-16 w-full"
      viewBox="0 0 1440 64"
      preserveAspectRatio="none"
    >
      <path
        d="M0 28C180 8 360 48 540 28S900 8 1080 28s180 20 360 0V64H0Z"
        fill="var(--color-cyan)"
        opacity="0.18"
      />
      <path
        d="M0 38C180 54 360 18 540 38S900 54 1080 38s180-16 360 0V64H0Z"
        fill="var(--color-navy)"
        opacity="0.42"
      />
      <path
        d="M0 45C180 31 360 58 540 45S900 31 1080 45s180 14 360 0V64H0Z"
        fill="var(--color-cyan)"
        opacity="0.12"
      />
    </svg>
  );
}

export default SectionWave;
