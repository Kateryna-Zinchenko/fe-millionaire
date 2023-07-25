import CellTemplate from '@/components/shared/cellTemplate/CellTemplate.tsx';
import { memo } from 'react';
import styled from 'styled-components';

export interface Props {
  text: string;
  active: boolean;
  inactive: boolean;
}

function SmallCell({
  text,
  active,
  inactive,
}: Props) {
  return (
	<Wrapper>
	  <CellTemplate
		text={text}
		inactive={inactive || undefined}
		active={active || undefined}
	  />
	</Wrapper>
  );
}

const Wrapper = styled.div`
  & li {
    list-style: none;
    text-align: center;
  }

  & hr {
    width: 41px;

    @media screen and (min-width: 1440px) {
      width: 69px;
    }
  }

  & > div > div {
    width: 240px;
    clip-path: polygon(13.5303px 3.70404px,
    13.5303px 3.70404px,
    14.193546px 3.11473103px,
    14.895936px 2.58133504px,
    15.633888px 2.10529341px,
    16.40382px 1.68804752px,
    17.20215px 1.33103875px,
    18.025296px 1.03570848px,
    18.869676px 0.80349809px,
    19.731708px 0.63584896px,
    20.60781px 0.53420247px,
    21.4944px 0.5px,
    calc(100% - 21.494px) 0.5px,
    calc(100% - 21.494px) 0.5px,
    calc(100% - 20.607618px) 0.53420247px,
    calc(100% - 19.731664px) 0.63584896px,
    calc(100% - 18.869726px) 0.80349809px,
    calc(100% - 18.025392px) 1.03570848px,
    calc(100% - 17.20225px) 1.33103875px,
    calc(100% - 16.403888px) 1.68804752px,
    calc(100% - 15.633894px) 2.10529341px,
    calc(100% - 14.895856px) 2.58133504px,
    calc(100% - 14.193362px) 3.11473103px,
    calc(100% - 13.53px) 3.70404px,
    calc(100% - 0.72200000000001px) calc(50% - 0px),
    calc(100% - 13.53px) calc(100% - 3.704px),
    calc(100% - 13.53px) calc(100% - 3.704px),
    calc(100% - 14.193362px) calc(100% - 3.1147043px),
    calc(100% - 14.895856px) calc(100% - 2.5813184px),
    calc(100% - 15.633894px) calc(100% - 2.1052841px),
    calc(100% - 16.403888px) calc(100% - 1.6880432px),
    calc(100% - 17.20225px) calc(100% - 1.3310375px),
    calc(100% - 18.025392px) calc(100% - 1.0357088px),
    calc(100% - 18.869726px) calc(100% - 0.8034989px),
    calc(100% - 19.731664px) calc(100% - 0.6358496px),
    calc(100% - 20.607618px) calc(100% - 0.5342027px),
    calc(100% - 21.494px) calc(100% - 0.5px),
    21.4944px calc(100% - 0.5px),
    21.4944px calc(100% - 0.5px),
    20.60781px calc(100% - 0.5342027px),
    19.731708px calc(100% - 0.63584959999999px),
    18.869676px calc(100% - 0.8034989px),
    18.025296px calc(100% - 1.0357088px),
    17.20215px calc(100% - 1.3310375px),
    16.40382px calc(100% - 1.6880432px),
    15.633888px calc(100% - 2.1052841px),
    14.895936px calc(100% - 2.5813184px),
    14.193546px calc(100% - 3.1147043px),
    13.5303px calc(100% - 3.704px),
    0.721988px calc(50% - 0px),
    13.5303px 3.70404px);

    @media screen and (min-width: 1440px) {
      clip-path: polygon(22.2872px 0.5px,
      calc(100% - 22.287px) 0.5px,
      calc(100% - 22.287px) 0.5px,
      calc(100% - 21.269284px) 0.5450688px,
      calc(100% - 20.267432px) 0.6786352px,
      calc(100% - 19.286688px) 0.8982392px,
      calc(100% - 18.332296px) 1.2014208px,
      calc(100% - 17.4095px) 1.58572px,
      calc(100% - 16.523544px) 2.0486768px,
      calc(100% - 15.679672px) 2.5878312px,
      calc(100% - 14.883128px) 3.2007232px,
      calc(100% - 14.139156px) 3.8848928px,
      calc(100% - 13.453px) 4.63788px,
      calc(100% - 0.65100000000001px) calc(50% - 0px),
      calc(100% - 13.453px) calc(100% - 4.6379px),
      calc(100% - 13.453px) calc(100% - 4.6379px),
      calc(100% - 14.139156px) calc(100% - 3.8849171px),
      calc(100% - 14.883128px) calc(100% - 3.2007488px),
      calc(100% - 15.679672px) calc(100% - 2.5878557px),
      calc(100% - 16.523544px) calc(100% - 2.0486984px),
      calc(100% - 17.4095px) calc(100% - 1.5857375px),
      calc(100% - 18.332296px) calc(100% - 1.2014336px),
      calc(100% - 19.286688px) calc(100% - 0.8982473px),
      calc(100% - 20.267432px) calc(100% - 0.6786392px),
      calc(100% - 21.269284px) calc(100% - 0.5450699px),
      calc(100% - 22.287px) calc(100% - 0.50000000000001px),
      22.2872px calc(100% - 0.5px),
      22.2872px calc(100% - 0.5px),
      21.2694645px calc(100% - 0.54506989999999px),
      20.26756px calc(100% - 0.67863919999999px),
      19.2867395px calc(100% - 0.8982473px),
      18.332256px calc(100% - 1.2014336px),
      17.4093625px calc(100% - 1.5857375px),
      16.523312px calc(100% - 2.0486984px),
      15.6793575px calc(100% - 2.5878557px),
      14.882752px calc(100% - 3.2007488px),
      14.1387485px calc(100% - 3.8849171px),
      13.4526px calc(100% - 4.6379px),
      0.650854px calc(50% - 0px),
      13.4526px 4.63788px,
      13.4526px 4.63788px,
      14.1387728px 3.8848928px,
      14.8827904px 3.2007232px,
      15.6794016px 2.5878312px,
      16.5233552px 2.0486768px,
      17.4094px 1.58572px,
      18.3322848px 1.2014208px,
      19.2867584px 0.8982392px,
      20.2675696px 0.6786352px,
      21.2694672px 0.5450688px,
      22.2872px 0.5px);
    }
  }

  & > div > div > div {
    padding: 8px 24px;
    clip-path: polygon(13.5303px 3.70404px,
    13.5303px 3.70404px,
    14.193546px 3.11473103px,
    14.895936px 2.58133504px,
    15.633888px 2.10529341px,
    16.40382px 1.68804752px,
    17.20215px 1.33103875px,
    18.025296px 1.03570848px,
    18.869676px 0.80349809px,
    19.731708px 0.63584896px,
    20.60781px 0.53420247px,
    21.4944px 0.5px,
    calc(100% - 21.494px) 0.5px,
    calc(100% - 21.494px) 0.5px,
    calc(100% - 20.607618px) 0.53420247px,
    calc(100% - 19.731664px) 0.63584896px,
    calc(100% - 18.869726px) 0.80349809px,
    calc(100% - 18.025392px) 1.03570848px,
    calc(100% - 17.20225px) 1.33103875px,
    calc(100% - 16.403888px) 1.68804752px,
    calc(100% - 15.633894px) 2.10529341px,
    calc(100% - 14.895856px) 2.58133504px,
    calc(100% - 14.193362px) 3.11473103px,
    calc(100% - 13.53px) 3.70404px,
    calc(100% - 0.72200000000001px) calc(50% - 0px),
    calc(100% - 13.53px) calc(100% - 3.704px),
    calc(100% - 13.53px) calc(100% - 3.704px),
    calc(100% - 14.193362px) calc(100% - 3.1147043px),
    calc(100% - 14.895856px) calc(100% - 2.5813184px),
    calc(100% - 15.633894px) calc(100% - 2.1052841px),
    calc(100% - 16.403888px) calc(100% - 1.6880432px),
    calc(100% - 17.20225px) calc(100% - 1.3310375px),
    calc(100% - 18.025392px) calc(100% - 1.0357088px),
    calc(100% - 18.869726px) calc(100% - 0.8034989px),
    calc(100% - 19.731664px) calc(100% - 0.6358496px),
    calc(100% - 20.607618px) calc(100% - 0.5342027px),
    calc(100% - 21.494px) calc(100% - 0.5px),
    21.4944px calc(100% - 0.5px),
    21.4944px calc(100% - 0.5px),
    20.60781px calc(100% - 0.5342027px),
    19.731708px calc(100% - 0.63584959999999px),
    18.869676px calc(100% - 0.8034989px),
    18.025296px calc(100% - 1.0357088px),
    17.20215px calc(100% - 1.3310375px),
    16.40382px calc(100% - 1.6880432px),
    15.633888px calc(100% - 2.1052841px),
    14.895936px calc(100% - 2.5813184px),
    14.193546px calc(100% - 3.1147043px),
    13.5303px calc(100% - 3.704px),
    0.721988px calc(50% - 0px),
    13.5303px 3.70404px);

    @media screen and (min-width: 1440px) {
      clip-path: polygon(22.2872px 0.5px,
      calc(100% - 22.287px) 0.5px,
      calc(100% - 22.287px) 0.5px,
      calc(100% - 21.269284px) 0.5450688px,
      calc(100% - 20.267432px) 0.6786352px,
      calc(100% - 19.286688px) 0.8982392px,
      calc(100% - 18.332296px) 1.2014208px,
      calc(100% - 17.4095px) 1.58572px,
      calc(100% - 16.523544px) 2.0486768px,
      calc(100% - 15.679672px) 2.5878312px,
      calc(100% - 14.883128px) 3.2007232px,
      calc(100% - 14.139156px) 3.8848928px,
      calc(100% - 13.453px) 4.63788px,
      calc(100% - 0.65100000000001px) calc(50% - 0px),
      calc(100% - 13.453px) calc(100% - 4.6379px),
      calc(100% - 13.453px) calc(100% - 4.6379px),
      calc(100% - 14.139156px) calc(100% - 3.8849171px),
      calc(100% - 14.883128px) calc(100% - 3.2007488px),
      calc(100% - 15.679672px) calc(100% - 2.5878557px),
      calc(100% - 16.523544px) calc(100% - 2.0486984px),
      calc(100% - 17.4095px) calc(100% - 1.5857375px),
      calc(100% - 18.332296px) calc(100% - 1.2014336px),
      calc(100% - 19.286688px) calc(100% - 0.8982473px),
      calc(100% - 20.267432px) calc(100% - 0.6786392px),
      calc(100% - 21.269284px) calc(100% - 0.5450699px),
      calc(100% - 22.287px) calc(100% - 0.50000000000001px),
      22.2872px calc(100% - 0.5px),
      22.2872px calc(100% - 0.5px),
      21.2694645px calc(100% - 0.54506989999999px),
      20.26756px calc(100% - 0.67863919999999px),
      19.2867395px calc(100% - 0.8982473px),
      18.332256px calc(100% - 1.2014336px),
      17.4093625px calc(100% - 1.5857375px),
      16.523312px calc(100% - 2.0486984px),
      15.6793575px calc(100% - 2.5878557px),
      14.882752px calc(100% - 3.2007488px),
      14.1387485px calc(100% - 3.8849171px),
      13.4526px calc(100% - 4.6379px),
      0.650854px calc(50% - 0px),
      13.4526px 4.63788px,
      13.4526px 4.63788px,
      14.1387728px 3.8848928px,
      14.8827904px 3.2007232px,
      15.6794016px 2.5878312px,
      16.5233552px 2.0486768px,
      17.4094px 1.58572px,
      18.3322848px 1.2014208px,
      19.2867584px 0.8982392px,
      20.2675696px 0.6786352px,
      21.2694672px 0.5450688px,
      22.2872px 0.5px);
    }
  }
`;

export default memo(SmallCell);
