type IconProps = {
  className?: string;
};

/** Ícones de traço fino usados nos cards de pilares/serviços. */

export function IconCompass({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M15.5 8.5 13 13l-4.5 2.5L11 11l4.5-2.5Z" strokeLinejoin="round" />
    </svg>
  );
}

export function IconChart({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} className={className}>
      <path d="M4 20V10M12 20V4M20 20v-7" strokeLinecap="round" />
      <path d="M3 20h18" strokeLinecap="round" />
    </svg>
  );
}

export function IconSpark({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} className={className}>
      <path
        d="M12 3c.6 3.4 2.1 5 5.5 5.6-3.4.6-5 2.1-5.5 5.5-.6-3.4-2.1-5-5.5-5.5C9.9 8 11.4 6.4 12 3Z"
        strokeLinejoin="round"
      />
      <path d="M18 16c.3 1.7 1 2.4 2.6 2.7-1.6.3-2.3 1-2.6 2.6-.3-1.6-1-2.3-2.6-2.6 1.6-.3 2.3-1 2.6-2.7Z" strokeLinejoin="round" />
    </svg>
  );
}

export function IconInfinity({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} className={className}>
      <path d="M7 9a3.5 3.5 0 1 0 0 7c2.5 0 3.5-2 5-4.5S15.5 9 18 9a3.5 3.5 0 1 1 0 7c-2.5 0-3.5-2-5-4.5S9.5 9 7 9Z" />
    </svg>
  );
}

export function IconTarget({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconLayers({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} className={className}>
      <path d="M12 3.5 21 8l-9 4.5L3 8l9-4.5Z" strokeLinejoin="round" />
      <path d="m3 12 9 4.5 9-4.5" strokeLinejoin="round" />
      <path d="m3 16 9 4.5 9-4.5" strokeLinejoin="round" />
    </svg>
  );
}

export function IconFeather({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} className={className}>
      <path d="M20 4c-6 0-13 3-13 11 0 2.5 1 4 1 4l12-12" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 20 15 9" strokeLinecap="round" />
      <path d="M9 15h4M7 17h4" strokeLinecap="round" />
    </svg>
  );
}

export function IconMegaphone({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} className={className}>
      <path d="M3 10v4a1 1 0 0 0 1 1h2l9 4V5L6 9H4a1 1 0 0 0-1 1Z" strokeLinejoin="round" />
      <path d="M18 9.5c1.2.8 1.2 4.2 0 5" strokeLinecap="round" />
      <path d="M8 15v3.5a1.5 1.5 0 0 0 3 0V16" strokeLinecap="round" />
    </svg>
  );
}

export function IconCheck({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} className={className}>
      <path d="m4.5 12.5 4.5 4.5 10-11" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
