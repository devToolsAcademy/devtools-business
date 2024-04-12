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
  const services = [
    {
      image: "/images/diseñoPaginasWeb.jpeg",
      title: "DISEÑO DE PÁGINAS WEB",
      description: "Transformamos ideas en experiencias digitales cautivadora en desarrollo personalizados para llevar tu presencia al siguiente nivel.",
      action: ""
    },
    {
      image: "/images/desarrolloPaginasWeb.jpeg",
      title: "DESARROLLO DE PÁGINAS WEB",
      description: "Potenciamos la presencia digital de tu empresa con soluciones web personalizadas a tu medida, diseñadas para impulsar tu negocio hacia el éxito.",
      action: ""
    },
    {
      image: "/images/marketingDigital.jpeg",
      title: "ASESORÍAS MARKETING DIGITAL",
      description: "Ayudamos a impulsar tu marca hacia el éxito digital en redes sociales hasta campañas publicitarias, maximizamos tu alcance y crecimiento en línea.",
      action: ""
    }
  ]
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
      className="w-[90%] xl:w-[70%] 2xl:w-[60%] gap-2"
    >
      {services?.map((service, index) => (
        <SwiperSlide key={index}>
          <CardServices title={service.title} description={service.description} image={service.image} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
