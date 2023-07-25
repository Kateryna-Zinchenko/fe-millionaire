import CellTemplate from '@/components/shared/cellTemplate/CellTemplate.tsx';
import { memo } from 'react';
import styled from 'styled-components';

export interface Props {
  text: string;
  selected: boolean;
  correct: boolean | undefined;
  wrong: boolean | undefined;
  onClick: () => void;
}

function BigCell({
  text,
  selected,
  correct,
  wrong,
  onClick,
}: Props) {
  return (
	<Wrapper
	  correct={correct!}
	  wrong={wrong!}
	>
	  <CellTemplate
		text={text}
		selected={selected}
		correct={correct!}
		wrong={wrong!}
		onClick={onClick}
	  />
	</Wrapper>
  );
}

const Wrapper = styled.div<{ correct: boolean; wrong: boolean }>`
  & hr {
    width: 17px;
  }

  & > div {
    cursor: pointer;
  }

  & > div:hover hr,
  & > div:hover > div {
    background: ${(props) => !props.correct && !props.wrong && 'var(--color-border-selected-hover)'};
  }

  & > div > div {
    width: 288px;
    clip-path: polygon(26.1754px 0.5px,
    calc(100% - 26.175px) 0.5px,
    calc(100% - 26.175px) 0.5px,
    calc(100% - 25.068767px) 0.55324323px,
    calc(100% - 23.982856px) 0.71071264px,
    calc(100% - 22.923849px) 0.96901781px,
    calc(100% - 21.898328px) 1.32476832px,
    calc(100% - 20.912875px) 1.77457375px,
    calc(100% - 19.974072px) 2.31504368px,
    calc(100% - 19.088501px) 2.94278769px,
    calc(100% - 18.262744px) 3.65441536px,
    calc(100% - 17.503383px) 4.44653627px,
    calc(100% - 16.817px) 5.31576px,
    calc(100% - 0.61399999999998px) calc(50% - 0px),
    calc(100% - 16.817px) calc(100% - 5.3158px),
    calc(100% - 16.817px) calc(100% - 5.3158px),
    calc(100% - 17.503383px) calc(100% - 4.446563px),
    calc(100% - 18.262744px) calc(100% - 3.654432px),
    calc(100% - 19.088501px) calc(100% - 2.942797px),
    calc(100% - 19.974072px) calc(100% - 2.315048px),
    calc(100% - 20.912875px) calc(100% - 1.774575px),
    calc(100% - 21.898328px) calc(100% - 1.324768px),
    calc(100% - 22.923849px) calc(100% - 0.96901700000001px),
    calc(100% - 23.982856px) calc(100% - 0.710712px),
    calc(100% - 25.068767px) calc(100% - 0.55324299999999px),
    calc(100% - 26.175px) calc(100% - 0.5px),
    26.1754px calc(100% - 0.5px),
    26.1754px calc(100% - 0.5px),
    25.069186px calc(100% - 0.55324299999999px),
    23.983276px calc(100% - 0.71071199999999px),
    22.924258px calc(100% - 0.96901699999999px),
    21.89872px calc(100% - 1.324768px),
    20.91325px calc(100% - 1.774575px),
    19.974436px calc(100% - 2.315048px),
    19.088866px calc(100% - 2.942797px),
    18.263128px calc(100% - 3.654432px),
    17.50381px calc(100% - 4.446563px),
    16.8175px calc(100% - 5.3158px),
    0.614452px calc(50% - 0px),
    16.8175px 5.31576px,
    16.8175px 5.31576px,
    17.50381px 4.44653627px,
    18.263128px 3.65441536px,
    19.088866px 2.94278769px,
    19.974436px 2.31504368px,
    20.91325px 1.77457375px,
    21.89872px 1.32476832px,
    22.924258px 0.96901781px,
    23.983276px 0.71071264px,
    25.069186px 0.55324323px,
    26.1754px 0.5px);

    @media screen and (min-width: 1440px) {
      width: 390px;
      clip-path: polygon(22.7172px 5.28344px,
      22.7172px 5.28344px,
      23.4037758px 4.41970664px,
      24.1626144px 3.63270272px,
      24.9871926px 2.92577048px,
      25.8709872px 2.30225216px,
      26.807475px 1.76549px,
      27.7901328px 1.31882624px,
      28.8124374px 0.96560312px,
      29.8678656px 0.70916288px,
      30.9498942px 0.55284776px,
      32.052px 0.5px,
      calc(100% - 32.052px) 0.5px,
      calc(100% - 32.052px) 0.5px,
      calc(100% - 30.949867px) 0.55284776px,
      calc(100% - 29.867816px) 0.70916288px,
      calc(100% - 28.812369px) 0.96560312px,
      calc(100% - 27.790048px) 1.31882624px,
      calc(100% - 26.807375px) 1.76549px,
      calc(100% - 25.870872px) 2.30225216px,
      calc(100% - 24.987061px) 2.92577048px,
      calc(100% - 24.162464px) 3.63270272px,
      calc(100% - 23.403603px) 4.41970664px,
      calc(100% - 22.717px) 5.28344px,
      calc(100% - 0.61599999999999px) calc(50% - 0px),
      calc(100% - 22.717px) calc(100% - 5.2834px),
      calc(100% - 22.717px) calc(100% - 5.2834px),
      calc(100% - 23.403603px) calc(100% - 4.4196872px),
      calc(100% - 24.162464px) calc(100% - 3.6326976px),
      calc(100% - 24.987061px) calc(100% - 2.9257744px),
      calc(100% - 25.870872px) calc(100% - 2.3022608px),
      calc(100% - 26.807375px) calc(100% - 1.7655px),
      calc(100% - 27.790048px) calc(100% - 1.3188352px),
      calc(100% - 28.812369px) calc(100% - 0.96560959999999px),
      calc(100% - 29.867816px) calc(100% - 0.7091664px),
      calc(100% - 30.949867px) calc(100% - 0.55284879999999px),
      calc(100% - 32.052px) calc(100% - 0.50000000000001px),
      32.052px calc(100% - 0.5px),
      32.052px calc(100% - 0.5px),
      30.9498942px calc(100% - 0.55284879999999px),
      29.8678656px calc(100% - 0.70916639999999px),
      28.8124374px calc(100% - 0.96560959999999px),
      27.7901328px calc(100% - 1.3188352px),
      26.807475px calc(100% - 1.7655px),
      25.8709872px calc(100% - 2.3022608px),
      24.9871926px calc(100% - 2.9257744px),
      24.1626144px calc(100% - 3.6326976px),
      23.4037758px calc(100% - 4.4196872px),
      22.7172px calc(100% - 5.2834px),
      0.615976px calc(50% - 0px),
      22.7172px 5.28344px);
    }
  }

  & > div > div > div {
    padding: 20px 24px 20px 48px;
    clip-path: polygon(26.1754px 0.5px,
    calc(100% - 26.175px) 0.5px,
    calc(100% - 26.175px) 0.5px,
    calc(100% - 25.068767px) 0.55324323px,
    calc(100% - 23.982856px) 0.71071264px,
    calc(100% - 22.923849px) 0.96901781px,
    calc(100% - 21.898328px) 1.32476832px,
    calc(100% - 20.912875px) 1.77457375px,
    calc(100% - 19.974072px) 2.31504368px,
    calc(100% - 19.088501px) 2.94278769px,
    calc(100% - 18.262744px) 3.65441536px,
    calc(100% - 17.503383px) 4.44653627px,
    calc(100% - 16.817px) 5.31576px,
    calc(100% - 0.61399999999998px) calc(50% - 0px),
    calc(100% - 16.817px) calc(100% - 5.3158px),
    calc(100% - 16.817px) calc(100% - 5.3158px),
    calc(100% - 17.503383px) calc(100% - 4.446563px),
    calc(100% - 18.262744px) calc(100% - 3.654432px),
    calc(100% - 19.088501px) calc(100% - 2.942797px),
    calc(100% - 19.974072px) calc(100% - 2.315048px),
    calc(100% - 20.912875px) calc(100% - 1.774575px),
    calc(100% - 21.898328px) calc(100% - 1.324768px),
    calc(100% - 22.923849px) calc(100% - 0.96901700000001px),
    calc(100% - 23.982856px) calc(100% - 0.710712px),
    calc(100% - 25.068767px) calc(100% - 0.55324299999999px),
    calc(100% - 26.175px) calc(100% - 0.5px),
    26.1754px calc(100% - 0.5px),
    26.1754px calc(100% - 0.5px),
    25.069186px calc(100% - 0.55324299999999px),
    23.983276px calc(100% - 0.71071199999999px),
    22.924258px calc(100% - 0.96901699999999px),
    21.89872px calc(100% - 1.324768px),
    20.91325px calc(100% - 1.774575px),
    19.974436px calc(100% - 2.315048px),
    19.088866px calc(100% - 2.942797px),
    18.263128px calc(100% - 3.654432px),
    17.50381px calc(100% - 4.446563px),
    16.8175px calc(100% - 5.3158px),
    0.614452px calc(50% - 0px),
    16.8175px 5.31576px,
    16.8175px 5.31576px,
    17.50381px 4.44653627px,
    18.263128px 3.65441536px,
    19.088866px 2.94278769px,
    19.974436px 2.31504368px,
    20.91325px 1.77457375px,
    21.89872px 1.32476832px,
    22.924258px 0.96901781px,
    23.983276px 0.71071264px,
    25.069186px 0.55324323px,
    26.1754px 0.5px);

    @media screen and (min-width: 1440px) {
      padding: 24.5px 48px 24.5px 56px;
      clip-path: polygon(22.7172px 5.28344px,
      22.7172px 5.28344px,
      23.4037758px 4.41970664px,
      24.1626144px 3.63270272px,
      24.9871926px 2.92577048px,
      25.8709872px 2.30225216px,
      26.807475px 1.76549px,
      27.7901328px 1.31882624px,
      28.8124374px 0.96560312px,
      29.8678656px 0.70916288px,
      30.9498942px 0.55284776px,
      32.052px 0.5px,
      calc(100% - 32.052px) 0.5px,
      calc(100% - 32.052px) 0.5px,
      calc(100% - 30.949867px) 0.55284776px,
      calc(100% - 29.867816px) 0.70916288px,
      calc(100% - 28.812369px) 0.96560312px,
      calc(100% - 27.790048px) 1.31882624px,
      calc(100% - 26.807375px) 1.76549px,
      calc(100% - 25.870872px) 2.30225216px,
      calc(100% - 24.987061px) 2.92577048px,
      calc(100% - 24.162464px) 3.63270272px,
      calc(100% - 23.403603px) 4.41970664px,
      calc(100% - 22.717px) 5.28344px,
      calc(100% - 0.61599999999999px) calc(50% - 0px),
      calc(100% - 22.717px) calc(100% - 5.2834px),
      calc(100% - 22.717px) calc(100% - 5.2834px),
      calc(100% - 23.403603px) calc(100% - 4.4196872px),
      calc(100% - 24.162464px) calc(100% - 3.6326976px),
      calc(100% - 24.987061px) calc(100% - 2.9257744px),
      calc(100% - 25.870872px) calc(100% - 2.3022608px),
      calc(100% - 26.807375px) calc(100% - 1.7655px),
      calc(100% - 27.790048px) calc(100% - 1.3188352px),
      calc(100% - 28.812369px) calc(100% - 0.96560959999999px),
      calc(100% - 29.867816px) calc(100% - 0.7091664px),
      calc(100% - 30.949867px) calc(100% - 0.55284879999999px),
      calc(100% - 32.052px) calc(100% - 0.50000000000001px),
      32.052px calc(100% - 0.5px),
      32.052px calc(100% - 0.5px),
      30.9498942px calc(100% - 0.55284879999999px),
      29.8678656px calc(100% - 0.70916639999999px),
      28.8124374px calc(100% - 0.96560959999999px),
      27.7901328px calc(100% - 1.3188352px),
      26.807475px calc(100% - 1.7655px),
      25.8709872px calc(100% - 2.3022608px),
      24.9871926px calc(100% - 2.9257744px),
      24.1626144px calc(100% - 3.6326976px),
      23.4037758px calc(100% - 4.4196872px),
      22.7172px calc(100% - 5.2834px),
      0.615976px calc(50% - 0px),
      22.7172px 5.28344px);
    }
  }
`;

export default memo(BigCell);
