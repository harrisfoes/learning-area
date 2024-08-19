function Button() {
  function handleClick() {
    alert("You clicked me!");
  }

  return <button onClick={handleClick}>kore wa es button</button>;
}

export default Button;
