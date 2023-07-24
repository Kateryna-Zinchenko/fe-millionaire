import { AnswerType } from '@/types/question.type.ts';

const someAnswersIncorrect = (answers: AnswerType[]) => answers.some((answer) => !answer.correctness);

export default someAnswersIncorrect;
