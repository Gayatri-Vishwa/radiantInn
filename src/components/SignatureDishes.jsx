import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import i1 from "../assets/SignatureDishes/i1.png";
import i2 from "../assets/SignatureDishes/i2.png";
import i3 from "../assets/SignatureDishes/i3.png";
import Card from "./Card";

function SignatureDishes() {

  const dishes = [
    {
      image: i1,
      name: "Royal Biryani",
      description: "Aromatic rice with authentic spices and premium ingredients.",
      price: "₹499"
    },
    {
      image:i2,
      name: "Chef Special Curry",
      description: "Traditional flavors crafted with a modern touch.",
      price: "₹399"
    },
    {
      image: i3,
      name: "Luxury Dessert",
      description: "A perfect sweet ending to your dining experience.",
      price: "₹299"
    }
  ];


  return (
    <section
      id="dishes"
      className="py-20 bg-[#1c1712] text-white px-4"
    >

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center">

          <p className="
          uppercase
          tracking-[4px]
          text-amber-300
          ">
            Our Specialties
          </p>

          <h2 className="
          text-4xl
          md:text-5xl
          font-bold
          mt-4
          ">
            Signature <span className="text-amber-300">Dishes</span>
          </h2>

        </div>
<Swiper
  modules={[Autoplay, Navigation]}
  spaceBetween={25}
  slidesPerView={3}
  loop={true}
  navigation={true}
  speed={1200}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
  breakpoints={{
    320: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  }}
>

  {
 dishes.map((dish, index)=>(
              
                 <SwiperSlide key={index}>
                   <div
               key={index}
              className="
              mt-8
              bg-[#2a231c]
             rounded-2xl
             overflow-hidden
              shadow-xl
              group"
              >

                <div className="overflow-hidden">

                  <img
                  src={dish.image}
                  alt={dish.name}
                  className="
                  w-full
                  h-72
                  object-cover
                  group-hover:scale-110
                  transition
                  duration-500
                  "
                  />
                </div>


                <div className="p-6">

                  <h3 className="
                  text-2xl
                  font-bold
                  ">
                    {dish.name}
                  </h3>


                  <p className="
                  text-stone-300
                  mt-3
                  ">
                    {dish.description}
                  </p>


                  <p className="
                  text-amber-300
                  font-bold
                  mt-4
                  ">
                    {dish.price}
                  </p>

                </div>

              </div>
                </SwiperSlide>
            ))
  
          
}
          
        {/* // </div> */}

  

</Swiper>


</div>
    </section>
  );
}

export default SignatureDishes;