import { config } from "../config.js";
import Zap from "./icons/Zap";

const whatsappUrl = (message) => {
  const text = message || config.mensagem;
  return `https://wa.me/${config.whatsapp}?text=${encodeURIComponent(text)}`;
};

export default function ButtonWhatsApp({ children, message, escuro = false, pequeno = false }) {
  const classes = [
    "btn",
    escuro ? "btn--escuro" : "",
    pequeno ? "btn--pequeno" : "",
  ].filter(Boolean).join(" ");

  return (
    <a className={classes} href={whatsappUrl(message)} target="_blank" rel="noreferrer">
      <Zap />
      {children}
    </a>
  );
}

export { whatsappUrl };
