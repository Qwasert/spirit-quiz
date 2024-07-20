import React from "react";
import Question from "./Question";
import { IQuestion } from "../Types";

function Quiz() {
  const question1: IQuestion = {
    prompText: "how much are you? ",
    answerTexts: ["this much", "answer 2"],
  };
  const question2: IQuestion = {
    prompText: "what do you think?",
    answerTexts: ["this", "answer 2"],
  };
  const question3: IQuestion = {
    prompText: "example?",
    answerTexts: ["example?", "answer 2"],
  };
  const question4: IQuestion = {
    prompText: "lorem ipsum?",
    answerTexts: ["dolor", "answer 2"],
  };

  return (
    <div>
      <h1>Spirit Island Personality Quiz</h1>

      <Question {...question1} />
      <Question {...question2} />
      <Question {...question3} />
      <Question {...question4} />
    </div>
  );
}

export default Quiz;
