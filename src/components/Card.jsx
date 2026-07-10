import React from 'react'

function Card({image, title, description , price}) {
  return (
  
    <div 
    
className="bg-[#1c1712]  rounded-2xl border border-stone-700 hover:border-amber-300  p-6 shadow-lg 
min-w-full
  sm:min-w-[320px]
  lg:min-w-0
  h-full
  group
  
  snap-center" 
    
  
    >

      <div>
        <img src={image} alt={title} className='w-full h-48 object-cover rounded-md mb-4 group-hover:scale-110 transition-all duration-300' />
        <h2 className='text-xl text-white font-semibold mb-2'>{title}</h2>
        <p className='text-stone-300'>{description}</p>
      </div>
    </div>
  )
}

export default Card
