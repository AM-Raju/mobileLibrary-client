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
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper  h-52 sm:h-full lg:h-fit">
      {/* Slider */}
      {sliderInfo.map((singleSliderInfo) => (
        <SwiperSlide key={singleSliderInfo.bannerImg}>
          <div>
            <div className=" absolute bg-black h-full w-full bg-opacity-30">
              {/* heading */}
              <div className="absolute w-full  top-20 sm:top-8 md:top-10 lg:top-16 xl:top-28 2xl:top-32 3xl:top-40 sm:left-16 md:left-20 lg:left-36 xl:left-48 2xl:left-80 3xl:left-1/4">
                <h1 className="w-4/5 sm:w-full mx-auto text-center sm:text-left text-3xl sm:text-4xl lg:text-6xl 2xl:text-7xl text-white font-bold">
                  {singleSliderInfo.heading}
                </h1>
              </div>
              {/* paragraph */}
              <p className="absolute hidden sm:block text-white top-20 md:top-24 lg:top-36 xl:top-52 2xl:top-60 3xl:top-72 left-16 md:left-20 lg:left-36 xl:left-48 2xl:left-80 3xl:left-1/4 w-4/5 lg:w-3/5 3xl:w-2/5">
                {singleSliderInfo.text}
              </p>
              {/* <p className="absolute text-white top-60 left-96 w-2/5">{singleSliderInfo.text}</p> */}
            </div>
            <img className="h-52 sm:h-full w-screen" src={singleSliderInfo.bannerImg} alt="" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
