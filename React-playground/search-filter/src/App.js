import "./App.css";
import myData from "./MOCK_DATA.json";
import { useState } from "react";

function RecordName({ val, key }) {
  return (
    <div className="record-name" key={key}>
      {val.first_name}
    </div>
  );
}

function DisplayData({ term }) {
  return myData
    .filter((val) => {
      return val.first_name.toLowerCase().includes(term.toLowerCase());
    })
    .map((val, key) => {
      return <RecordName val={val} key={key} />;
    });
}

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search name..."
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <DisplayData term={searchTerm} />
    </div>
  );
}

export default App;
