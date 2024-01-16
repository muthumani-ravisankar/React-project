import React from 'react'
import {
    FaGithubSquare,
    FaInstagramSquare,
    FaTwitterSquare,
    FaFacebookSquare
} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
            <div>
                <h1 className='w-full text-3xl font-bold text-[#00ffff]'>Welcome</h1>
                <p className='py-4 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla cumque doloribus suscipit, aut at iste sint debitis corporis, mollitia sit velit praesentium accusantium blanditiis? Delectus quis molestiae sit quibusdam nesciunt.</p>
                <dir className='flex justify-between md:w-[75%] my-6 '>
                    <FaFacebookSquare className='hover:text-[#00FFFF] cursor-pointer' size={30} />
                    <FaInstagramSquare className='hover:text-[#00FFFF] cursor-pointer' size={30} />
                    <FaTwitterSquare className='hover:text-[#00FFFF] cursor-pointer' size={30} />
                    <FaGithubSquare className='hover:text-[#00FFFF] cursor-pointer' size={30} />
                </dir>
            </div>
            <div className='lg:col-span-2 md:col-span-3  flex  justify-between mt-6 pl-4 pr-4 '>
                <div>
                    <h6 className=' font-bold'>Solutions</h6>
                    <ul>
                        <li className='py-2 text-sm hover:text-[#00FFFF] cursor-pointer'>Analytics</li>
                        <li className='py-2 text-sm hover:text-[#00FFFF] cursor-pointer'>Marketing</li>
                        <li className='py-2 text-sm hover:text-[#00FFFF] cursor-pointer'>Commerce</li>
                        <li className='py-2 text-sm hover:text-[#00FFFF] cursor-pointer'>Insights</li>
                    </ul>

                </div>
                <div>
                    <h6 className=' font-bold'>Support</h6>
                    <ul>
                        <li className='py-2 text-sm hover:text-[#00FFFF] cursor-pointer'>Pricing</li>
                        <li className='py-2 text-sm hover:text-[#00FFFF] cursor-pointer'>Documentation</li>
                        <li className='py-2 text-sm hover:text-[#00FFFF] cursor-pointer'>Guides</li>
                        <li className='py-2 text-sm hover:text-[#00FFFF] cursor-pointer'>Api Status</li>
                    </ul>

                </div>
                <div>
                    <h6 className=' font-bold'>Company</h6>
                    <ul>
                        <li className='py-2 text-sm hover:text-[#00FFFF] cursor-pointer'>Blogs</li>
                        <li className='py-2 text-sm hover:text-[#00FFFF] cursor-pointer'>Jobs</li>
                        <li className='py-2 text-sm hover:text-[#00FFFF] cursor-pointer'>Press</li>
                        <li className='py-2 text-sm hover:text-[#00FFFF] cursor-pointer'>Careeres</li>
                    </ul>

                </div>
            </div>
        </div>
    )
}
    
export default Footer