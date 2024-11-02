import React from 'react'
import footerLogo from '../assets/footer-logo.png'
import mailIcon from '../assets/mail_icon.png'
import { FaGithub } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaMedium } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";






const Footer = () => {
  return (
    <div className='mt-20'>
        <div className='text-center'>
        <img src={footerLogo} alt="" className='w-28 mx-auto ' />
            <div className='w-max flex items-center gap-2 mx-auto'>
                <img src={mailIcon} className='w-5' alt="" />
                sufidemo@gmail.com
            </div>
        </div>
        <div className='text-center text-sm sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-5 py-6'>
            <p>&copy; 2024 Muhammad Sufyan | All rights reserved.</p>
            <ul className='flex items-center gap-5 justify-center mt-4 sm:mt-0'>
                <li className='border rounded-lg px-3 py-2 bg-black hover:-translate-y-1 duration-300'><a className='text-white '  target='_blank' href="https://github.com/sufiprog"><FaGithub  /></a></li>
                <li className='border rounded-lg px-3 py-2 bg-green-500 hover:-translate-y-1 duration-300'><a className='text-white'  target='_blank' href="https://whatsapp.com/channel/0029VapEbLq6LwHeSXSPxK16"><IoLogoWhatsapp /></a></li>
                <li className='border rounded-lg px-3 py-2 bg-blue-500 hover:-translate-y-1 duration-300'><a className='text-white'  target='_blank' href="https://www.linkedin.com/in/sufiprog/"><FaLinkedin /></a></li>
                <li className='border rounded-lg px-3 py-2 bg-white hover:-translate-y-1 duration-300'><a  target='_blank' href="https://medium.com/@sufiprogg"><FaMedium /></a></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer