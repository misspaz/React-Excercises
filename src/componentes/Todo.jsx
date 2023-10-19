import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function Todo() {
  const defaultViajes = [
    "Vacaciones en la playa",
    "Explorar ciudades históricas",
    "Senderismo en las montañas",
    "Viaje en tren panorámico",
    "Camping en el bosque",
    "Tour de comida callejera en Asia",
    "Crucero por el Caribe",
    "Aventura en el desierto",
    "Esquí en las montañas",
    "Observación de auroras boreales en Islandia",
  ];

  const [viajes, setViajes] = useState(defaultViajes);

  const addNewTravel = (newValue) => {
    console.log(newValue);
    const copyViajes = [...viajes];
    copyViajes.push(newValue);
    setViajes(copyViajes)
  };

  return (
    <>
      <TodoForm onSubmit={addNewTravel} />
      <TodoList data={viajes} />
    </>
  );
}
