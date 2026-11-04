export default function Logo({ size = 52, alt = "" }) {
  return (
    <span className="logo" style={{ "--logo": `${size}px` }}>
      <img src="/brand/logo.jpg" alt={alt} width={size} height={size} />
    </span>
  );
}
