import React from "react";

import img from "../assets/amenties/amenties.avif";
import { FaBed, FaUtensils, FaWifi, FaGlassCheers } from "react-icons/fa";

function Amenities() {
  return (
    <section
      id="chef"
      className="
      py-20
      bg-[#1c1712]
      text-white
      px-4
      "
    >
      <div
        className="
      max-w-7xl
      mx-auto
      grid
      md:grid-cols-2
      gap-12
      items-center
      "
      >
        {/* Chef Image */}
        <div>
          <img
            src={img}
            alt="Head Chef"
            className="
            w-full
            h-[500px]
            object-cover
            rounded-2xl
            shadow-xl
            "
          />
        </div>

        {/* Content */}
        <div>
          <p
            className="
          uppercase
          tracking-[4px]
          text-amber-300
          "
          >
            Our Amenities
          </p>

          <h2
            className="
          text-4xl
          md:text-5xl
          font-bold
          mt-4
          leading-tight
          "
          >
            Comfort & Convenience
            <span className="text-amber-300"> for Every Guest</span>
          </h2>

          <p
            className="
          text-stone-300
          mt-6
          leading-relaxed
          "
          >
            Enjoy thoughtfully designed amenities that ensure a relaxing,
            comfortable, and memorable stay at Radient Inn. From modern
            accommodations to exceptional hospitality, everything is crafted
            with your comfort in mind.{" "}
          </p>

        <div className="grid grid-cols-2 gap-6 mt-8">

  <div className="flex items-start gap-3">
    <FaBed className="text-amber-300 text-3xl mt-1" />
    <div>
      <h3 className="text-xl font-bold">Luxury Rooms</h3>
      <p className="text-stone-400">
        Spacious & Comfortable
      </p>
    </div>
  </div>

  <div className="flex items-start gap-3">
    <FaUtensils className="text-amber-300 text-3xl mt-1" />
    <div>
      <h3 className="text-xl font-bold">Restaurant</h3>
      <p className="text-stone-400">
        Multi-Cuisine Dining
      </p>
    </div>
  </div>

  <div className="flex items-start gap-3">
    <FaGlassCheers className="text-amber-300 text-3xl mt-1" />
    <div>
      <h3 className="text-xl font-bold">Banquet Hall</h3>
      <p className="text-stone-400">
        Weddings & Events
      </p>
    </div>
  </div>

  <div className="flex items-start gap-3">
    <FaWifi className="text-amber-300 text-3xl mt-1" />
    <div>
      <h3 className="text-xl font-bold">Free Wi-Fi</h3>
      <p className="text-stone-400">
        High-Speed Internet
      </p>
    </div>
  </div>

</div>
<a href="#Offerings">
  
          <button
            className="
          mt-8
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
            View Facilities
          </button>
</a>
        </div>
      </div>
    </section>
  );
}

export default Amenities;
