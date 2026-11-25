import { whatsappUrl } from "./ButtonWhatsApp";
import Zap from "./icons/Zap";

export default function BotaoFlutuante() {
  return (
    <a
      className="flutuante"
      href={whatsappUrl()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chamar no WhatsApp"
    >
      <Zap />
    </a>
  );
}
