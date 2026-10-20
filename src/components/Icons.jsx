export function IconPhone(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5v3A2 2 0 0 1 18.5 19 15 15 0 0 1 5 5.5a2 2 0 0 1 1.5-2z" strokeLinejoin="round" />
    </svg>
  );
}

export function IconWhatsApp(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.34 4.94L2 22l5.39-1.41a10 10 0 0 0 4.65 1.18h.01c5.46 0 9.89-4.4 9.89-9.83C21.94 6.4 17.5 2 12.04 2zm5.76 14.04c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.12.11-1.81-.11-.41-.14-.95-.31-1.63-.6-2.87-1.24-4.74-4.12-4.88-4.31-.14-.19-1.16-1.54-1.16-2.94s.73-2.08 1-2.37c.24-.27.64-.4 1.02-.4h.73c.23 0 .54-.09.85.65.32.76 1.08 2.63 1.18 2.82.1.19.16.41.03.66-.13.25-.2.41-.39.63-.19.22-.4.49-.57.66-.19.19-.39.4-.17.77.22.38.99 1.63 2.12 2.64 1.46 1.3 2.69 1.7 3.07 1.89.38.19.6.16.82-.1.22-.25.94-1.09 1.19-1.47.25-.38.5-.31.85-.19.35.13 2.2 1.04 2.58 1.23.38.19.63.28.73.43.09.16.09.9-.15 1.58z"
      />
    </svg>
  );
}

export function IconPin(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.4" />
    </svg>
  );
}

export function IconMail(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 7 9-7" />
    </svg>
  );
}

export function IconInstagram(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconPerson(props) {
  return (
    <svg viewBox="0 0 48 48" {...props}>
      <circle cx="24" cy="14" r="7" fill="currentColor" />
      <path d="M10 40c2-8 8-12 14-12s12 4 14 12" fill="currentColor" />
    </svg>
  );
}

export function IconProcess(props) {
  return (
    <svg viewBox="0 0 48 48" fill="currentColor" {...props}>
      <circle cx="16" cy="16" r="6" />
      <circle cx="30" cy="18" r="5" />
      <path d="M8 36c1.2-6 4.5-9 8-9s6.5 3 8 9H8zM24 36c1-5 3.4-8 6.5-8 2.2 0 4 .8 5.5 2.4" />
      <circle cx="36" cy="30" r="6" fill="none" stroke="currentColor" strokeWidth="2.4" />
      <path d="M36 27.2v3.2l2 1.4" fill="none" stroke="#fff" strokeWidth="1.6" />
    </svg>
  );
}

export function IconRupee(props) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="3" {...props}>
      <path d="M14 12h20M14 20h20M16 12c6 0 12 2 12 8s-6 8-12 8H14l16 12" strokeLinecap="round" />
    </svg>
  );
}

export function IconShield(props) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.6" {...props}>
      <path d="M24 6l14 6v12c0 9-6.2 14.6-14 18-7.8-3.4-14-9-14-18V12l14-6z" />
      <path d="M17 24l5 5 10-11" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconChat(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M6 16.5 4 20l4.2-1.4A8 8 0 1 0 6 16.5z" />
    </svg>
  );
}

export function IconChevron(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M8 5l9 7-9 7V5z" />
    </svg>
  );
}

const iconMap = {
  person: IconPerson,
  process: IconProcess,
  rupee: IconRupee,
  shield: IconShield,
};

export function FeatureIcon({ name }) {
  const Icon = iconMap[name] || IconShield;
  return (
    <span className="feature-icon">
      <Icon />
    </span>
  );
}
