import { useState } from "react";

export default function TodoForm({onSubmit}) {
  const [text, setText] = useState();

  return (
    <div>
      <input onChange={(e) => setText(e.target.value)} type="text" />
      <button onClick={() => onSubmit(text)}>Guardar</button>
    </div>
  );
}
