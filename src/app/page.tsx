"use client";

import { Navigation, Pagination, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SlideWrapper from "./slideWrapper/layout";
import AboutMe from "./aboutMe";
import MyProfile from "./myProfile";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Home() {
  return (
    <main className="h-screen content-center">
      <Swiper
        modules={[Keyboard, Navigation, Pagination]}
        cssMode
        navigation
        pagination={{
          clickable: true,
        }}
        keyboard
        className="bg-slate-300 w-full sm:w-1/2 aspect-video shadow-2xl"
      >
        <SwiperSlide className="content-center">
          <SlideWrapper>
            <MyProfile />
          </SlideWrapper>
        </SwiperSlide>
        <SwiperSlide className="content-center">
          <SlideWrapper>
            <AboutMe />
          </SlideWrapper>
        </SwiperSlide>
      </Swiper>
    </main>
  );
}
