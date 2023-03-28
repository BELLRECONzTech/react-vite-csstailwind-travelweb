import React from 'react'

const Plan = () => {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
        {/*left side*/}
        <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
            <img className='row-span-3 object-cover w-full h-full p-2' src="https://images.unsplash.com/photo-1510218830377-2e994ea9087d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1016&q=80" alt="" />
            <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.unsplash.com/photo-1547391076-c6132ab72010?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
            
            <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.unsplash.com/photo-1477511515466-ffc0a97dca35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="" />
            
            <img className='row-span-3 object-cover w-full h-full p-2' src="https://images.unsplash.com/photo-1470854989922-5be2f7456d78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80" alt="" />

            <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.unsplash.com/photo-1550100136-e092101726f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />

        </div>
        {/*Right Side*/}
        <div className='flex flex-col h-full justify-center'>
            <h3 className='text-5xl md:text-6xl font-bold'>Plan Your Next Trip</h3>
            <p className='text-2xl py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum totam earum harum expedita quam iste sunt odio voluptate sequi quaerat.</p>
            <p className='pb-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus quas, sint nostrum repellat commodi voluptatibus obcaecati perferendis ipsam, delectus voluptatem temporibus tempore explicabo facere odio numquam reiciendis eius, fugit veniam.</p>
            <div>
            <button className='border-black mr-4 hover:shadow-xl'>Learn More</button>
            <button className='bg-black text-white hover:shadow-xl'>Book Your Trip</button>
            </div>
        </div>
    </div>
  )
}

export default Plan