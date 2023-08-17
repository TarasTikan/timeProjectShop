import { Basket } from "icons/basket";
import { BtnBasket, BtnCard, ImageWatch, PriceText, SlideContainer, TitileProducts, WrapInfo, WrapPrice } from "./SlideContent.styled";
import 'swiper/css';
import 'swiper/css/virtual';
import 'swiper/css/autoplay';
import { ShopBascetIcon } from "icons/shopBascetIcon";
export const SlideContent = ({ flipped, item, toggle }) => {
  if (flipped) {
    return (
      <SlideContainer flipped={flipped}>
        <WrapInfo>
          <BtnCard onClick={toggle}>Buy</BtnCard>
          <h1>hello</h1>
        </WrapInfo>
      </SlideContainer>
    );
  }

  return (
    <SlideContainer>
      <WrapInfo>
        <ImageWatch src={item.img} alt="фото Часів" />
        <TitileProducts>{item.name}</TitileProducts>
        <WrapPrice>
          <PriceText>{item.price} грн</PriceText>
          <BtnBasket type="button">
            <ShopBascetIcon />
          </BtnBasket>
          <BtnBasket type="button" onClick={toggle}>
            і
          </BtnBasket>
        </WrapPrice>
      </WrapInfo>
    </SlideContainer>
  );
};
