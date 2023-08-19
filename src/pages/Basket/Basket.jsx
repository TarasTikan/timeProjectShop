import { LoveIcon } from 'icons/love';
import {
  BasketSection,
  BtnInfo,
  Container,
  ImageProduct,
  ItemBasket,
  ListBasket,
  SpanTitle,
  TitleBasket,
  TitleProduct,
  WrapBtnInfo,
} from './Basket.styled';
import { ShopBascetIcon } from 'icons/shopBascetIcon';
import { motion } from 'framer-motion';
import { useState } from 'react';
export const Basket = () => {
  const [basket] = useState(
    JSON.parse(localStorage.getItem('basket')) ?? []
  );
   const pageVariants = {
     initial: { opacity: 0, x: '-100%' },
     animate: {
       opacity: 1,
       x: '0%',
       transition: { duration: 1, ease: 'easeOut' },
     },
     exit: {
       opacity: 0,
       x: '100%',
       transition: { ease: 'backIn', duration: 0.8 },
     },
   };
  return (
    <div style={{ overflow: 'hidden', overflowX: 'hidden' }}>
      <motion.main
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        style={{ width: false ? '120%' : '100%' }}
      >
        <BasketSection>
          <Container>
         <TitleBasket>Корзина продуктів</TitleBasket>
            <ListBasket>
              {basket.map(({ name, price, img }) => (
                <ItemBasket>
                  <ImageProduct src={img} alt="imageProduct" />
                  <TitleProduct>{name}</TitleProduct>
                  <SpanTitle>{price} грн</SpanTitle>
                  <WrapBtnInfo>
                    <BtnInfo>
                      <LoveIcon />
                    </BtnInfo>
                    <BtnInfo>
                      <ShopBascetIcon />
                    </BtnInfo>
                    <BtnInfo>і</BtnInfo>
                  </WrapBtnInfo>
                </ItemBasket>
              ))}
            </ListBasket>
          </Container>
        </BasketSection>
      </motion.main>
    </div>
  );
};
