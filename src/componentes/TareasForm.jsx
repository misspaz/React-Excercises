import { useState } from "react";

export default function TareasForm({onSubmit}) {
  const [text, setText] = useState();

  return (
    <div>
      <input onChange={(e) => setText(e.target.value)} type="text" />
      <button onClick={() => onSubmit(text)}>Añadir Tarea</button>
    </div>
  );
}
