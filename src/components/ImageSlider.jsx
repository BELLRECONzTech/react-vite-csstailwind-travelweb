import React, {useState} from 'react'
import {BsChevronCompactLeft , BsChevronCompactRight } from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'


 
const ImageSlider = () => {

    const slides =[
        {
        url:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=781&q=80',title:'Menu 1',
    },
    {
        url:'https://images.unsplash.com/photo-1674315605007-8cc99e05c4c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',title:'Menu 2'
        ,}
        ,{
            url:'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',title:'Menu 3'
            ,}
        ]

        const[currentIndex, setCurrentIndex] = useState(0)

        const prevSlide = () => {
            const isFirstSlide = currentIndex === 0
            const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
            setCurrentIndex(newIndex)
        }

        const nextSlide = () => {
            const isLastSlide = currentIndex === slides.length - 1
            const newIndex = isLastSlide ? 0 : currentIndex + 1
            setCurrentIndex(newIndex)
        }

        const goToSlide = (slideIndex) => {
            setCurrentIndex(slideIndex)
        }


  return (
    <div className='max-w-[1400px] h-[780px] w-full  m-auto  py-40 px-4  relative group'>
        <div 
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500' 
        style={{backgroundImage: `url(${slides[currentIndex].url})`}}>
            
        </div>

        {/*left arrow*/}

        <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactLeft onClick = {prevSlide} size={50}/>
        </div>

        {/*Right Arrow*/}

        <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactRight onClick = {nextSlide} size={50}/>
        </div>
        <div className='flex top-4 justify-center py-2'>
            {slides.map((slide, slideIndex) => (
                <div className='text-2xl cursor-pointer' key={slideIndex} onClick = {()=> goToSlide(slideIndex)}  >
                <RxDotFilled />
                </div>
            ))}

        </div>
    </div>
  )
}

export default ImageSlider