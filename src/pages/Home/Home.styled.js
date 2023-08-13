import styled, { keyframes } from 'styled-components';
export const bounceInRight = keyframes`
  from, 20%, 40%, 60%, 80%, to {
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  0% {
    opacity: 0;
    transform: translate3d(3000px, 0, 0);
  }

  20% {
    transform: translate3d(-25px, 0, 0);
  }

  40% {
    transform: translate3d(10px, 0, 0);
  }

  60% {
    transform: translate3d(-5px, 0, 0);
  }

  80% {
    transform: translate3d(2px, 0, 0);
  }

  to {
    transform: none;
  }
`;
const shakeY = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.1) translateY(-1000px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
`;
export const MainSection = styled.section`
  background-color: #292929;
  padding-bottom: 206px;
  padding-top: 127px;
  position: relative;
`;
export const Container = styled.div`
  width: 1357px;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;
export const MainText = styled.p`
width: 562px;
height: 605px;
  color: #fff;
  font-family: Roboto Mono;
  font-size: 34.898px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const SpanText = styled.span`
  color: #ffed4a;
  font-family: Roboto Mono;
  font-size: 34.898px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const DecorRound = styled.div`
  animation: ${bounceInRight} 1s both;
  position: absolute;
  bottom: 0;
  right: 0;
  border-top-left-radius: 1382px;
  background: #ffed4a;
  width: 877px;
  height: 800px;
`;
export const ImgDecor = styled.img`
  animation: ${shakeY} 1s ease;
  width: 623.961px;
  height: 711.122px;
  position: absolute;
  left: 152px;
`;

export const ShadowDecor = styled.div`
  animation: ${shakeY} 1s ease;
  border-radius: 671px;
  background: rgba(0, 0, 0, 0.6);
  width: 671px;
  height: 34.588px;
  filter: blur(27.670101165771484px);
  position: absolute;
  left: 102px;
  bottom: 131px;
`;