import React from 'react'
import sufiAbout from '../assets/sufyan-about.webp'
import codeIcon from '../assets/code-icon.png'
import eduIcon from '../assets/edu-icon.png'
import projectIcon from '../assets/project-icon.png'
import vsCode from '../assets/vscode.png'
import fireBase from '../assets/firebase.png'
import mongoDB from '../assets/mongodb.png'
import shadeCn from '../assets/shade-cn.png'
import git from '../assets/git.png'
import devIcon from '../assets/dev-icon.png'
import circularText from '../assets/circular-text.png'

const About = () => {
  return (
    <div id='about' className='relative w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg'>Introduction</h4>
      <h2 className='text-center text-5xl'>About me</h2>

      <div className='flex w-full flex-col lg:flex-row items-center my-20 gap-20'>
        <div className='max-w-max mx-auto relative'>
          <img src={sufiAbout} className='w-72 sm:w-80 rounded-3xl max-w-none' alt="" />
          <div className='bg-white w-1/2 aspect-square absolute right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/3 shadow-[0_4px_55px_rgba(149,0,162,0.15)] flex items-center justify-center'>
          <img src={circularText} className='w-full animate-spin_slow' alt="" />
          <img src={devIcon} className='w-1/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' alt="" />
          </div>
        </div>
        <div className='flex-1'>
          <p className='mb-10 max-w-2xl'>I'm an experienced Frontend Developer with three years in the field, currently mastering MERN. Studying DAE in Software Engineering at Aligarh Institute of Technology, I've collaborated with prestigious organizations to drive their success and growth.
          </p>

          <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
            <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-purple-100 hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]'>
              <img className='w-7 mt-3' src={codeIcon} alt="" />
              <h3 className='my-4 font-semibold text-gray-700'>Languages</h3>
              <p className='text-gray-600 text-sm'>HTML, CSS, JavaScript, React JS, Next JS <span className='text-gray-400'>(preparing)</span></p>
            </li>
            <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-purple-100 hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]'>
              <img className='w-7 mt-3' src={eduIcon} alt="" />
              <h3 className='my-4 font-semibold text-gray-700'>Education</h3>
              <p className='text-gray-600 text-sm'>Diploma of Associate Engineer (DAE) in Software Technology</p>
            </li>
            <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-purple-100 hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]'>
              <img className='w-7 mt-3' src={projectIcon} alt="" />
              <h3 className='my-4 font-semibold text-gray-700'>Projects</h3>
              <p className='text-gray-600 text-sm'>Built more than 30 UI/UX Projets & 5 MERN Projects</p>
            </li>
          </ul>
          <h4 className='my-6 text-gray-700'>Tools i use</h4>
          <ul className='flex items-center gap-3 sm:gap-5'>
            <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
              <img className='w-7 sm:w-9' src={vsCode} alt="" />
            </li>
            <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
              <img className='w-7 sm:w-9' src={fireBase} alt="" />
            </li>
            <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
              <img className='w-7 sm:w-9' src={mongoDB} alt="" />
            </li>
            <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
              <img className='w-7 sm:w-9 rounded-full' src={shadeCn} alt="" />
            </li>
            <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
              <img className='w-7 sm:w-9' src={git} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About