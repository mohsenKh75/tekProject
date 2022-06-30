import React, { useRef, useState } from 'react';
import SwiperCore, { Virtual, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// install Virtual module
SwiperCore.use([Virtual, Navigation, Pagination]);

export default function SlideShow() {
    const [resize, setResize] = useState(window.innerWidth);
    const [swiperRef, setSwiperRef] = useState(null);
    const appendNumber = useRef(10);
    const prependNumber = useRef(1);
    // Create array with 10 slides
    const [slides, setSlides] = useState(
        Array.from({ length: 10 }).map((_, index) => `Slide ${index + 1}`)
    );


    /*  const prepend = () => {
          setSlides([
              `Slide ${prependNumber.current - 2}`,
              `Slide ${prependNumber.current - 1}`,
              ...slides,
          ]);
          prependNumber.current = prependNumber.current - 2;
          swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
      };
  
      const append = () => {
          setSlides([...slides, 'Slide ' + ++appendNumber.current]);
      };
  
      const slideTo = (index) => {
          swiperRef.slideTo(index - 1, 0);
      };*/

    return (
        <>
            <Swiper
                onSwiper={setSwiperRef}
                slidesPerView={3}
                centeredSlides={true}
                spaceBetween={10}
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                virtual
            >
                {slides.map((slideContent, index) => (
                    <SwiperSlide key={slideContent} virtualIndex={index}>
                        {slideContent}
                    </SwiperSlide>
                ))}
            </Swiper>


        </>
    );
}
