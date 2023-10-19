import Card from "./Card";


export default function Gallery({ array }) {
  return (
    <ul>
      {array.map((item, index) => (
        <Card key={index} item={item}/>
      ))}
    </ul>
  );
}
