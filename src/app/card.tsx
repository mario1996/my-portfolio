"use client";

import { Navigation, Pagination, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SlideWrapper from "./slideWrapper/layout";
import AboutMe from "./aboutMe";
import MyProfile from "./myProfile";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Card = () => {
  return (
    <Swiper
      modules={[Keyboard, Navigation, Pagination]}
      cssMode
      navigation
      pagination={{
        clickable: true,
      }}
      keyboard
      className="sliderGradient w-full sm:w-1/2 aspect-video shadow-2xl rounded-lg"
    >
      <SwiperSlide className="self-center">
        <SlideWrapper>
          <MyProfile />
        </SlideWrapper>
      </SwiperSlide>
      <SwiperSlide className="self-center">
        <SlideWrapper>
          <AboutMe />
        </SlideWrapper>
      </SwiperSlide>
    </Swiper>
  );
};

export default Card;
