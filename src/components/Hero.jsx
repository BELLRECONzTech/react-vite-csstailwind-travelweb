import React from 'react'


const Hero = () => {
  return (
    < div className='w-full h-screen'>
        <img className='top-0 left-0 w-full h-screen object-cover' src="https://images.pexels.com/photos/1646178/pexels-photo-1646178.jpeg" alt="" />
            <div className='bg-black/30 absolute top-0 left-0 w-full h-screen
            '/>

            <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
                <div className='md:left-[10%] max-w-[1100px] m-auto p-4'>
                    <p>All Inclusive</p>
                    <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>Private Fantasy & HomeStat </h1>
                    <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum eum ad laborum, deleniti nesciunt velit aliquid labore impedit repellendus nulla.</p>
                    <button className='bg-white t text-black '>Reserve Now</button>
                </div>
            </div>

    </div>
  )
}

export default Hero