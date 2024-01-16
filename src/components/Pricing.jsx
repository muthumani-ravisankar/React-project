import React from 'react'
import Basic from '../assets/images/basic-blue.svg'
import Standard from '../assets/images/standard-blue.svg'
import Popular from '../assets/images/populor-blue.svg'

const Pricing = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 ">
            <div className="w-full shadow-xl flex flex-col p-4 my-10 rounded-lg hover:scale-105 duration-100">                
                <img className='w-20 mx-auto mt-[-3rem]  bg-white' src={Basic} alt="/" />
                <h1 className='text-2xl font-bold text-center py-8'>Basic</h1>
                <p className='text-center font-bold text-2xl'>$28</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 Gb storage</p>
                    <p className='py-2 border-b mx-8 '>somting that</p>
                    <p className='py-2 border-b mx-8 '>lab access</p>
                </div>
                <button  className='bg-[#00ffff] w-[120px] mx-auto rounded-md font-medium my-6  py-1  text-black'>Get Quote</button>
            </div>
            <div className="w-full shadow-xl flex flex-col p-4 my-10 rounded-lg hover:scale-105 duration-100">                
                <img className='w-20 mx-auto mt-[-3rem]  bg-white' src={Standard} alt="/" />
                <h1 className='text-2xl font-bold text-center py-8'>Standard</h1>
                <p className='text-center font-bold text-2xl'>$34</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 Gb storage</p>
                    <p className='py-2 border-b mx-8 '>somting that</p>
                    <p className='py-2 border-b mx-8 '>lab access</p>
                </div>
                <button  className='bg-[#00ffff] w-[120px] mx-auto rounded-md font-medium my-6  py-1  text-black'>Get Quote</button>
            </div>
            <div className="w-full shadow-xl flex flex-col p-4 my-10 rounded-lg hover:scale-105 duration-100">                
                <img className='w-20 mx-auto mt-[-3rem]  bg-white' src={Popular} alt="/" />
                <h1 className='text-2xl font-bold text-center py-8'>Poppular</h1>
                <p className='text-center font-bold text-2xl'>$57</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 Gb storage</p>
                    <p className='py-2 border-b mx-8 '>somting that</p>
                    <p className='py-2 border-b mx-8 '>lab access</p>
                </div>
                <button  className='bg-[#00ffff] w-[120px] mx-auto rounded-md font-medium my-6  py-1  text-black'>Get Quote</button>
            </div>
        </div>
    </div>
  )
}

export default Pricing