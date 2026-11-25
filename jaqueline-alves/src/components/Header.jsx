import { config } from "../config.js";
import Marca from "./Marca";
import ButtonWhatsApp from "./ButtonWhatsApp";

const nav = [
  ["Início", "#inicio"],
  ["Peças", "#pecas"],
  ["Sobre", "#sobre"],
  ["Depoimentos", "#depoimentos"],
  ["Contato", "#contato"],
];

export default function Header() {
  return (
    <nav className="topo">
      <Marca nome={config.nome} />
      <ul className="menu">
        {nav.map(([name, href]) => (
          <li key={href}><a href={href}>{name}</a></li>
        ))}
      </ul>
      <ButtonWhatsApp pequeno>Chamar no WhatsApp</ButtonWhatsApp>
    </nav>
  );
}
