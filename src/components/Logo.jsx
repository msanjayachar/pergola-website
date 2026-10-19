export default function Logo({ size = 52, wordmark = false }) {
  return (
    <span className={`logo ${wordmark ? "logo-full" : ""}`} style={{ "--logo": `${size}px` }}>
      <svg viewBox="0 0 120 120" aria-hidden="true">
        <circle cx="60" cy="60" r="56" fill="#fff" stroke="#c9a35a" strokeWidth="4" />
        <circle cx="60" cy="60" r="50" fill="none" stroke="#1a1a1a" strokeWidth="1" />
        <path
          d="M28 52 L60 34 L92 52"
          fill="none"
          stroke="#1a1a1a"
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
        <path d="M32 52 H88" stroke="#c9a35a" strokeWidth="2.2" />
        <path d="M36 52 V78 M84 52 V78" stroke="#1a1a1a" strokeWidth="2.4" />
        <path d="M36 62 H84 M36 70 H84" stroke="#1a1a1a" strokeWidth="1.4" />
        <path d="M46 78 V62 M60 78 V62 M74 78 V62" stroke="#c9a35a" strokeWidth="1.3" />
        <path d="M48 78c2-6 6-9 12-9s10 3 12 9" fill="none" stroke="#1a1a1a" strokeWidth="1.4" />
        <circle cx="60" cy="68" r="2.2" fill="#c9a35a" />
        {wordmark && (
          <text
            x="60"
            y="96"
            textAnchor="middle"
            fontFamily="Poppins, sans-serif"
            fontSize="8"
            fontWeight="700"
            fill="#111"
          >
            PERGOLA
          </text>
        )}
        {wordmark && (
          <text
            x="60"
            y="106"
            textAnchor="middle"
            fontFamily="Poppins, sans-serif"
            fontSize="7"
            fontWeight="700"
            fill="#111"
          >
            MASTERS.IN
          </text>
        )}
      </svg>
    </span>
  );
}
