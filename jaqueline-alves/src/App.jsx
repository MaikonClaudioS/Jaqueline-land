import Header from "./components/Header";
import Hero from "./components/Hero";
import Diferenciais from "./components/Diferenciais";
import Pecas from "./components/Pecas";
import FaixaDestaque from "./components/FaixaDestaque";
import Detalhes from "./components/Detalhes";
import Depoimentos from "./components/Depoimentos";
import Galeria from "./components/Galeria";
import ChamadaContato from "./components/ChamadaContato";
import Footer from "./components/Footer";
import BotaoFlutuante from "./components/BotaoFlutuante";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Diferenciais />
        <Pecas />
        <FaixaDestaque />
        <Detalhes />
        <Depoimentos />
        <Galeria />
        <ChamadaContato />
      </main>
      <Footer />
      <BotaoFlutuante />
    </>
  );
}
