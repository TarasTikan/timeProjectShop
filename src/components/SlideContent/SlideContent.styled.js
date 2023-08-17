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
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 34px;
  text-align: center;
  margin-top: 10px;
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
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PriceText = styled.p`
  color: #fff;
  font-family: Russo One;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-right: 20px;
`;

export const WrapPrice = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-left: 90px;
  border-radius: 30px;
  background: rgba(217, 217, 217, 0.5);
  box-shadow: 9px 7px 4px 5px rgba(0, 0, 0, 0.16),
    0px 0px 5px 0px rgba(0, 0, 0, 0.25) inset;
  backdrop-filter: blur(4px);
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
`;

export const BtnBasket = styled.button`
  margin-left: 20px;
  width: 47px;
  height: 47px;
  border-radius: 90px;
  background-color: #ffed4a;
  display: flex;
  align-items: center;
  justify-content: center;
  border-color: transparent;
  fill: #292929;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.15);
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  color: #292929;
  font-family: Russo One;
  font-size: 20px;
  font-style: normal;
  line-height: normal;
  &:hover {
    fill: #ffed4a;
    color: #ffed4a;
    background-color: #292929;
    border: 1px solid #ffed4a;
  }
`;

export const SlideContainer = styled.div`
  width: 450px;
  height: 470px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 30px;
  padding-top: 20px;
`;

export const WrapInfoText = styled.div`
padding-bottom: 10px;
padding-left: 5px;
padding-left: 5px;
  border-radius: 30px;
  background: rgba(217, 217, 217, 0.5);
  box-shadow: 9px 7px 4px 5px rgba(0, 0, 0, 0.16),
    0px 0px 5px 0px rgba(0, 0, 0, 0.25) inset;
  backdrop-filter: blur(4px);
`;