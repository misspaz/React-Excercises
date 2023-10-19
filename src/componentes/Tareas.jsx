import { useState } from "react";
import TareasForm from "./TareasForm";
import TareasList from "./TareasList";

export default function Tareas() {
    const primerasTareas = [
        {
            tarea: "Hacer la compra",
            isDone: false
        },
        {
            tarea: "Terminar el informe",
            isDone: true
        },
        {
            tarea: "Hacer ejercicio",
            isDone: false
        },
        {
            tarea: "Leer un libro",
            isDone: true
        }
    ];

  const [tareas, setTareas] = useState(primerasTareas);

  const addNewTarea = (nuevaTarea) => {
    // console.log(nuevaTarea);
    const copyTareas = [...tareas];
    copyTareas.push({
            tarea: nuevaTarea,
            isDone: false
        }
    );
    setTareas(copyTareas)
  };

  return (
    <>
      <TareasForm onSubmit={addNewTarea} />
      <TareasList array={tareas} />
    </>
  );
}
