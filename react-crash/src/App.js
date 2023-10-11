import './App.css';
import {useState} from 'react';

const Person = (props) => {
  return (
    <> 
    <h1>Name: {props.name}</h1>
    <h2>Last Name: {props.lastName}</h2>
    <h3>Age: {props.age}</h3>
    </>
  )
}

const App = () => {

  return (
    <div className="App">
      <Person name="Mimi" lastName= "Josephone" age="25" />
      <Person name= "Joan" lastName="Miller" age="22" />
    </div>
  );
}

export default App;
