import styled from 'styled-components';
import { memo } from 'react';

interface Props {
  text: string;
  onClick?: () => void;
  selected?: boolean;
  correct?: boolean;
  wrong?: boolean;
  active?: boolean;
  inactive?: boolean;
}

function CellTemplate({
  text,
  onClick,
  selected,
  correct,
  wrong,
  active,
  inactive,
}: Props) {
  return (
	<Wrapper
	  onClick={onClick}
	  correct={correct!}
	  wrong={wrong!}
	  selected={selected!}
	  active={active!}
	>
	  <Stick />
	  <CellBox>
		<CellBoxInner>
		  <Letter inactive={inactive!} active={active!}>{text}</Letter>
		</CellBoxInner>
	  </CellBox>
	  <Stick />
	</Wrapper>
  );
}

const Wrapper = styled.div<{ correct: boolean; wrong: boolean; selected: boolean; active: boolean }>`
  display: flex;
  align-items: center;
  width: fit-content;
  height: 100%;

  & hr {
    background: ${(props) => (props.selected || props.active)
    ? 'var(--color-border-selected-hover)' : props.correct ? 'var(--color-border-correct)' : props.wrong ? 'var(--color-border-wrong)' : 'var(--color-border-inactive)'};
  }

  & > div {
    background-color: ${(props) => (props.selected || props.active)
    ? 'var(--color-border-selected-hover)' : props.correct ? 'var(--color-border-correct)' : props.wrong ? 'var(--color-border-wrong)' : 'var(--color-border-inactive)'};
  }

  & > div > div {
    background-color: ${(props) => (props.selected ? 'var(--color-fill-selected)'
    : props.correct ? 'var(--color-fill-correct)' : props.wrong ? 'var(--color-fill-wrong)' : '#fff')};
  }
`;

const Stick = styled.hr`
  height: 1px;
  border: none;
  outline: none;

  &:first-child {
    margin: 0 -1px 0 0;
  }

  &:last-child {
    margin: 0 0 0 -1px;
  }
`;

const CellBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  box-sizing: border-box;
`;

const CellBoxInner = styled.div`
  width: calc(100% - 2px);
  height: calc(100% - 2px);
  position: relative;
`;

const Letter = styled.li<{ inactive: boolean; active: boolean }>`
  color: ${(props) => (props.inactive ? 'var(--color-text-inactive)' : props.active ? 'var(--color-text-active)' : 'var(--color-text-main)')};

  &::marker {
    font-weight: 600;
    color: var(--color-text-active);
  }
`;

export default memo(CellTemplate);
