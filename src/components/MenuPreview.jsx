import React from "react";

import m1 from "../assets/menuPreview/m1.jpg";
import m2 from "../assets/menuPreview/biryani.jpg";
import m5 from "../assets/menuPreview/m5.jpg";
import m4 from "../assets/menuPreview/m4.jpg";
import m3 from "../assets/menuPreview/m3.jpg";
import { useNavigate } from "react-router";

function MenuPreview() {
    const navigate=useNavigate()

  const menuItems = [
  {
    image: m1,
    name: "Paneer Butter Masala",
    category: "Paneer Khazana",
    price: "₹390",
  },
  {
    image: m2,
    name: " Biryani",
    category: "Basmati Khazana",
    price: "₹450",
  },
  {
    image: m5,
    name: "Tandoori Roti",
    category: "Breads",
    price: "₹30",
  },
  {
    image: m3,
    name: "Sizzling Brownie",
    category: "Ice Cream",
    price: "₹250",
  },
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
              {" "}Restaurent Menu
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