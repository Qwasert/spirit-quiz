import React, { useId } from "react";
import { IAnswer } from "../Types";

function Answer(props: IAnswer) {
  const { answerText, selectedRadioButton, handleRadioButtonClick } = props;

  const liKey = useId();
  const radioButtonName = useId();

  return (
    <li key={liKey}>
      <input
        type="radio"
        id={radioButtonName}
        value={radioButtonName}
        checked={selectedRadioButton === radioButtonName}
        onChange={() => handleRadioButtonClick(radioButtonName)}
      />
      <p>{answerText}</p>
    </li>
  );
}

export default Answer;
