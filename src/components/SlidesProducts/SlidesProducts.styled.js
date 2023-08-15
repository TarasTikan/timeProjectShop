import styled from 'styled-components';
import { Swiper } from 'swiper/react';
export const SwiperSlide = styled.div`
  width: 435px;
  height: 504px;
  border-radius: 66px;
  background: rgba(217, 217, 217, 0.5);
  box-shadow: 9px 7px 4px 5px rgba(0, 0, 0, 0.16),
    0px 0px 5px 0px rgba(0, 0, 0, 0.25) inset;
  backdrop-filter: blur(4px);
`;
export const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 540px;
  align-items: center;
  justify-content: center;
  display: flex;
  margin: 0 auto;
  .swiper-slide {
    border-radius: 66px;
    background: rgba(217, 217, 217, 0.5);
    box-shadow: 9px 7px 4px 5px rgba(0, 0, 0, 0.16),
      0px 0px 5px 0px rgba(0, 0, 0, 0.25) inset;
    backdrop-filter: blur(4px);
    width: 435px;
    height: 504px;
  }
`;