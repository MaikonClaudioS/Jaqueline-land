import Gem from "./icons/Gem";

export default function Marca({ nome }) {
  return (
    <a className="marca" href="#inicio">
      <Gem className="marca__gem" />
      <span>
        <b>{nome}</b>
        <small>Lingerie e semijoias</small>
      </span>
    </a>
  );
}
