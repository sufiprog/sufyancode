import React from 'react'
import sendIcon from '../assets/send-icon.png'
import work1 from '../assets/work1.png'
import work2 from '../assets/work2.png'
import work3 from '../assets/work3.png'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";


const MyWork = () => {
    return (
        <div id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
            <h4 className='text-center mb-2 text-lg'>My portfolio</h4>
            <h2 className='text-center text-5xl'>My latest work</h2>
            <p className='text-center max-w-2xl mx-auto mt-5 mb-12'>Explore a collection of projects that showcase my expertise in frontend development and my passion for creating engaging user experiences.</p>
            <div className='grid grid-cols-1 md:grid-cols-3 my-10 gap-5'>
                <div className='aspect-square  bg-no-repeat bg-cover bg-center rounded-lg relative group'
                    style={{ backgroundImage: `url(${work1})` }}
                >
                    <a target='_blank' href="https://sufyan-rehman-prescripto.vercel.app/">
                    <div className='bg-black text-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                        <div>
                            <h2 className='font-semibold'>Frontend Project</h2>
                            <p className='text-sm text-gray-300'>Booking Appointment Website</p>
                        </div>
                        <div className='border bg-white rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-purple-300'>
                            <img src={sendIcon} className='w-5' alt="" />
                        </div>
                    </div>
                    </a>
                </div>
                <div className='aspect-square my-12 bg-no-repeat bg-cover bg-center rounded-lg relative  group'
                    style={{ backgroundImage: `url(${work2})` }}
                >
                    <a target='_blank' href="https://ecommerce-green-eight-29.vercel.app/">
                    <div className='bg-black text-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                        <div>
                            <h2 className='font-semibold'>MERN Project</h2>
                            <p className='text-sm text-gray-300'>E-commerce Website</p>
                        </div>
                        <div className='border bg-white rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-purple-300'>
                            <img src={sendIcon} className='w-5' alt="" />
                        </div>
                    </div>
                    </a>
                </div>
                <div className='aspect-square shadow-lg bg-no-repeat bg-cover bg-center rounded-lg relative  group'
                    style={{ backgroundImage: `url(${work3})` }}
                >
                    <a target='_blank' href="https://nike-clone-henna.vercel.app/">
                    <div className='bg-black text-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                        <div>
                            <h2 className='font-semibold'>Clone Project</h2>
                            <p className='text-sm text-gray-300'>Nike Frontend UI Clone</p>
                        </div>
                        <div className='border rounded-full bg-white border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-purple-300'>
                            <img src={sendIcon} className='w-5' alt="" />
                        </div>
                    </div>
                    </a>
                </div>
            </div>
            <a target='_blank' href="https://github.com/sufiprog?tab=repositories" className='w-max flex items-center justify-center gap-1 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-gray-100 hover:border-purple-600 hover:border-[2px]'>Show more <MdKeyboardDoubleArrowRight />
            </a>
        </div>
    )
}

export default MyWork