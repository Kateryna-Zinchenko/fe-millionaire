import styled from 'styled-components';

interface Props {
  onClick: () => void;
}

function CloseButton({ onClick }: Props) {
  return (
	<Wrapper onClick={onClick}>
	  <Lines />
	</Wrapper>
  );
}

const Wrapper = styled.div`
	width: 24px;
	height: 24px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 16px 16px 0 0;
`;

const Lines = styled.div`
	width: 19px;
	height: 19px;
	position: relative;
	transform: rotate(45deg);

	&:before {
		content: '';
		position: absolute;
		left: 0;
		top: 50%;
		transform: translate(0, -50%);
		width: 100%;
		height: 2px;
		border-radius: 50px;
		background: var(--color-text-main);
	}

	&:after {
		content: '';
		position: absolute;
		left: 50%;
		top: 0;
		transform: translate(-50%, 0);
		width: 2px;
		height: 100%;
		border-radius: 50px;
		background: var(--color-text-main);
	}
`;

export default CloseButton;
