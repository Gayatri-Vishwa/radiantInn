import React from "react";

import i3 from "../assets/SignatureDishes/i4.png";
import i4 from "../assets/SignatureDishes/i5.png";
import i5 from "../assets/SignatureDishes/i6.png";
import i6 from "../assets/SignatureDishes/i7.png";
import { useNavigate } from "react-router";

function MenuPreview() {
    const navigate=useNavigate()

  const menuItems = [
    {
      image: i3,
      name: "Paneer Tikka",
      category: "Starters",
      price: "₹299"
    },
    {
      image: i4,
      name: "Royal Biryani",
      category: "Main Course",
      price: "₹499"
    },
    {
      image: i5,
      name: "Chocolate Dessert",
      category: "Desserts",
      price: "₹249"
    },
    {
      image: i6,
      name: "Signature Mocktail",
      category: "Drinks",
      price: "₹199"
    }
  ];


  return (
    <section
      id="menu"
      className="
      py-20
      bg-[#241f1a]
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
            Our Menu
          </p>


          <h2 className="
          text-4xl
          md:text-5xl
          font-bold
          mt-4
          ">
            Explore Our 
            <span className="text-amber-300">
              {" "}Delicious Menu
            </span>
          </h2>


          <p className="
          text-stone-300
          mt-4
          max-w-2xl
          mx-auto
          ">
            Discover carefully crafted dishes prepared with
            authentic flavors and premium ingredients.
          </p>

        </div>



        {/* Menu Cards */}
        <div className="
        grid
        sm:grid-cols-2
        lg:grid-cols-4
        gap-6
        mt-12
        ">


          {
            menuItems.map((item,index)=>(

              <div
              key={index}
              className="
              bg-[#2a231c]
              rounded-xl
              overflow-hidden
              group
              "
              >

                <div className="overflow-hidden">

                  <img
                  src={item.image}
                  alt={item.name}
                  className="
                  w-full
                  h-56
                  object-cover
                  group-hover:scale-110
                  transition
                  duration-500
                  "
                  />

                </div>



                <div className="p-5">


                  <p className="
                  text-amber-300
                  text-sm
                  ">
                    {item.category}
                  </p>


                  <h3 className="
                  text-xl
                  font-bold
                  mt-2
                  ">
                    {item.name}
                  </h3>


                  <p className="
                  text-amber-300
                  font-semibold
                  mt-3
                  ">
                    {item.price}
                  </p>


                </div>


              </div>

            ))
          }


        </div>



        {/* Button */}
        <div className="text-center mt-12">

          <button
         onClick={()=>navigate('/fullmenu')}
          className="
          px-8
          py-3
          rounded-full
          bg-amber-300
          text-black
          font-semibold
          hover:bg-amber-400
          transition
          "
          >
            View Full Menu
          </button>

        </div>


      </div>

    </section>
  );
}

export default MenuPreview;