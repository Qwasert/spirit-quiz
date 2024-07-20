import React, { useState, useId } from "react";
import { IQuestion } from "../Types";
import Answer from "./Answer";

function Question(props: IQuestion) {
  const [selectedRadioButton, setSelectedRadioButton] = useState("");
  const handleRadioButtonClick = (radioButtonName: string) => {
    setSelectedRadioButton(radioButtonName);
  };

  const { prompText, answerTexts } = props;
  const id = useId();

  return (
    <div>
      <h2>{prompText}?</h2>
      <ul>
        {answerTexts.map((answerText) => (
          <Answer
            answerText={answerText}
            selectedRadioButton={selectedRadioButton}
            handleRadioButtonClick={handleRadioButtonClick}
          />
        ))}
      </ul>
    </div>
  );
}

export default Question;
