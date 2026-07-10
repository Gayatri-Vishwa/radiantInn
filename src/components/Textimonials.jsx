import React from "react";


function Testimonials() {


  const reviews = [
    {
      name: "Rahul Sharma",
      review:
        "Amazing food and beautiful ambience. Every dish had a unique taste.",
      rating: 5
    },
    {
      name: "Priya Verma",
      review:
        "A perfect place for family dinners. The service was excellent.",
      rating: 5
    },
    {
      name: "Arjun Mehta",
      review:
        "Loved the presentation and premium dining experience at Palasa.",
      rating: 4
    }
  ];


  return (
    <section
      id="testimonials"
      className="
      py-20
      bg-[#1c1712]
      text-white
      px-4
      "
    >

      <div className="max-w-7xl mx-auto">


        {/* Heading */}
        <div className="text-center">


          <p className="
          uppercase
          tracking-[4px]
          text-amber-300
          ">
            Testimonials
          </p>


          <h2 className="
          text-4xl
          md:text-5xl
          font-bold
          mt-4
          ">
            What Our
            <span className="text-amber-300">
              {" "}Guests Say
            </span>
          </h2>


        </div>



        {/* Reviews */}
        <div
        className="
        grid
        md:grid-cols-3
        gap-8
        mt-12
        "
        >

          {
            reviews.map((item,index)=>(

              <div
              key={index}
              className="
              bg-[#2a231c]
              p-8
              rounded-2xl
              shadow-xl
              "
              >


                {/* Stars */}
                <div className="
                text-amber-300
                text-xl
                ">
                  {
                    "★".repeat(item.rating)
                  }
                </div>



                <p className="
                text-stone-300
                mt-5
                leading-relaxed
                ">
                  "{item.review}"
                </p>



                <h3 className="
                font-bold
                text-lg
                mt-6
                ">
                  {item.name}
                </h3>


              </div>

            ))
          }


        </div>


      </div>


    </section>
  );
}


export default Testimonials;