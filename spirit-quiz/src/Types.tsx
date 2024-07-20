import React from "react";

export interface IQuiz {
  questions: IQuestion[];
}

export interface IQuestion {
  prompText: string;
  answerTexts: string[];
}

export interface IAnswer {
  answerText: string;
  selectedRadioButton: string;
  handleRadioButtonClick: (radioButtonName: string) => void;
}
