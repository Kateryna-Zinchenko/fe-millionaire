import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
	children: string;
}

function Button({ children }: Props) {
	const onButtonClick = () => {
		localStorage.clear();
	};

	return (
		<Link
			to='/quiz/1'
			onClick={onButtonClick}
		>
			<ButtonWrapper>{children}</ButtonWrapper>
		</Link>
	);
}

const ButtonWrapper = styled.button`
	display: block;
	width: 288px;
	height: 48px;
	color: #fff;
	text-align: center;
	background-color: var(--color-button-inactive);
	border-radius: 8px;
	border: none;
	cursor: pointer;
	transition: background-color 0.3s;

	font-weight: 600;

	margin: 0 auto;

	&:hover {
		background-color: var(--color-button-hover);
	}

	&:active {
		background-color: var(--color-button-pressed);
	}

	@media screen and (min-width: 1024px) {
		margin: 0;
	}

	@media screen and (min-width: 1440px) {
		width: 296px;
		height: 64px;
		border-radius: 12px;

		margin: 0;
	}

	@media screen and (min-width: 2560px) {
		width: 420px;
		height: 86px;
		border-radius: 18px;

		margin: 0;
	}
`;

export default Button;
