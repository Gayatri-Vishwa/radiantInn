import React from "react";
import aboutImage from "../assets/about.jpg";


function About() {
  return (
    <section
      id="about"
      className="py-20 bg-[#1c1712]  text-white px-4 scroll-mt-24"
    >
       

  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <div>
          <img
            src={aboutImage}
            alt="Palasa Restaurant"
            className="
            w-full
            h-[450px]
            object-cover
            rounded-2xl
            shadow-xl
            "
          />
        </div>


        {/* Content */}
        <div>

          <p className="
          uppercase
          tracking-[4px]
          text-amber-300
          ">
            Our Story
          </p>


          <h2 className="
          text-4xl
          md:text-5xl
          font-bold
          mt-4
          leading-tight
          ">
            Where Flavors Meet
            <span className="text-amber-300">
              {" "}Memories
            </span>
          </h2>


          <p className="
          text-stone-300
          mt-6
          leading-relaxed
          ">
            At Palasa, every dish tells a story. We combine authentic flavors,
            premium ingredients, and elegant hospitality to create moments
            that stay with you forever.
          </p>


          <div className="
          grid
          grid-cols-2
          gap-5
          mt-8
          ">

            <div>
              <h3 className="text-2xl font-bold text-amber-300">
                10+
              </h3>
              <p className="text-stone-400">
                Years Experience
              </p>
            </div>


            <div>
              <h3 className="text-2xl font-bold text-amber-300">
                500+
              </h3>
              <p className="text-stone-400">
                Happy Guests
              </p>
            </div>


          </div>


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
            Discover More
          </button>


        </div>

      </div>
    
    </section>
  );
}

export default About;





