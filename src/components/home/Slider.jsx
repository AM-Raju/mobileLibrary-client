import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import sliderInfo from "./sliderInfo";

const Slider = () => {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      {/* Slider */}
      {sliderInfo.map((singleSliderInfo) => (
        <SwiperSlide key={singleSliderInfo.bannerImg}>
          <div>
            <div className=" absolute bg-black h-full w-full bg-opacity-30">
              <h1 className="absolute top-32 left-96 text-7xl text-white font-bold">
                {singleSliderInfo.heading}
              </h1>
              <p className="absolute text-white top-60 left-96 w-2/5">{singleSliderInfo.text}</p>
            </div>
            <img src={singleSliderInfo.bannerImg} alt="" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
