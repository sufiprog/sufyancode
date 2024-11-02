import React, { useState, useEffect, useRef } from 'react';
import { FaCode } from "react-icons/fa";
import closeBlack from '../assets/close-black.png';
import { TbMenuDeep } from "react-icons/tb";
import { IoLogoLinkedin } from "react-icons/io5";
import {Link} from 'react-router-dom'


const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const navbarRef = useRef(null);
    const navLinksRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                navbarRef.current.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm');
                navLinksRef.current.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50');
            } else {
                navbarRef.current.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm');
                navLinksRef.current.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='z-10 relative playwrite'>
            <nav ref={navbarRef} className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50'>
                <a href="/">
                    <div className='cursor-pointer flex items-center  mr-14'>
                        <span className='text-2xl md:text-3xl text-gray-700 relative'>Sufi <span className=' absolute -bottom-2 md:text-3xl text-2xl text-gray-600'>Prog</span></span>
                        
                    </div>
                </a>
                <ul ref={navLinksRef} className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50'>
                    <li className='hover:text-gray-400 transition duration-300'><a href="/#top">Home</a></li>
                    <li className='hover:text-gray-400 transition duration-300'><a href="/#about">About me</a></li>
                    <li className='hover:text-gray-400 transition duration-300'><a href="/#services">Services</a></li>
                    <li className='hover:text-gray-400 transition duration-300'><a href="/#work">My Work</a></li>
                    <li className='hover:text-gray-400 transition duration-300'><a href="/#contact">Contact me</a></li>
                </ul>
                <div className='flex items-center'>
                    <a href="https://www.linkedin.com/in/sufiprog/" target='_blank' className='hidden outfit bg-white hover:bg-blue-500 hover:text-white group lg:flex items-center gap-3 border px-8 py-2 hover:border-white border-gray-500 rounded-full  ml-4' to='/hire'>LinkedIn <IoLogoLinkedin className='text-blue-500 text-2xl group-hover:text-white'/></a>

                    <button onClick={() => setMenu(true)}>
                        <TbMenuDeep className='text-4xl md:hidden ml-3 active:animate-ping' />
                    </button>
                </div>
                {/* Mobile Menu */}
                <ul className={`flex  md:hidden gap-4 flex-col py-20 px-10 fixed top-0 bottom-0 w-64 z-50 h-screen bg-purple-100 transition-all duration-500 ${menu ? 'right-0' : '-right-64'}`}>
                    <div onClick={() => setMenu(false)} className='absolute top-6 right-6 '>
                        <img className='w-5 cursor-pointer active:rotate-45 transition duration-100' src={closeBlack} alt="" />
                    </div>
                    <li onClick={() => setMenu(false)} className='hover:text-gray-400 transition duration-300'><a href="/#top">Home</a></li>
                    <li onClick={() => setMenu(false)} className='hover:text-gray-400 transition duration-300'><a href="/#about">About me</a></li>
                    <li onClick={() => setMenu(false)} className='hover:text-gray-400 transition duration-300'><a href="/#services">Services</a></li>
                    <li onClick={() => setMenu(false)} className='hover:text-gray-400 transition duration-300'><a href="/#work">My Work</a></li>
                    <li onClick={() => setMenu(false)} className='hover:text-gray-400 transition duration-300'><a href="/#contact">Contact me</a></li>
                    <Link className="px-8 mt-5 outfit hover:border-blue-600 py-2 w-fit border rounded-full bg-white shadow-md flex gap-2 group items-center" href="/hire">Hire Me <FaCode className="text-lg group-hover:text-blue-500" /></Link>
                    <hr className='w-15 ' />
                    <a href="https://www.linkedin.com/in/sufiprog/" target='_blank' className=' outfit bg-white hover:bg-blue-500 hover:text-white group flex items-center gap-1 border px-8 py-2 border-gray-500 rounded-full w-fit' >LinkedIn <IoLogoLinkedin className='text-blue-500 text-xl group-hover:text-white'/></a>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
