import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import MyWork from '../components/MyWork'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div className='overflow-x-hidden'>
        <Hero />
        <About />
        <Services />
        <MyWork />
        <Contact />
    </div>
  )
}

export default Home