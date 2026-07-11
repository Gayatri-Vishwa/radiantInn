import React from "react";


function Menu() {


 const categories = [
  {
    title: "Main Course (Veg)",
    items: [
      { name: "Veg Kheema Kasturi", price: "₹350" },
      { name: "Veg Kofta", price: "₹350" },
      { name: "Baby Corn Masala", price: "₹350" },
      { name: "Mushroom Masala", price: "₹390" },
      { name: "Malai Kofta", price: "₹390" },
      { name: "Methi Mutter Malai", price: "₹310" },
      { name: "Veg Angara", price: "₹350" },
    ],
  },

  {
    title: "Paneer Khazana",
    items: [
      { name: "Paneer Lachhedar", price: "₹370" },
      { name: "Paneer Do Pyaza", price: "₹370" },
      { name: "Paneer Kadai", price: "₹370" },
      { name: "Paneer Butter Masala", price: "₹390" },
      { name: "Paneer Tikka Masala", price: "₹390" },
      { name: "Paneer Angara", price: "₹390" },
      { name: "Paneer Mumtaz", price: "₹390" },
    ],
  },

  {
    title: "Dal-E-Khass",
    items: [
      { name: "Dal Tadka", price: "₹210" },
      { name: "Dal Butter Fry", price: "₹225" },
      { name: "Dal Makhani", price: "₹280" },
    ],
  },

  {
    title: "Main Course (Non Veg)",
    items: [
      { name: "Chicken Tikka Masala", price: "₹490" },
      { name: "Butter Chicken (Half)", price: "₹490" },
      { name: "Butter Chicken (Full)", price: "₹950" },
      { name: "Chicken Angara", price: "₹550" },
      { name: "Chicken Muglai", price: "₹550" },
      { name: "Chicken Patiyala", price: "₹550" },
      { name: "Chicken Musallam", price: "₹550" },
      { name: "Chicken Handi", price: "₹475" },
      { name: "Dhaba Chicken", price: "₹475" },
      { name: "Mutton Handi", price: "₹530" },
      { name: "Mutton Rogan Josh", price: "₹530" },
      { name: "Mutton Dhaba", price: "₹530" },
      { name: "Fish Masala", price: "₹450" },
    ],
  },

  {
    title: "Breads",
    items: [
      { name: "Tandoori Roti", price: "₹30" },
      { name: "Butter Roti", price: "₹40" },
      { name: "Lachha Paratha", price: "₹70" },
      { name: "Butter Naan", price: "₹70" },
      { name: "Plain Naan", price: "₹60" },
      { name: "Garlic Naan", price: "₹90" },
      { name: "Kulcha", price: "₹70" },
      { name: "Stuffed Kulcha", price: "₹130" },
    ],
  },

  {
    title: "Basmati Khazana",
    items: [
      { name: "Plain Rice", price: "₹180" },
      { name: "Jeera Rice", price: "₹190" },
      { name: "Jeera Garlic Rice", price: "₹200" },
      { name: "Veg Pulao", price: "₹260" },
      { name: "Veg Biryani", price: "₹350" },
      { name: "Dal Khichdi", price: "₹350" },
      { name: "Chicken Biryani", price: "₹450" },
      { name: "Mutton Biryani", price: "₹490" },
    ],
  },

  {
    title: "Egg",
    items: [
      { name: "Egg Masala", price: "₹280" },
      { name: "Egg Curry", price: "₹280" },
      { name: "Egg Bhurji", price: "₹210" },
      { name: "Egg Boiled", price: "₹80" },
      { name: "Omelet", price: "₹210" },
    ],
  },

  {
    title: "Salads",
    items: [
      { name: "Green Salad", price: "₹150" },
      { name: "Dahi Kachumber", price: "₹170" },
    ],
  },

  {
    title: "Raita",
    items: [
      { name: "Pineapple Raita", price: "₹160" },
      { name: "Boondi / Veg Raita", price: "₹150" },
    ],
  },

  {
    title: "Ice Cream",
    items: [
      { name: "Vanilla / Strawberry", price: "₹150" },
      { name: "Fried Ice Cream", price: "₹210" },
      { name: "Butter Scotch", price: "₹150" },
      { name: "Real Mango", price: "₹150" },
      { name: "Chocolate Ice Cream", price: "₹170" },
      { name: "Sizzling Brownie", price: "₹250" },
      { name: "Brownie Chocolate", price: "₹150" },
    ],
  },

  {
    title: "Papad",
    items: [
      { name: "Roasted Papad", price: "₹25" },
      { name: "Fried Papad", price: "₹40" },
      { name: "Masala Papad", price: "₹60" },
    ],
  },
];

const leftCategories = [
  categories[0], // Main Course (Veg)
  categories[1], // Paneer Khazana
  categories[2], // Dal-E-Khass
  categories[3], // Main Course (Non Veg)
  categories[10], // Papad
];

const rightCategories = [
  categories[4], // Breads
  categories[5], // Basmati Khazana
  categories[6], // Egg
  categories[7], // Salads
  categories[8], // Raita
  categories[9], // Ice Cream
];

  return (

    <section
      className="
      min-h-screen
      bg-[#1c1712]
      text-white
      py-20
      px-10
      pt-25
      "
    >


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

      
      <div className="grid lg:grid-cols-2 gap-10">

<div className="space-y-10">
  {leftCategories.map((category, index) => (
    <div key={index}>
      <h2 className="text-3xl font-bold text-amber-300 mb-6">
        {category.title}
      </h2>

      <div className="space-y-5">
        {category.items.map((item, i) => (
          <div
            key={i}
            className="flex justify-between gap-5 border-b border-stone-700 pb-4"
          >
            <div>
              <h3 className="text-xl font-semibold">
                {item.name}
              </h3>
            </div>

            <p className="text-amber-300 font-bold whitespace-nowrap">
              {item.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  ))}
</div>

<div className="space-y-10">
  {rightCategories.map((category, index) => (
    <div key={index}>
      <h2 className="text-3xl font-bold text-amber-300 mb-6">
        {category.title}
      </h2>

      <div className="space-y-5">
        {category.items.map((item, i) => (
          <div
            key={i}
            className="flex justify-between gap-5 border-b border-stone-700 pb-4"
          >
            <div>
              <h3 className="text-xl font-semibold">
                {item.name}
              </h3>
            </div>

            <p className="text-amber-300 font-bold whitespace-nowrap">
              {item.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  ))}
</div>
      

       



        {
          // categories.map((category,index)=>(

          //   <div
          //   key={index}
          //   className="mb-12"
          //   >


          //     <h2 className="
          //     text-3xl
          //     font-bold
          //     text-amber-300
          //     mb-6
          //     ">
          //       {category.title}
          //     </h2>



          //     <div className="
          //     space-y-5
          //     ">


          //     {
          //       category.items.map((item,i)=>(

          //         <div
          //         key={i}
          //         className="
          //         flex
          //         justify-between
          //         gap-5
          //         border-b
          //         border-stone-700
          //         pb-4
          //         "
          //         >


          //           <div>

          //             <h3 className="
          //             text-xl
          //             font-semibold
          //             ">
          //               {item.name}
          //             </h3>


          //             <p className="
          //             text-stone-400
          //             mt-1
          //             ">
          //               {item.description}
          //             </p>


          //           </div>


          //           <p className="
          //           text-amber-300
          //           font-bold
          //           whitespace-nowrap
          //           ">
          //             {item.price}
          //           </p>


          //         </div>

          //       ))
          //     }


          //     </div>


          //   </div>

          // ))
        }


      </div>


    </section>

  );
}


export default Menu;