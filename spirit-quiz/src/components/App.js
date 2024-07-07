import React, { useState } from "react";
import logo from "../images/logo.svg";
import "../styles/App.css";

function App() {
  const [selectedRadioButton, setSelectedRadioButton] =
    useState("radioButton1");

  const handleRadioButtonClick = (buttonNumber) => {
    setSelectedRadioButton(buttonNumber);
  };

  return (
    <div className="App">
      <div>
        <h1>With which spirit do you align?</h1>

        <div>
          <h2>
            How much are you willing to scar the earth to say you saved it?
          </h2>
          <ul>
            <li>
              <input
                type="radio"
                id="radioButton1"
                value="radioButton1"
                checked={selectedRadioButton === "radioButton1"}
                onChange={() => handleRadioButtonClick("radioButton1")}
              />
            </li>
            <li>
              <input
                type="radio"
                id="radioButton2"
                value="radioButton2"
                checked={selectedRadioButton === "radioButton2"}
                onChange={() => handleRadioButtonClick("radioButton2")}
              />
            </li>
          </ul>
          <p>A lot</p>
          <p>The forest fire is a necessary evil</p>
          <p>Sooner I would sacrifice myself</p>
        </div>

        <div>
          <h2>
            How much are you willing to scar the earth to say you saved it?
          </h2>
          <p>A lot</p>
          <p>The forest fire is a necessary evil</p>
          <p>Sooner I would sacrifice myself</p>
          <p>The forest fire is a necessary evil</p>
        </div>
      </div>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
