import styled from 'styled-components';
import { Outlet, useParams } from 'react-router-dom';
import dataConfig from '@/assets/dataConfig/dataConfig.json';
import { RewardType } from '@/types/reward.type.ts';
import SmallCell from '@/components/shared/cells/SmallCell.tsx';
import rewardFormatting from '@/utils/rewardFormatting.ts';
import { useSelector } from 'react-redux';
import { selectIsOpen } from '@/store/selectors/answer.ts';

function QuizTemplate() {
  const { rewards } = dataConfig;
  const { questionId } = useParams();

  const isOpen = useSelector(selectIsOpen);

  const setReward = (reward: RewardType) => {
	if (Number(questionId) !== 1 && reward.id === Number(questionId!) - 1) {
	  localStorage.setItem('reward', JSON.stringify(reward.amount));
	} else if (Number(questionId) === 1) {
	  localStorage.setItem('reward', JSON.stringify(0));
	}
  };

  return (
	<Wrapper isOpen={isOpen}>
	  <Outlet />
	  <Aside isOpen={isOpen}>
		{rewards.map((reward: RewardType) => {
		  setReward(reward);
		  return (
			<SmallCell
			  key={reward.id}
			  text={rewardFormatting(reward.amount)}
			  active={reward.id === Number(questionId!) - 1}
			  inactive={reward.id < Number(questionId) - 1}
			/>
		  );
		})}
	  </Aside>
	</Wrapper>
  );
}

const Wrapper = styled.div<{ isOpen: boolean }>`
	display: flex;
	justify-content: space-between;
	flex-direction: ${({ isOpen }) => (isOpen ? 'column' : 'unset')};
	height: 100%;

	& > div {
		width: 100%;
	}
`;

const Aside = styled.aside<{ isOpen: boolean }>`
	width: 100%;
	height: 100%;
	flex-direction: column-reverse;
	justify-content: center;
	gap: 8px;
	display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
	background-color: var(--color-bg-question-page);

	& > div {
		margin: 0 auto;
	}

	@media screen and (min-width: 1024px) {
		width: fit-content;
		display: flex;
		background-color: #fff;
		margin: 0;
	}
`;

export default QuizTemplate;
