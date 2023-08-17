import { Autoplay, Virtual } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/virtual';
import 'swiper/css/autoplay';
import { StyledSwiper } from './SlidesProducts.styled';
import { products } from '../../data.js';
import { useEffect, useState } from 'react';
import { fetchWatchImg } from 'api/fetchImgWatch';
import { nanoid } from 'nanoid';
import { SlideContent } from 'components/SlideContent/SlideContent';
export const SlidesProducts = () => {
  const [items, setItems] = useState();
  const [flippedSlides, setFlippedSlides] = useState([]);
  useEffect(() => {
    fetchWatchImg().then(item => {
      const productsWithImages = products.map((product, index) => ({
        ...product,
        img: item.hits[index].webformatURL,
      }));
      setItems(productsWithImages);
    });
  }, []);
  const toggleFlip = slideIndex => {
    if (flippedSlides.includes(slideIndex)) {
      setFlippedSlides(flippedSlides.filter(index => index !== slideIndex));
    } else {
      setFlippedSlides([...flippedSlides, slideIndex]);
    }
  };
  return (
    <StyledSwiper
      modules={[Virtual, Autoplay]}
      spaceBetween={30}
      slidesPerView={3}
      virtual
      autoplay={{ delay: 2000, disableOnInteraction: false }}
    >
      {items === undefined ||
        items.map((item, index) => (
          <SwiperSlide
            key={nanoid()}
            virtualIndex={nanoid()}
          >
            <SlideContent
              toggle={() => toggleFlip(index)}
              flipped={flippedSlides.includes(index)}
              item={item}
            />
          </SwiperSlide>
        ))}
    </StyledSwiper>
  );
};
