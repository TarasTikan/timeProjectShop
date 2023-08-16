import styled from 'styled-components';
export const ImageWatch = styled.img`
  width: 367px;
  height: 368px;
  border-radius: 42px;
  margin-bottom: auto;
  border: 2px solid #ffed4a;
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
  justify-content: center;
`;

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
`;

export const BtnBasket = styled.button`
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 50%;
  background-color: #ffed4a;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #292929;

    svg:hover {
      fill: #ffed4a;
    }

  }
  svg {
    transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
    fill: #000;
  }
`;

export const SlideContainer = styled.div`
  width: 450px;
  height: 551px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 23px;
  padding-bottom: 30px;
`;