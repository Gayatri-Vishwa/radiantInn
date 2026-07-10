import React from "react";

import chefImg from "../assets/chef.jpg";


function ChefSection() {

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

      <div className="
      max-w-7xl
      mx-auto
      grid
      md:grid-cols-2
      gap-12
      items-center
      ">


        {/* Chef Image */}
        <div>

          <img
            src={chefImg}
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


          <p className="
          uppercase
          tracking-[4px]
          text-amber-300
          ">
            Meet Our Chef
          </p>



          <h2 className="
          text-4xl
          md:text-5xl
          font-bold
          mt-4
          leading-tight
          ">
            Crafting Flavors With
            <span className="text-amber-300">
              {" "}Passion
            </span>
          </h2>



          <p className="
          text-stone-300
          mt-6
          leading-relaxed
          ">
            Behind every unforgettable dish is a chef who believes
            in creativity, tradition, and perfection. Our culinary
            team combines authentic techniques with modern flavors
            to create a memorable dining experience.
          </p>



          {/* Chef Info */}
          <div className="
          grid
          grid-cols-2
          gap-6
          mt-8
          ">


            <div>
              <h3 className="
              text-2xl
              font-bold
              text-amber-300
              ">
                15+
              </h3>

              <p className="text-stone-400">
                Years Experience
              </p>
            </div>



            <div>
              <h3 className="
              text-2xl
              font-bold
              text-amber-300
              ">
                50+
              </h3>

              <p className="text-stone-400">
                Signature Recipes
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
            Meet The Team
          </button>


        </div>


      </div>


    </section>
  );
}

export default ChefSection;