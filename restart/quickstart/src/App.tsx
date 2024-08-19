import Button from "./components/Button";
import { useState } from "react";
import IndependentButton from "./components/IndependentButton";
import SharedPress from "./components/SharedPress";
import "./App.css";

const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

const products = [
  { title: "Cabbage", id: 1 },
  { title: "Garlic", id: 2 },
  { title: "Apple", id: 3 },
];

const listItems = products.map((product) => (
  <li key={product.id}>{product.title}</li>
));

function Profile() {
  const [pressed, setPressed] = useState(0);

  function handlePressed() {
    setPressed(pressed + 1);
  }

  return (
    <>
      <h1>{user.name}</h1>

      <img
        className="avatar"
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />

      <ul>{listItems}</ul>

      <div>
        <button onClick={handlePressed}>I was pressed {pressed} times. </button>
      </div>

      <IndependentButton />
      <IndependentButton />
    </>
  );
}

function App() {
  const [sharedPress, setSharedPress] = useState(0);
  function handleSharedPress() {
    setSharedPress(sharedPress + 1);
  }
  return (
    <>
      <h1>Welcome to this App</h1>
      <Button />
      <Profile />

      <SharedPress count={sharedPress} onClick={handleSharedPress} />
      <SharedPress count={sharedPress} onClick={handleSharedPress} />
    </>
  );
}

export default App;
