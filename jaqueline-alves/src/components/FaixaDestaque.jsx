import Foto from "./Foto";
import ButtonWhatsApp from "./ButtonWhatsApp";

export default function FaixaDestaque() {
  return (
    <section className="faixa">
      <div className="faixa__foto"><Foto src="" label="Destaque" /></div>
      <div className="faixa__texto">
        <p className="rotulo">Mais que uma joia,</p>
        <h2>é o cuidado que você merece.</h2>
        <p>Para o dia a dia, para festa ou para presentear: peças que unem beleza e acabamento de verdade.</p>
        <ButtonWhatsApp>Escolher agora</ButtonWhatsApp>
      </div>
    </section>
  );
}
