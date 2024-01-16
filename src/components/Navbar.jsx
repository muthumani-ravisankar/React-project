import React from 'react'
import { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'



const Navbar = () => {
    const [nav,setNav]=useState(1)
    const handleNav=()=>{
        setNav(!nav)
    }
    return (
        <div className='flex  justify-between items-ceter h-24 max-w-[1230px] mx-auto px-3 text-white '>
            <h1 className='w-full m-2 text-3xl font-bold text-[#00ffff]'>Welcome</h1>
            <ul className='hidden md:flex'>
                <li className='p-4 hover:text-[#00FFFF] cursor-pointer'>Home</li>
                <li className='p-4 hover:text-[#00FFFF] cursor-pointer'>About </li>
                <li className='p-4 hover:text-[#00FFFF] cursor-pointer'>Services</li>
                <li className='p-4 hover:text-[#00FFFF] cursor-pointer'>Contact</li>
            </ul>
            <div className='block md:hidden m-5 ' onClick={handleNav}>{!nav?<AiOutlineClose size={20}/>:<AiOutlineMenu size={20} />}</div>
            <div className={!nav?'fixed left-0 top-0 w-[60%] h-full border-r-gray-900 bg-[#000300] bg-blur ease-in-out duration-500':'fixed left-[-100%]'}>
                <h1 className='w-full m-3 text-3xl font-bold text-[#00ffff]'>Welcome.</h1>
                <ul className='uppercase p-4'>
                    <li className='p-4 border-b border-gray-600 hover:text-[#00FFFF] cursor-pointer'>Home</li>
                    <li className='p-4 border-b border-gray-600 hover:text-[#00FFFF] cursor-pointer'>About </li>
                    <li className='p-4 border-b border-gray-600 hover:text-[#00FFFF] cursor-pointer'>Services</li>
                    <li className='p-4 hover:text-[#00FFFF] cursor-pointer'>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar