import React from 'react'
import webIcon from '../assets/web-icon.png'
import { FaChevronRight } from "react-icons/fa"
import uiIcon from '../assets/ui-icon.png'
import graphicsIcon from '../assets/graphics-icon.png'

const Services = () => {
  return (
    <div id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg'>What i offer</h4>
        <h2 className='text-center text-5xl'>My services</h2>
        <p className='text-center max-w-2xl mx-auto mt-5 mb-12'>I provide top-notch services focused on quality, efficiency, and clean code, bringing your ideas to life with seamless user experiences.</p>

        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10'>
            <div className='border border-gray-400 rounded-lg px-8 py-12  hover:shadow-[4px_4px_0_#000]  hover:bg-purple-100 hover:-translate-y-1 duration-500'>
                <img src={webIcon} className='w-10' alt="" />
                <h3 className='text-lg my-4 text-gray-700'>Web design</h3>
                <p className='text-sm text-gray-600 leading-5'>I create websites tailored to your needs. I also convert Figma designs into HTML seamlessly.</p>
                <a className='hover:text-blue-500 hover:border-b border-blue-500 flex items-center w-fit gap-1 text-sm mt-5' href="#">Read more <FaChevronRight />
                </a>
            </div>
            <div className='border border-gray-400 rounded-lg px-8 py-12  hover:shadow-[4px_4px_0_#000]  hover:bg-purple-100 hover:-translate-y-1 duration-500'>
                <img src={uiIcon} className='w-10' alt="" />
                <h3 className='text-lg my-4 text-gray-700'>MERN App</h3>
                <p className='text-sm text-gray-600 leading-5'>I build robust web applications using the MERN stack. From front-end to back-end, I ensure seamless functionality and user experience.</p>
                <a className='hover:text-blue-500 hover:border-b border-blue-500 flex items-center w-fit gap-1 text-sm mt-5' href="#">Read more <FaChevronRight />
                </a>
            </div>
            <div className='border border-gray-400 rounded-lg px-8 py-12  hover:shadow-[4px_4px_0_#000]  hover:bg-purple-100 hover:-translate-y-1 duration-500'>
                <img src={graphicsIcon} className='w-10' alt="" />
                <h3 className='text-lg my-4 text-gray-700'>GSAP Projects                </h3>
                <p className='text-sm text-gray-600 leading-5'>I created engaging animations and smooth transitions using GSAP. Enhance your website's interactivity and user experience with dynamic visual effects.</p>
                <a className='hover:text-blue-500 hover:border-b border-blue-500 flex items-center w-fit gap-1 text-sm mt-5' href="#">Read more <FaChevronRight />
                </a>
            </div>
            <div className='border border-gray-400 rounded-lg px-8 py-12  hover:shadow-[4px_4px_0_#000]  hover:bg-purple-100 hover:-translate-y-1 duration-500'>
                <img src={webIcon} className='w-10' alt="" />
                <h3 className='text-lg my-4 text-gray-700'>CMS Management</h3>
                <p className='text-sm text-gray-600 leading-5'>I develop and manage custom content management systems tailored to your needs. Streamline your content creation and organization effortlessly.</p>
                <a className='hover:text-blue-500 hover:border-b border-blue-500 flex items-center w-fit gap-1 text-sm mt-5' href="#">Read more <FaChevronRight />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Services