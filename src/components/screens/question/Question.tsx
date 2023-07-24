import styled from 'styled-components';
import '@/styles/global.css';
import { useNavigate, useParams } from 'react-router-dom';
import { memo, useEffect, useMemo } from 'react';
import { AnswerType, QuestionType } from '@/types/question.type.ts';
import dataConfig from '@/assets/dataConfig/dataConfig.json';
import BigCell from '@/components/shared/cells/BigCell.tsx';
import BurgerButton from '@/components/shared/burgerButton/BurgerButton.tsx';
import CloseButton from '@/components/shared/closeButton/CloseButton.tsx';
import someAnswersIncorrect from '@/utils/someAnswerIncorrect.ts';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectIsOpen,
	selectRightAnswers,
	selectSelectedAnswers,
	selectWrongAnswers,
} from '@/store/selectors/answer.ts';
import { AppDispatch } from '@/main.tsx';
import { answersActions } from '@/store/actions/answer.ts';

function Question() {
	const { questionId } = useParams();

	const dispatch = useDispatch<AppDispatch>();
	const navigateTo = useNavigate();

	const selectedAnswers = useSelector(selectSelectedAnswers);
	const rightAnswers = useSelector(selectRightAnswers);
	const wrongAnswers = useSelector(selectWrongAnswers);

	const isOpen = useSelector(selectIsOpen);

	const questionData: QuestionType | undefined = useMemo(
		() => dataConfig.data.find((question) => question.id === Number(questionId)),
		[questionId],
	);

	const rightStorageAnswers: AnswerType[] = questionData!.answers.filter(
		(answer) => answer.correctness,
	);

	const handleQuestionClick = (answer: AnswerType) => {
		if (!selectedAnswers?.some((ans) => ans.text === answer.text)) {
			if (confirm(`Select answer "${answer.text}"?`)) {
				dispatch(answersActions.setSelectedAnswers(answer));
			}
		}
	};

	const handleBurgerMenuClick = () => {
		dispatch(answersActions.setIsOpen(!isOpen));
	};

	useEffect(() => {
		if (selectedAnswers?.length === rightStorageAnswers.length) {
			setTimeout(() => {
				dispatch(answersActions.setSelectedAnswers(null));
				dispatch(answersActions.setRightAnswers(rightStorageAnswers));
			}, 500);
		}
		if (
			selectedAnswers
			&& selectedAnswers.length !== 0
			&& selectedAnswers.length !== rightStorageAnswers.length
		) {
			alert(`Please, select ${rightStorageAnswers.length - selectedAnswers.length} more answer`);
		}
		if (
			selectedAnswers?.length === rightStorageAnswers.length
			&& !someAnswersIncorrect(selectedAnswers)
		) {
			setTimeout(() => {
				if (Number(questionId) === dataConfig.data.length) {
					navigateTo('/final');
				} else {
					navigateTo(`/quiz/${Number(questionId!) + 1}`);
				}
			}, 1500);
		} else if (
			selectedAnswers?.length === rightStorageAnswers.length
			&& someAnswersIncorrect(selectedAnswers)
		) {
			setTimeout(() => {
				dispatch(answersActions.setWrongAnswers(selectedAnswers));
			}, 500);
			setTimeout(() => {
				navigateTo('/final');
			}, 1500);
		}
	}, [selectedAnswers]);

	return (
		<MainWrapper isOpen={isOpen}>
			<BurgerButtonWrapper>
				{isOpen ? (
					<CloseButton onClick={handleBurgerMenuClick} />
				) : (
					<BurgerButton onClick={handleBurgerMenuClick} />
				)}
			</BurgerButtonWrapper>
			<Wrapper isOpen={isOpen}>
				<Main>
					<QuestionText>{questionData?.question}</QuestionText>
					<Answers type='A'>
						{questionData?.answers.map((answer) => (
							<BigCell
								key={answer.text}
								text={answer.text}
								selected={selectedAnswers!.some((ans) => ans.text === answer.text)}
								correct={rightAnswers!.some((ans) => ans.text === answer.text) || undefined}
								wrong={wrongAnswers!.some((ans) => ans.text === answer.text) || undefined}
								onClick={() => handleQuestionClick(answer)}
							/>
						))}
					</Answers>
				</Main>
			</Wrapper>
		</MainWrapper>
	);
}

const MainWrapper = styled.div<{ isOpen: boolean }>`
	display: flex;
	height: ${({ isOpen }) => (isOpen ? 'unset' : '100%')};
	width: 100%;
	background-color: var(--color-bg-question-page);
	flex-direction: column;
	justify-content: space-between;
`;

const Wrapper = styled.div<{ isOpen: boolean }>`
	display: ${({ isOpen }) => (isOpen ? 'none' : 'flex')};
	height: 100%;
	width: 100%;
	background-color: var(--color-bg-question-page);
	flex-direction: column;
	justify-content: space-between;
`;

const BurgerButtonWrapper = styled.div`
	display: flex;
	justify-content: flex-end;

	@media screen and (min-width: 1024px) {
		display: none;
	}
`;

const Main = styled.div`
	width: 100%;
	height: 100%;
	background-color: var(--color-bg-question-page);
	padding: 0 0 88px 0;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	@media screen and (min-width: 768px) {
		padding: 0 0 122px 0;
	}
`;

const QuestionText = styled.p`
	font-size: 18px;
	font-weight: 600;
	line-height: 21px;
	text-align: center;

	margin: 96px auto 0;
	padding: 0 16px;

	@media screen and (min-width: 1024px) {
		font-size: 32px;
		line-height: 37px;
		text-align: left;

		max-width: 624px;
		margin: 133px 0 0 32px;
		padding: 0;
	}

	@media screen and (min-width: 1280px) {
		margin: 133px 0 0 80px;
	}
`;

const Answers = styled.ol`
	display: grid;
	grid-template-columns: none;
	grid-auto-rows: 1fr;
	row-gap: 8px;
	counter-reset: item;
	width: fit-content;
	margin: 0 auto;

	@media screen and (min-width: 768px) {
		grid-template-columns: repeat(2, 0fr);
		row-gap: 32px;
	}

	@media screen and (min-width: 1024px) {
		width: unset;
		margin: 0;
		padding: 0 0 0 32px;
	}

	@media screen and (min-width: 1280px) {
		padding: 0 0 0 80px;
	}
`;

export default memo(Question);
