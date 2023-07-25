export interface AnswerType {
	text: string;
	correctness: boolean;
}

export interface QuestionType {
	id: number;
	question: string;
	answers: AnswerType[];
}

export interface StorageQuestionType {
	question: QuestionType;
	selectedAnswers: AnswerType[];
}
