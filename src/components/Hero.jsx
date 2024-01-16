import React from 'react'

const Hero = () => {
    return (
        <div className='text-white'>
            <div className='max-w-[800px] mt-[-96] w-full h-screen mx-auto text-center justify-center flex flex-col'>
                <p className='text-[#00ffff] font-bold p-2 '>GROWING WITH PROGRAMING ANALYTICS</p>
                <p className='md:text-7xl sm:text-6xl text-4xl font-bold md:py6'>Grow with Knowledge</p>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold'>Have a cup of coffee</p>
                <p className='md:text-2xl text-l font-bold md:pl-4 pt-2 p-4 text-gray-500 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, molestias?</p>
                <button className='bg-[#00ffff] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
            </div>
        </div>
    )
}

export default Hero