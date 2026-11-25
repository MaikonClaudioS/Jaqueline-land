import { config } from "../config.js";
import Marca from "./Marca";

const nav = [
  ["Início", "#inicio"],
  ["Peças", "#pecas"],
  ["Sobre", "#sobre"],
  ["Depoimentos", "#depoimentos"],
  ["Contato", "#contato"],
];

export default function Footer() {
  return (
    <footer className="rodape">
      <Marca nome={config.nome} />
      <ul className="menu">
        {nav.map(([name, href]) => (
          <li key={href}><a href={href}>{name}</a></li>
        ))}
      </ul>
      <p>© {new Date().getFullYear()} {config.nome}. Todos os direitos reservados.</p>
    </footer>
  );
}
