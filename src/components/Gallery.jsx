import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import g1 from "../assets/gallery/g1.jpg";
import g2 from "../assets/gallery/g2.jpg";
import g3 from "../assets/gallery/g3.jpg";
import g4 from "../assets/gallery/g4.jpg";
import g5 from "../assets/gallery/g5.jpg";
import g6 from "../assets/gallery/g6.jpg";
import g7 from "../assets/gallery/g7.jpg";
import { useNavigate } from "react-router";


function Gallery() {
const navigate=useNavigate()

  const images = [
    g1,
    g2,
    g3,
    g4,
    g5,
    g6,
    g7
  ];


  return (
    <section
      id="gallery"
      className="
      py-20
      bg-[#241f1a]
      text-white
      px-4
      "
    >
      <div className="max-w-7xl mx-auto">


        {/* Heading */}
        <div className="text-center">


          <p className="
          uppercase
          tracking-[4px]
          text-amber-300
          ">
            Our Gallery
          </p>


          <h2 className="
          text-4xl
          md:text-5xl
          font-bold
          mt-4
          ">
            Moments From
            <span className="text-amber-300">
              {" "}Palasa
            </span>
          </h2>


          <p className="
          text-stone-300
          mt-4
          max-w-2xl
          mx-auto
          ">
            Explore our food, ambience and unforgettable dining moments.
          </p>


        </div>

        {/* Gallery Grid */}
      


<Swiper
  effect={"coverflow"}
  grabCursor={true}
  centeredSlides={true}
  loop={true}
  slidesPerView={"auto"}
  modules={[EffectCoverflow, Navigation, Autoplay]}
  navigation
  autoplay={{
    delay: 2500,
    disableOnInteraction: true,
  }}
  coverflowEffect={{
    rotate: 0,
    stretch: 0,
    depth: 150,
    modifier: 2,
    slideShadows: false,
    scale: 0.9,
  }}
>

  {
    images.map((image,index)=>(
      <SwiperSlide
        key={index}
        className="!w-[340px] mt-8"
      >

        <img
          src={image}
          className="
          w-full
          h-[420px]
          rounded-2xl
          object-cover
          "
        />

      </SwiperSlide>
    ))
  }

</Swiper>

      </div>
<div className="text-center md:mt-12 ">
  <button
    onClick={() => navigate("/gallery")}
    className="
    px-8
    py-3
    bg-amber-300
    text-black
    rounded-full
    font-semibold
    hover:bg-amber-400
    transition
    "
  >
    View Full Gallery
  </button>
</div>

    </section>
  );
}


export default Gallery;