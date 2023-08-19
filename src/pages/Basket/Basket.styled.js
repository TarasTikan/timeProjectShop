import styled from 'styled-components';

export const BasketSection = styled.section`
  padding-bottom: 120px;
  padding-top: 127px;
`;

export const Container = styled.div`
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  @media screen and (min-width: 320px) {
    width: 310px;
  }
  @media screen and (min-width: 768px) {
    width: 610px;
  }
  @media screen and (min-width: 1200px) {
    width: 1357px;
  }
`;

export const ItemBasket = styled.li`
  width: 387px;
  height: 575px;
  border-radius: 53px;
  background: #fff;
  padding-left: 28px;
  padding-right: 29px;
  padding-top: 36px;
  padding-bottom: 36px;
  display: flex;
  flex-direction: column;
  gap: 26px;
  align-items: center;
  justify-content: center;
`;

export const ListBasket = styled.ul`
display: flex;
align-items: center;
justify-content: center;
list-style: none;
flex-wrap: wrap;
gap: 50px;
`
export const ImageProduct = styled.img`
  width: 387px;
  height: 421px;
  border-radius: 53px;
`;

export const WrapBtnInfo = styled.div`
display:flex;
align-items: center;
justify-content: center;
gap: 36px;`

export const BtnInfo = styled.button`
  background-color: transparent;
  border-color: transparent;
  color: #292929;
  width: 57px;
  height: 57px;
  font-family: Russo One;
  font-size: 20px;
  font-style: normal;
  line-height: normal;
  fill: #292929;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 90px;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.15);
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  color: #292929;
  &:hover {
    fill: #ffed4a;
    color: #ffed4a;
    background-color: #292929;
  }
  
`;
export const TitleProduct = styled.h3`
  color: #000;
  font-family: Russo One;
  font-size: 42.746px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
`;

export const SpanTitle = styled.span`
  color: #000;
  font-family: Russo One;
  font-size: 27.496px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const TitleBasket = styled.h1`
  color: #ffff;
  font-family: Russo One;
  font-size: 42.746px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
  margin-bottom: 50px;
`;