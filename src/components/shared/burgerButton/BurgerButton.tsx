import styled from 'styled-components';

interface Props {
	onClick: () => void;
}

function BurgerButton({ onClick }: Props) {
	return (
		<Wrapper onClick={onClick}>
			<Line />
			<Line />
			<Line />
		</Wrapper>
	);
}

const Wrapper = styled.div`
	width: 24px;
	height: 24px;
	padding: 5px 4px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
	margin: 16px 16px 0 0;
	float: right;
`;

const Line = styled.div`
	width: 16px;
	height: 2px;
	border-radius: 50px;
	background: var(--color-text-main);
`;

export default BurgerButton;
