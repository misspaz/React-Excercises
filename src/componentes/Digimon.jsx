import List from "./List";

export default function Digimon({ digimon }) {
  return (
    <div>
      <h2>{digimon.nombre}</h2>
      <p>{digimon.nivel}</p>
      <p>{digimon.tipo}</p>
      <p>{digimon.atributo}</p>
      <p>
        Evoluciones: <List info={digimon.evoluciones} />
      </p>
      <p>
        Habilidades: <List info={digimon.habilidades} />
      </p>
    </div>
  );
}
