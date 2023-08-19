import styled from 'styled-components';
import { Swiper } from 'swiper/react';
export const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 650px;
  align-items: center;
  justify-content: center;
  display: flex;
  margin: 0 auto;
  .swiper-slide {
    border-radius: 66px;
    background: linear-gradient(135deg, #ffed4a 30%, #292929 60%);
    box-shadow: 9px 7px 4px 5px rgba(0, 0, 0, 0.16),
      0px 0px 5px 0px rgba(0, 0, 0, 0.25) inset;
    backdrop-filter: blur(4px);
    width: 450px;
    height: 470px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 23px;
    padding-bottom: 30px;
  }
`;
export const ImageWatch = styled.img`
  width: 367px;
  height: 383px;
  border-radius: 42px;
  margin-bottom: auto;
`;

export const TitileProducts = styled.h3`
  color: #fff;
  font-family: Russo One;
  font-size: 35px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 34px;
  text-align: center;
  margin-right: 34px;
`;

export const WrapTitle = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;

export const BtnCard = styled.button`
  border-radius: 44px;
  background: #ffed4a;
  height: 62px;
  color: #000;
  font-family: Russo One;
  font-size: 48.043px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 400px;
  border: none;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: #ffed4a;
    background-color: #fff;
    border: 2px solid #ffed4a;
  }
`;

export const WrapInfo = styled.div`
flex-direction: column;
margin-top: 10px;
gap: 10px;
display: flex;
align-items: center;
justify-content: center;`


export const PriceText = styled.p`
  color: #fff;
  font-family: Russo One;
  font-size: 35.153px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const WrapPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;
  svg {

    transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
    fill: #000;
  }
  svg:hover {
    fill: #ffed4a;
  }
`;

export const BtnBasket = styled.button`
  width: 60px;
  height: 60px;
  border: none;
  background-color: transparent;
`;