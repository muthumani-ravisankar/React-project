import React from 'react'

const Newsletter = () => {
    return (
        <div className='w-full py-16 text-white px-4'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2'>
                    <h1 className='md:text-4xl sm:text-3xl text-xl font-bold py-2'>Want Tips & Tricks To Optimize Your Flow?</h1>
                    <p>Sign up to our newsletter an up to date</p>

                </div>
                <div className='my-4'>
                    <div className=''>
                        <input className='p-2 flex w-full  rounded-md text-black' type="email" placeholder='Enter Email' />
                        <button className='bg-[#00ffff] w-[120px] rounded-md font-medium my-6  py-1  text-black'>Notify Me</button>
                        <p>We care about the protection of your data. Read our <span className='text-[#00ffff]'>Privacy Policy.</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter