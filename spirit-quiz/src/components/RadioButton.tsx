import React, { useState } from "react";
import "./App.css";

function RadioButton() {
  const [selectedRadioButton, setSelectedRadioButton] =
    useState("radioButton1");

  const handleRadioButtonClick = (radioButtonName: string) => {
    setSelectedRadioButton(radioButtonName);
  };

  return (
    <div>
      <h1>Spirit Island Personality Quiz</h1>

      <div>
        <h2>How much are you willing to scar the land to say you saved it?</h2>
        <ul>
          <li>
            <input
              type="radio"
              id="radioButton1"
              value="radioButton1"
              checked={selectedRadioButton === "radioButton1"}
              onChange={() => handleRadioButtonClick("radioButton1")}
            />
            <p>A lot</p>
          </li>
          <li>
            <input
              type="radio"
              id="radioButton2"
              value="radioButton2"
              checked={selectedRadioButton === "radioButton2"}
              onChange={() => handleRadioButtonClick("radioButton2")}
            />
            <p>A lot</p>
          </li>
          <li>
            <input
              type="radio"
              id="radioButton3"
              value="radioButton3"
              checked={selectedRadioButton === "radioButton3"}
              onChange={() => handleRadioButtonClick("radioButton3")}
            />
            <p>A lot</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default RadioButton;
