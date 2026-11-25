import { config } from "../config.js";
import ButtonWhatsApp from "./ButtonWhatsApp";

export default function ChamadaContato() {
  return (
    <section id="contato" className="chamada">
      <div>
        <p className="rotulo rotulo--escuro">Garanta já a sua</p>
        <h2>Pronta para brilhar?</h2>
        <p>Chame a Jaqueline, conte o que procura e receba fotos e valores na hora.</p>
        <ButtonWhatsApp escuro>Chamar no WhatsApp</ButtonWhatsApp>
      </div>
      <ul className="beneficios">
        <li>Atendimento pessoal</li>
        <li>Entrega em {config.cidade}</li>
        <li>Embalagem para presente</li>
      </ul>
    </section>
  );
}
