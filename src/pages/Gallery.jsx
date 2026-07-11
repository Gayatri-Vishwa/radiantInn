import React from "react";

import g1 from "../assets/gallery/g1.avif";
import g2 from "../assets/gallery/g2.webp";
import g3 from "../assets/gallery/g3.jpg";
import g4 from "../assets/gallery/g4.jpg";
import g5 from "../assets/gallery/g5.jpg";
import g6 from "../assets/gallery/g6.jpg";
import g7 from "../assets/gallery/g7.jpg";
import g8 from "../assets/gallery/g8.jpg";
function Gallery() {

  const images = [
    { id: 1, image: g1, title: "Luxury Dining" },
    { id: 2, image: g2, title: "Signature Dishes" },
    { id: 3, image: g3, title: "Restaurant Interior" },
    { id: 4, image: g4, title: "Family Moments" },
    { id: 5, image: g5, title: "Chef Specials" },
    { id: 6, image: g6, title: "Fine Dining" },
    { id: 7, image: g7, title: "Delicious Desserts" },
    { id: 8, image: g8, title: "Palasa Experience" },
  ];

  return (
    <section
      className="
      min-h-screen
      bg-[#1c1712]
      text-white
      py-20
      px-4
      "
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">

          <p className="uppercase tracking-[4px] text-amber-300">
            Our Gallery
          </p>

          <h1 className="text-5xl font-bold mt-4">
            Capture The
            <span className="text-amber-300"> Moments</span>
          </h1>

          <p className="text-stone-400 mt-5 max-w-2xl mx-auto">
            Explore the beautiful ambience, delicious food,
            and unforgettable moments at Palasa.
          </p>

        </div>

        {/* Gallery */}
        <div
          className="
          grid
          sm:grid-cols-2
          lg:grid-cols-4
          gap-6
          "
        >
          {images.map((item) => (

            <div
              key={item.id}
              className="
              group
              overflow-hidden
              rounded-2xl
              relative
              cursor-pointer
              "
            >

              <img
                src={item.image}
                alt={item.title}
                className="
                w-full
                h-80
                object-cover
                group-hover:scale-110
                transition
                duration-700
                "
              />

              {/* Overlay */}
              <div
                className="
                absolute
                inset-0
                bg-black/50
                opacity-0
                group-hover:opacity-100
                transition
                duration-500
                flex
                items-end
                p-6
                "
              >
                <h3 className="text-xl font-semibold">
                  {item.title}
                </h3>
              </div>

            </div>

          ))}
        </div>

      </div>
    </section>
  );
}

export default Gallery;