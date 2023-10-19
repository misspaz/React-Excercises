export default function Medabot({ info }) {
    return (
      <div>
        <h2>{info.nombre}</h2>
        <p>{info.tipo}</p>
        <p>{info.propietario}</p>
      </div>
    );
  }
  