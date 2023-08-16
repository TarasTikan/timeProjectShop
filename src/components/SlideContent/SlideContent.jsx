import { Basket } from "icons/basket";
import { BtnBasket, BtnCard, ImageWatch, PriceText, SlideContainer, TitileProducts, WrapInfo, WrapPrice } from "./SlideContent.styled";
import 'swiper/css';
import 'swiper/css/virtual';
import 'swiper/css/autoplay';
export const SlideContent = ({ flipped, item }) => {
  return (
    <SlideContainer flipped={flipped}>
      <WrapInfo>
        {!flipped ? (
          // Відображення інформації при переверненому слайді
          <>
      <ImageWatch src={item.img} alt="фото Часів" />
            <TitileProducts>{item.name}</TitileProducts>
            <WrapPrice>
              <PriceText>{item.price} грн</PriceText>
              <BtnBasket type="button">
                <Basket />
              </BtnBasket>
            </WrapPrice>
          </>
        ) : (
            <>

            <BtnCard>Buy</BtnCard>
          <h1>hello</h1>

            </>
        )}
      </WrapInfo>
    </SlideContainer>
  );
};
