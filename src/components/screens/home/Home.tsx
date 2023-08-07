import Button from '@/components/shared/button/Button.tsx';
import styled from 'styled-components';
import {repoName} from "@/assets/githubPages/githubPages.ts";

function Home() {
  return (
	<Main>
	  <Wrapper>
		<Image
		  src={`${repoName}/images/home/hand.svg`}
		  alt='hand'
		/>
		<RightWrapper>
		  <Title>Who wants to be a millionaire?</Title>
		  <Button>Start</Button>
		</RightWrapper>
	  </Wrapper>
	  <Triangle />
	</Main>
  );
}

const Main = styled.main`
  height: 100%;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media screen and (min-width: 1024px) {
    display: block;
  }

  @media screen and (min-width: 1440px) {
    height: unset;
  }

  @media screen and (min-width: 2560px) {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 98px auto 0;

  @media screen and (min-width: 768px) {
    justify-content: center;
    margin: 0;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    margin: 229px auto 0;
  }

  @media screen and (min-width: 2560px) {
    margin: 0;
  }
`;

const Image = styled.img`
  display: block;
  width: 197px;
  height: auto;

  @media screen and (min-width: 1024px) {
    width: 300px;
    margin: 0 0 0 86px;
  }

  @media screen and (min-width: 1440px) {
    width: 452px;
  }

  @media screen and (min-width: 2560px) {
    width: 710px;
  }
`;

const RightWrapper = styled.div`
  margin: 43px auto 0;

  @media screen and (min-width: 1024px) {
    width: 624px;
    margin: 0 0 0 119px;
  }

  @media screen and (min-width: 2560px) {
    width: 816px;
  }
`;

const Title = styled.h1`
  margin: 0 0 102px 0;

  @media screen and (min-width: 1440px) {
    margin: 0 0 64px 0;
  }

  @media screen and (min-width: 2560px) {
    margin: 0 0 130px 0;
  }
`;

const Triangle = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  right: 0;
  bottom: 0;
  background: #fff3eb;
  clip-path: polygon(0 100%, 100% 0, 100% 100%, 0% 100%);
  -webkit-clip-path: polygon(0 100%, 100% 0, 100% 100%, 0% 100%);
  z-index: -1;
`;

export default Home;
