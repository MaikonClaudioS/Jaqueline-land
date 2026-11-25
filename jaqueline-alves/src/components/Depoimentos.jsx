import { depoimentos } from "../config.js";

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="sec sec--preto">
      <p className="rotulo">Quem já comprou, aprova</p>
      <h2>Depoimentos de clientes</h2>
      <div className="grade grade--3">
        {depoimentos.map((item) => (
          <figure className="depo" key={item.nome}>
            <div className="estrelas" aria-label="5 estrelas">★★★★★</div>
            <blockquote>“{item.texto}”</blockquote>
            <figcaption>
              <b>{item.nome}</b>
              <span>{item.cidade}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
