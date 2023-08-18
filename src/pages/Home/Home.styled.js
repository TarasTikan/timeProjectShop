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
  padding-bottom: 400px;
  padding-top: 74px;
  position: relative;
  @media screen and (min-width: 1200px) {
    padding-bottom: 206px;
    padding-top: 127px;
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
export const MainText = styled.p`
  width: 237px;
  height: 255.133px;
  color: #fff;
  font-family: Roboto Mono;
  font-size: 14.717px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media screen and (min-width: 1200px) {
    width: 562px;
    height: 605px;
    font-size: 34.898px;
  }
`;

export const SpanText = styled.span`
  color: #ffed4a;
  font-family: Roboto Mono;
  font-size: 14.717px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media screen and (min-width: 1200px) {
    width: 562px;
    height: 605px;
    font-size: 34.898px;
  }
`;
export const DecorRound = styled.div`
  animation: ${bounceInRight} 1s both;
  position: absolute;
  top: 352px;
  right: -168px;
  border-top-left-radius: 1382px;
  border-top-right-radius: 1256px;
  border-bottom-left-radius: 1097px;
  background-color: #ffed4a;
  width: 459px;
  height: 402px;
  @media screen and (min-width: 1200px) {
    bottom: none;
    left: none;
    width: 1177px;
    height: 1050px;
    top: 100px;
    right: -350px;
  }
`; 
export const ImgDecor = styled.img`
  animation: ${shakeY} 1s ease;
  width: 270.895px;
  height: 308.736px;
  position: absolute;
  bottom: 83px;
  @media screen and (min-width: 1200px) {
    left: 46px;
    top: -20px;
    width: 623.961px;
    height: 711.122px;
  }
`;

export const ShadowDecor = styled.div`
  border-radius: 291.317px;
  background: rgba(0, 0, 0, 0.6);
  filter: blur(12.013071060180664px);
  animation: ${shakeY} 1s ease;
  width: 291.317px;
  height: 15.016px;
  position: absolute;
  left: 27px;
  bottom: 104px;
  @media screen and (min-width: 1200px) {
    border-radius: 671px;
    width: 671px;
    filter: blur(27.670101165771484px);
    height: 34.588px;
    bottom: 415px;
  }
`;