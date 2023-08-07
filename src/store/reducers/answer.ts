import { createReducerFunction, ImmerReducer } from 'immer-reducer';
import { AnswerType } from '@/types/question.type.ts';

interface AnswerState {
  selectedAnswers: AnswerType[];
  rightAnswers: AnswerType[];
  wrongAnswers: AnswerType[];
  isOpen: boolean;
}

const initialState: AnswerState = {
  selectedAnswers: [],
  rightAnswers: [],
  wrongAnswers: [],
  isOpen: false
};

export class Answer extends ImmerReducer<AnswerState> {
  setSelectedAnswers(answer: AnswerType | null) {
	if (answer) this.draftState.selectedAnswers = [...this.draftState.selectedAnswers, answer];
	else this.draftState.selectedAnswers = [];
  }

  setRightAnswers(rightAnswers: AnswerType[] | null) {
    if (rightAnswers) this.draftState.rightAnswers = rightAnswers;
	  else this.draftState.rightAnswers = []
  }

  setWrongAnswers(wrongAnswers: AnswerType[] | null) {
    if (wrongAnswers) this.draftState.wrongAnswers = wrongAnswers;
    else this.draftState.wrongAnswers = [];
  }

  setIsOpen(isOpen: boolean) {
	this.draftState.isOpen = isOpen;
  }
}

export default createReducerFunction(Answer, initialState);
