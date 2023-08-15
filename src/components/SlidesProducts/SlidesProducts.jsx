// import { Swiper} from 'swiper/react';
// import { Virtual } from 'swiper/modules';
// import { StyledSwiper, SwiperSlide } from './SlidesProducts.styled';

// export const SlidesProducts = () => {
//   const slides = Array.from({ length: 10 }).map(
//     (el, index) => `Slide ${index + 1}`
//   );
//   return (
//     <StyledSwiper modules={[Virtual]} spaceBetween={50} slidesPerView={3} virtual={true}>
//       {slides.map((slideContent, index) => (
//         <SwiperSlide key={slideContent} virtualIndex={index}>
//           {slideContent}
//         </SwiperSlide>
//       ))}
//     </StyledSwiper>
//   );
// };


import { Autoplay, Virtual } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/virtual';
import 'swiper/css/autoplay';
import { StyledSwiper } from './SlidesProducts.styled';

export const SlidesProducts = () => {
  const slides = Array.from({ length: 1000 }).map(
    (el, index) => `Slide ${index + 1}`
  );

  return (
    <StyledSwiper
      modules={[Virtual, Autoplay]}
      spaceBetween={30}
      slidesPerView={3}
      virtual
      autoplay={{ delay: 2000, disableOnInteraction: false }}
    >
      {slides.map((slideContent, index) => (
        <SwiperSlide key={slideContent} virtualIndex={index}>
          {slideContent}
        </SwiperSlide>
      ))}
    </StyledSwiper>
  );
};