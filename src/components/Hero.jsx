import React from "react";
import heroImage from "../assets/images/heroImage.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="scroll-mt-24 relative min-h-screen bg-cover bg-center pt-24 md:pt-0"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black/50 ">
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
          {/* Hero Content */}
          <div className="text-center text-white px-4 py-20">
            <p className="uppercase tracking-[3px] md:tracking-[6px] text-amber-300 mb-6  pt-8">
              Welcome to PALASA
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
              Where Luxury Meets
              <br />
              <span className="text-amber-300">Unforgettable Moments</span>
            </h1>

            <p className="mt-8 max-w-2xl mx-auto text-base md:text-lg text-stone-300 leading-8">
              Discover a premium destination for exquisite dining, grand
              celebrations, and memorable stays crafted with elegance.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
              <a href="/#services"
                 className="border border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition">
                Explore Services
             
              </a>
              <a
                href="tel:+917599932543"
                className="bg-amber-300 text-black px-8 py-4 rounded-full font-semibold hover:bg-amber-200 transition"
              >
                Call Now...
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
