import React from 'react'

const Rooms = () => {
  return (
    <div className='max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4'>
        <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
            <h3 className='text-2xl font-bold'>Fine Interior Rooms</h3>
            <p className='pt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis doloremque id voluptate adipisci ullam aperiam.</p>
        </div>



        <div className='grid grid-cols-2 col-span-2 gap-2'>
            <img 
            className='object-cover w-full h-full' src="https://images.unsplash.com/photo-1505577058444-a3dab90d4253?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
            <img 
            className=' row-span-2 object-cover w-full h-full' src="https://images.unsplash.com/photo-1519872436884-4a50eb5a62db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" alt="" />
            <img 
            className='object-cover w-full h-full' src="https://images.unsplash.com/photo-1462759353907-b2ea5ebd72e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80" alt="" />
        </div>
    </div>
  )
}

export default Rooms