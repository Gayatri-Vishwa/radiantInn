import React, { useRef } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

import s1 from "../assets/offerings/room1.webp";
import s2 from "../assets/offerings/dningg.jpg";
import s3 from "../assets/offerings/eventtt.jpg";
import s4 from "../assets/offerings/hospitality.jpg";

import Card from "../components/Card";

function Offerings() {
  const sliderRef = useRef();

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -320 + 24,
      //  left: firstCard.offsetWidth + 24,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 320,
      behavior: "smooth",
    });
  };
  return (
    <section
      id="Offerings"
      className="py-20 scroll-mt-24 bg-stone-950 text-white pt-8 px-4"
    >
      <div className="text-center mb-12">
        <p className="uppercase tracking-[4px] text-amber-300">What We Offer</p>

        <h2 className="text-4xl md:text-5xl font-bold mt-4">
          Exceptional Hospitality,{" "}
          <span className="text-amber-300">Dining & Events</span>
        </h2>

        <p className="text-stone-300 mt-4 max-w-2xl mx-auto">
          Experience the perfect blend of comfortable stays, exceptional dining,
          and elegant event spaces, all designed to make every visit memorable.
        </p>
      </div>

      {/* { for scrolling} */}
      <div
        ref={sliderRef}
        className="
flex
overflow-x-auto
gap-6
px-4
scroll-smooth
snap-x
snap-mandatory
no-scrollbar
lg:grid
lg:grid-cols-4
lg:overflow-visible
"
      >
        {/* // className=" px-9 md:px-0 flex overflow-x-auto gap-9 snap-x snap-mandatory lg:grid lg:grid-cols-4  lg:overflow-visible" */}

        <Card
          image={s1}
          title="Luxury Stay"
          description="Relax in well-appointed rooms designed for comfort, convenience, and a peaceful stay."
        />

        <Card
          image={s2}
          title="Fine Dining"
          description="Enjoy delicious multi-cuisine dishes prepared with fresh ingredients and authentic flavors."
        />

        <Card
          image={s3}
          title="Banquet & Events"
          description="Host weddings, parties, and corporate events in our elegant banquet spaces."
        />

        <Card
          image={s4}
          title="Premium Hospitality"
          description="Experience warm hospitality, attentive service, and memorable moments throughout your visit."
        />
      </div>
      <div className="sm:hidden flex items-center justify-center gap-4">
        <button
          onClick={scrollLeft}
          className="
w-12
h-12
rounded-full
border
border-stone-700
backdrop-blur-md
bg-white/5
text-white
hover:bg-amber-300
hover:text-black
hover:border-amber-300
transition-all
duration-300
"
        >
          <IoChevronBack size={22} />
        </button>

        <button
          className="
w-12
h-12
rounded-full
border
border-stone-700
backdrop-blur-md
bg-white/5
text-white
hover:bg-amber-300
hover:text-black
hover:border-amber-300
transition-all
duration-300
"
          onClick={scrollRight}
        >
          <IoChevronForward size={22} />
        </button>
      </div>
    </section>
  );
}

export default Offerings;
