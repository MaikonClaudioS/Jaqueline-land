import { pecas } from "../config.js";
import Foto from "./Foto";
import { whatsappUrl } from "./ButtonWhatsApp";

export default function Pecas() {
  return (
    <section id="pecas" className="sec sec--claro">
      <p className="rotulo rotulo--ouro">Nossas peças</p>
      <h2>Encontre a peça ideal para você</h2>
      <div className="grade">
        {pecas.map((item) => (
          <article className="card" key={item.nome}>
            <Foto src={item.foto} label={item.nome} />
            <h3>{item.nome}</h3>
            <p>{item.desc}</p>
            <a
              className="btn btn--escuro btn--pequeno"
              href={whatsappUrl(`Olá, Jaqueline! Quero ver ${item.nome.toLowerCase()}.`)}
              target="_blank"
              rel="noreferrer"
            >
              Pedir fotos
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
