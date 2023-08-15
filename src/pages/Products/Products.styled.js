import styled, { keyframes } from 'styled-components';
import bgProducts from  '../../img/bgProducts.jpg'
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
    transform: scale(0.1) translateY(-1000px) rotate(0);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0) rotate(62deg);
  }
`;
const shakeShadow = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.1) translateY(-1000px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
`;
export const Container = styled.div`
  width: 1357px;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;
export const MainSection = styled.section`
  background-image: url(${bgProducts});
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #292929;
  padding-bottom: 120px;
  padding-top: 127px;
  position: relative;
  align-items: center;
  display: flex;
  justify-content: center;
`;
export const DecorRound = styled.div`
  animation: ${bounceInRight} 1s both;
  position: absolute;
  bottom: -100px;
  right: 1000px;
  border-top-left-radius: 1382px;
  border-top-right-radius: 1382px;
  background: #ffed4a;
  width: 1400px;
  height: 823px;
`;
export const ImgDecor = styled.img`
  animation: ${shakeY} 1s ease;
  width: 623.961px;
  height: 711.122px;
  position: absolute;
  right: 291px;
  top: 18px;
  transform: rotate(62deg);
`;

export const ShadowDecor = styled.div`
  animation: ${shakeShadow} 1s ease;
  border-radius: 671px;
  background: rgba(0, 0, 0, 0.6);
  width: 387.788px;
  height: 26.122px;
  filter: blur(27.670101165771484px);
  position: absolute;
  right: 377px;
  bottom: 97px;
`;
