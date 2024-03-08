"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CardServices from "./CardServices";
import { useEffect, useState } from "react";

export const Slider = () => {
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;

      if (windowWidth >= 1024) {
        setSlidesPerView(3);
      } else if (windowWidth >= 768) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Swiper
      modules={[Navigation, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={slidesPerView}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className="md:w-[40rem] w-[20rem] lg:w-[55rem] "
    >
      <SwiperSlide>
        <CardServices />
      </SwiperSlide>
      <SwiperSlide>
        <CardServices />
      </SwiperSlide>
      <SwiperSlide>
        <CardServices />
      </SwiperSlide>
      <SwiperSlide>
        <CardServices />
      </SwiperSlide>
      <SwiperSlide>
        <CardServices />
      </SwiperSlide>
      <SwiperSlide>
        <CardServices />
      </SwiperSlide>
      <SwiperSlide>
        <CardServices />
      </SwiperSlide>
    </Swiper>
  );
};
