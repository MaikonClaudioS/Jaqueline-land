import { config, galeria } from "../config.js";
import Foto from "./Foto";

export default function Galeria() {
  return (
    <section className="sec sec--claro">
      <p className="rotulo rotulo--ouro">Nosso Instagram</p>
      <h2>Veja nossas clientes usando</h2>
      <p className="centro">Marque a gente no Instagram e apareça por aqui!</p>
      <div className="galeria">
        {galeria.map((foto, index) => (
          <Foto key={`${foto}-${index}`} src={foto} label={`Foto ${index + 1}`} />
        ))}
      </div>
      <p className="centro">
        <a href={config.instagram} target="_blank" rel="noreferrer">Seguir no Instagram</a>
      </p>
    </section>
  );
}
