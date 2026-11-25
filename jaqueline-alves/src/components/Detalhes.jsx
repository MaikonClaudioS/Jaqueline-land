import { detalhes } from "../config.js";
import Foto from "./Foto";

export default function Detalhes() {
  return (
    <section className="sec sec--claro">
      <p className="rotulo rotulo--ouro">Detalhes que fazem a diferença</p>
      <h2>Qualidade em cada detalhe</h2>
      <div className="colunas">
        {detalhes.map((item) => (
          <div className="coluna" key={item.t}>
            <Foto src={item.foto} label={item.t} className="redonda" />
            <h3>{item.t}</h3>
            <p>{item.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
