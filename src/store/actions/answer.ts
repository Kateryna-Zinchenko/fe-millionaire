import { createActionCreators } from 'immer-reducer';
import { Answer } from '@/store/reducers/answer.ts';

export const answersActions = createActionCreators(Answer);
