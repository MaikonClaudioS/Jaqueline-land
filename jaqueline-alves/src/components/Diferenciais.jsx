import { diferenciais } from "../config.js";
import Gem from "./icons/Gem";

export default function Diferenciais() {
  return (
    <section id="sobre" className="sec sec--creme">
      <h2>Por que escolher a Jaqueline?</h2>
      <div className="colunas">
        {diferenciais.map((item) => (
          <div className="coluna" key={item.t}>
            <Gem className="coluna__i" />
            <h3>{item.t}</h3>
            <p>{item.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
