import { useState } from "react";

function IndependentButton() {
  const [pressed, setPressed] = useState(0);

  function handleClick() {
    setPressed(pressed + 1);
  }

  return (
    <button onClick={handleClick}>I have been pressed {pressed} times.</button>
  );
}

export default IndependentButton;
