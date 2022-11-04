import React from 'react';
import './App.css';
import { useState } from 'react';


function App() {

  const [output, setOutput] = useState('Click this button to fetch the Hello World api');

  const handleClick = () => {
    fetch("https://localhost:44361/HelloWorld", {
      headers: {
        XApiKey: "pgH7QzFHJx4w46fI~5Uzi4RvtTwlEXp"
      }
    
    })
    .then(response => response.text())
    .then(output => setOutput(output))
  }

  return (
    <div className="App">
      <h1>
        Welcome to my Project
      </h1>

      <p>{output}</p>
        <button className="ApiButton" onClick={handleClick}>Click this button to see an API being fetched using use state</button>

    </div>
  );
}

export default App;
