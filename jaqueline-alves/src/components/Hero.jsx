import { config } from "../config.js";
import Foto from "./Foto";
import Gem from "./icons/Gem";
import ButtonWhatsApp from "./ButtonWhatsApp";

export default function Hero() {
  return (
    <header id="inicio" className="hero">
      <div className="hero__texto">
        <p className="rotulo">Semijoias e lingerie em {config.cidade}</p>
        <h1>Brilho, delicadeza e <em>estilo</em> para o seu dia a dia.</h1>
        <p>Peças escolhidas com carinho para quem valoriza qualidade e um atendimento de verdade, direto pelo WhatsApp.</p>
        <ButtonWhatsApp>Ver peças no WhatsApp</ButtonWhatsApp>
        <ul className="selos">
          <li><Gem className="selos__i" /> Folheadas de qualidade</li>
          <li><Gem className="selos__i" /> Atendimento pessoal</li>
          <li><Gem className="selos__i" /> Entrega em {config.cidade}</li>
        </ul>
      </div>
      <div className="hero__visual">
        {config.fotoHero ? (
          <Foto src={config.fotoHero} label="Peças Jaqueline Alves" className="hero__foto" />
        ) : (
          <img className="hero__logo" src="/logo.jpeg" alt="Logo Jaqueline Alves" />
        )}
      </div>
    </header>
  );
}
