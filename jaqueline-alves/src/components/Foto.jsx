import Gem from "./icons/Gem";

export default function Foto({ src, label, className = "" }) {
  return src ? (
    <img
      className={`foto ${className}`}
      src={`/fotos/${src}`}
      alt={label}
      loading="lazy"
    />
  ) : (
    <div
      className={`foto foto--vazia ${className}`}
      role="img"
      aria-label={`${label} (foto a adicionar)`}
    >
      <Gem className="foto__gem" />
    </div>
  );
}
