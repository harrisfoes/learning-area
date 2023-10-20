import {useState} from 'react';
import './App.css';

function PlusMinusButton ({value, onClick}) {
  return (
    <button onClick={onClick}>
      {value}
    </button>
  )
}

function OwnStateButton () {
  const [ownCount, setOwnCount] = useState(0);

  function ownClick(){
    setOwnCount(ownCount + 1)
  }

  return (
    <div>
      <button onClick = {ownClick}>
        I've been clicked {ownCount} times
      </button>
    </div>
  )
}

function App() {
  const [counter, setCounter] = useState(0);

  function handleClick(buttonId){
    if(buttonId === "-")
      setCounter ( counter - 1)
    else if(buttonId === "+")
      setCounter( counter + 1)
  }

  return (
    <div className="App">
      {counter}
      <div className="content">
        <PlusMinusButton value="-" onClick={() => handleClick("-")} />
        <PlusMinusButton value="+" onClick={() => handleClick("+")} />
        <OwnStateButton />
        <OwnStateButton />
      </div>
    </div>
  );
}

export default App;
