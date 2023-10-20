import "./App.css";
import {useState} from 'react';

function TempDiv ({temp}) {
  const bgColor = (temp > 26) ? "#E1AA74" : "#3876BF"; 
  const fontColor = (temp > 26) ? "#3876BF" : "#E1AA74";  

  return (
    <div className = "temp-div" 
         style={{background:bgColor,color:fontColor}}>
      {temp} °C
    </div>
  )
}

function TempButtons ({value, onClick}) {
  return (
    <button onClick={onClick}>
      {value}
    </button>
  )
}

function App() {
  const [temp, setTemp] = useState(25);

  function handleTemp(operation){
    if(operation === "+")
      setTemp(temp + 1)
    else if (operation === "-")
      setTemp(temp - 1)
  }

  return (
    <div className="App">
      <div className="content-div">
        <h2>Temperature Aperture</h2>
        <TempDiv temp={temp} />
        <div className =" button-div">
        <TempButtons value = "+" onClick={() => handleTemp("+")}/>
        <TempButtons value = "-" onClick={() => handleTemp("-")}/>
        </div>
      </div>
    </div>
  );
}

export default App;
