import { createSelector, Selector } from 'reselect';
import { State } from '@/store/index.ts';
import { AnswerType } from '@/types/question.type.ts';

const selectAnswersReducer = (state: State) => state.answersReducer;

export const selectSelectedAnswers: Selector<State, AnswerType[] | null> = createSelector(
  selectAnswersReducer,
  ({ selectedAnswers }) => selectedAnswers
);

export const selectRightAnswers: Selector<State, AnswerType[] | null> = createSelector(
  selectAnswersReducer,
  ({ rightAnswers }) => rightAnswers
);

export const selectWrongAnswers: Selector<State, AnswerType[] | null> = createSelector(
  selectAnswersReducer,
  ({ wrongAnswers }) => wrongAnswers
);

export const selectIsOpen: Selector<State, boolean> = createSelector(
  selectAnswersReducer,
  ({ isOpen }) => isOpen
);
