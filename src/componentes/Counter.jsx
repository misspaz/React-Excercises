import { useState } from "react";

export default function Counter() {
  const [count, SetCount] = useState(0);
  const suma = () => {
    SetCount(count + 1);
  };

  const resta = () => {
    SetCount(count - 1);
  };

  const divide = () => {
    SetCount(count / 2);
  };

  const multiplica = () => {
    SetCount(count * 2);
  };
  return (
    <div>
    { count }
      <button onClick={suma}>Suma 1</button>
      <button onClick={resta}>Resta 1</button>
      <button onClick={divide}>Divide entre 2</button>
      <button onClick={multiplica}>Multiplica por 2</button>
    </div>
  );
}
