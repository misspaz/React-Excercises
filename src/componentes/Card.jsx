export default function Card({item}) {
  return (
    <div>
      <li>
        {item.nombre}
        <img src={item.imagen} alt="Animes fotos" />
      </li>
    </div>
  );
}
