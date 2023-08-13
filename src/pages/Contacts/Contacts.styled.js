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