// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";

// import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/navigation";

// import Card from "./Card";

// import i3 from "../assets/rooms/room1.webp";
// import i2 from "../assets/rooms/room2.jpg";
// import i1 from "../assets/rooms/room3.avif";



// function Rooms() {

// const rooms = [
//   {
//     image: i1,
//     name: "Deluxe Room",
//     description: "A cozy room with a king-size bed, free Wi-Fi, and air conditioning.",
//     price: "₹2,499 / Night",
//   },
//   {
//     image: i2,
//     name: "Executive Room",
//     description: "Spacious room featuring a work desk, smart TV, and complimentary breakfast.",
//     price: "₹3,499 / Night",
//   },
//   {
//     image: i3,
//     name: "Family Suite",
//     description: "Perfect for families with extra space, premium interiors, and room service.",
//     price: "₹5,499 / Night",
//   },
// ];

//   return (
//     <section
//       id="room"
//       className="py-20 bg-[#1c1712] text-white px-4"
//     >

//       <div className="max-w-7xl mx-auto">

//         {/* Heading */}
//         <div className="text-center">

//          <p className="uppercase tracking-[4px] text-amber-300">
//   Our Rooms
// </p>

// <h2 className="text-4xl md:text-5xl font-bold mt-4">
//   Featured <span className="text-amber-300">Rooms</span>
// </h2>

// <p className="text-stone-300 mt-4 max-w-2xl mx-auto">
//   Choose from our thoughtfully designed rooms, offering comfort, elegance, and modern amenities for a relaxing stay.
// </p>

//         </div>
// <Swiper
//   modules={[Autoplay, Navigation]}
//   spaceBetween={25}
//   slidesPerView={3}
//   loop={true}
//   navigation={true}
//   speed={1200}
//   autoplay={{
//     delay: 2500,
//     disableOnInteraction: false,
//   }}
//   breakpoints={{
//     320: {
//       slidesPerView: 1,
//     },
//     640: {
//       slidesPerView: 2,
//     },
//     1024: {
//       slidesPerView: 3,
//     },
//   }}
// >

//   {
//  rooms.map((dish, index)=>(
              
//                  <SwiperSlide key={index}>
//                    <div
//                key={index}
//               className="
//               mt-8
//               bg-[#2a231c]
//              rounded-2xl
//              overflow-hidden
//               shadow-xl
//               group"
//               >

//                 <div className="overflow-hidden">

//                   <img
//                   src={dish.image}
//                   alt={dish.name}
//                   className="
//                   w-full
//                   h-72
//                   object-cover
//                   group-hover:scale-110
//                   transition
//                   duration-500
//                   "
//                   />
//                 </div>


//                 <div className="p-6">

//                   <h3 className="
//                   text-2xl
//                   font-bold
//                   ">
//                     {dish.name}
//                   </h3>


//                   <p className="
//                   text-stone-300
//                   mt-3
//                   ">
//                     {dish.description}
//                   </p>


//                   <p className="
//                   text-amber-300
//                   font-bold
//                   mt-4
//                   ">
//                     {dish.price}
//                   </p>

//                 </div>

//               </div>
//                 </SwiperSlide>
//             ))
  
          
// }
          
//         {/* // </div> */}

  

// </Swiper>


// </div>
//     </section>
//   );
// }

// <<<<<<< HEAD:src/components/SignatureDishes.jsx
// export default SignatureDishes;
// =======
// export default Rooms;
// >>>>>>> 11cc002 (almost):src/components/Rooms.jsx




import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

// import i1 from "../assets/signatureDishes/i1.png";
// import i2 from "../assets/signatureDishes/i2.png";
// import i3 from "../assets/signatureDishes/i3.png";
import Card from "./Card";

import i3 from "../assets/rooms/room1.webp";
import i2 from "../assets/rooms/room2.jpg";
import i1 from "../assets/rooms/room3.avif";



function Rooms() {

const rooms = [
  {
    image: i1,
    name: "Deluxe Room",
    description: "A cozy room with a king-size bed, free Wi-Fi, and air conditioning.",
    price: "₹2,499 / Night",
  },
  {
    image: i2,
    name: "Executive Room",
    description: "Spacious room featuring a work desk, smart TV, and complimentary breakfast.",
    price: "₹3,499 / Night",
  },
  {
    image: i3,
    name: "Family Suite",
    description: "Perfect for families with extra space, premium interiors, and room service.",
    price: "₹5,499 / Night",
  },
];

  return (
    <section
      id="room"
      className="py-20 bg-[#1c1712] text-white px-4"
    >

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center">

         <p className="uppercase tracking-[4px] text-amber-300">
  Our Rooms
</p>

<h2 className="text-4xl md:text-5xl font-bold mt-4">
  Featured <span className="text-amber-300">Rooms</span>
</h2>

<p className="text-stone-300 mt-4 max-w-2xl mx-auto">
  Choose from our thoughtfully designed rooms, offering comfort, elegance, and modern amenities for a relaxing stay.
</p>

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
 rooms.map((dish, index)=>(
              
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


export default Rooms;
