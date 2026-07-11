import React from "react";
// import aboutImage from "../assets/about.jpg";
import aboutImage from "../assets/amenties/radient.avif";


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
            About Radient Inn
          </p>


        <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
  Where Comfort Meets
  <span className="text-amber-300"> Elegance</span>
</h2>


        <p className="text-stone-300 mt-6 leading-relaxed">
  Welcome to Radient Inn, where exceptional hospitality meets modern comfort.
  From relaxing stays and delicious dining to elegant banquet venues, we are
  dedicated to creating memorable experiences for every guest. Whether you're
  visiting for business, leisure, or a special celebration, our team is
  committed to making your stay truly unforgettable.
</p>

<div className="grid grid-cols-2 gap-5 mt-8">
  <div>
    <h3 className="text-2xl font-bold text-amber-300">10+</h3>
    <p className="text-stone-400">Years of Excellence</p>
  </div>

  <div>
    <h3 className="text-2xl font-bold text-amber-300">5000+</h3>
    <p className="text-stone-400">Happy Guests</p>
  </div>

  <div>
    <h3 className="text-2xl font-bold text-amber-300">200+</h3>
    <p className="text-stone-400">Events Hosted</p>
  </div>

  <div>
    <h3 className="text-2xl font-bold text-amber-300">24/7</h3>
    <p className="text-stone-400">Guest Support</p>
  </div>
</div>

        <a href="#gallery">
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
        </a>


        </div>

      </div>
    
    </section>
  );
}

export default About;





