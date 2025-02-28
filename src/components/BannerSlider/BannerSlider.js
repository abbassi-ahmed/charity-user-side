import { bannerSlider } from "@/data/bannerSlider";
import React from "react";
import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SingleBanner from "./SingleBanner";
import { useRouter } from "next/router";

SwiperCore.use([EffectFade, Navigation, Autoplay]);

const options = {
  slidesPerView: 1,
  loop: true,
  effect: "fade",
  navigation: {
    nextEl: "#main-slider__swiper-button-next",
    prevEl: "#main-slider__swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
  },
};

const banners1 = bannerSlider.slice(0, 2);
const banners2 = bannerSlider.slice(2, 4);
const banners3 = bannerSlider.slice(4, 6);

const BannerSlider = ({
  className = "",
  isBannerTwo = false,
  isBannerThree = false,
  slides = [],
}) => {
  const router = useRouter();
  if (slides.length === 0 || !slides || !Array.isArray(slides)) return null;
  return (
    <section className={`banner-slider ${className}`}>
      <Swiper {...options}>
        <div className="swiper-wrapper">
          {slides.map((singleSlide) => (
            <SwiperSlide key={singleSlide.id}>
              <SingleBanner
                singleSlide={singleSlide}
                isBannerTwo={isBannerTwo}
                isBannerThree={isBannerThree}
              />
            </SwiperSlide>
          ))}
        </div>
        <div>
          <span
            className="prev slick-arrow"
            id="main-slider__swiper-button-prev"
          >
            <i className="flaticon-back"></i>
          </span>
          <div
            className="next slick-arrow"
            id="main-slider__swiper-button-next"
          >
            <i className="flaticon-next"></i>
          </div>
        </div>
      </Swiper>
    </section>
  );
};

export default BannerSlider;
