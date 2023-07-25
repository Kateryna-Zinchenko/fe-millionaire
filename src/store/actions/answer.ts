import { createActionCreators } from 'immer-reducer';
import { Answer } from '@/store/reducers/answer.ts';

const answersActions = createActionCreators(Answer);

export default answersActions;
