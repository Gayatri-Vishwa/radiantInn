import React from "react";
import heroImage from "../assets/hero.webp";
import { FaWhatsapp } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className=" relative min-h-screen bg-cover bg-center pt-28 md:pt-0"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black/50 ">
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
          {/* Hero Content */}
          <div className="text-center text-white px-4 py-20">
            <p className="uppercase tracking-[3px] md:tracking-[6px] text-amber-300 mb-6  pt-8">
              Welcome to Radient Inn
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
              Where Luxury Meets
              <br />
              <span className="text-amber-300">Unforgettable Moments</span>
            </h1>

            <p className="mt-8 max-w-2xl mx-auto text-base md:text-lg text-stone-300 leading-8">
              Luxury Stay. Exceptional Comfort. Experience elegance and
              hospitality at Radient Inn.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
              <a
                href="/#room"
                className="w-full sm:w-auto text-center border border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-white hover:text-black transition"
              >
                Explore Rooms
              </a>

              <a
                href="https://wa.me/917599932543?text=Hello%20Radient%20Inn,%20I%20would%20like%20to%20book%20a%20room."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-center bg-amber-300 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-amber-200 transition"
              >
                <FaWhatsapp className="text-xl" />
                <span>Book Now</span>
              </a>

              {/* <a
                href="tel:+917599932543"
                className="bg-amber-300 text-black px-8 py-4 rounded-full font-semibold hover:bg-amber-200 transition"
              >
                Book Now
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
