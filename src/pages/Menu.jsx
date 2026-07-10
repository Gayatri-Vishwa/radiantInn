import React from "react";


function Menu() {


  const categories = [
    {
      title: "Starters",
      items: [
        {
          name: "Paneer Tikka",
          description: "Grilled cottage cheese with authentic spices",
          price: "₹299"
        },
        {
          name: "Spring Roll",
          description: "Crispy rolls filled with fresh vegetables",
          price: "₹199"
        },
        {
          name: "Tandoori Mushroom",
          description: "Smoky grilled mushrooms with herbs",
          price: "₹249"
        }
      ]
    },


    {
      title: "Main Course",
      items: [
        {
          name: "Royal Biryani",
          description: "Aromatic rice cooked with premium spices",
          price: "₹499"
        },
        {
          name: "Butter Chicken",
          description: "Creamy traditional chicken curry",
          price: "₹599"
        },
        {
          name: "Dal Makhani",
          description: "Slow cooked black lentils with rich flavors",
          price: "₹349"
        }
      ]
    },


    {
      title: "Desserts",
      items: [
        {
          name: "Chocolate Cake",
          description: "Rich chocolate dessert",
          price: "₹249"
        },
        {
          name: "Gulab Jamun",
          description: "Classic Indian sweet",
          price: "₹149"
        }
      ]
    },


    {
      title: "Drinks",
      items: [
        {
          name: "Signature Mocktail",
          description: "Refreshing handcrafted drink",
          price: "₹199"
        },
        {
          name: "Fresh Juice",
          description: "Fresh seasonal fruit juice",
          price: "₹149"
        }
      ]
    }

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

      <div className="max-w-5xl mx-auto">


        {/* Heading */}

        <div className="text-center mb-12">

          <p className="
          uppercase
          tracking-[4px]
          text-amber-300
          ">
            Our Menu
          </p>


          <h1 className="
          text-5xl
          font-bold
          mt-4
          ">
            Taste The
            <span className="text-amber-300">
              {" "}Difference
            </span>
          </h1>


        </div>



        {
          categories.map((category,index)=>(

            <div
            key={index}
            className="mb-12"
            >


              <h2 className="
              text-3xl
              font-bold
              text-amber-300
              mb-6
              ">
                {category.title}
              </h2>



              <div className="
              space-y-5
              ">


              {
                category.items.map((item,i)=>(

                  <div
                  key={i}
                  className="
                  flex
                  justify-between
                  gap-5
                  border-b
                  border-stone-700
                  pb-4
                  "
                  >


                    <div>

                      <h3 className="
                      text-xl
                      font-semibold
                      ">
                        {item.name}
                      </h3>


                      <p className="
                      text-stone-400
                      mt-1
                      ">
                        {item.description}
                      </p>


                    </div>


                    <p className="
                    text-amber-300
                    font-bold
                    whitespace-nowrap
                    ">
                      {item.price}
                    </p>


                  </div>

                ))
              }


              </div>


            </div>

          ))
        }


      </div>


    </section>

  );
}


export default Menu;