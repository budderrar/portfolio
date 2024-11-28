import React from 'react'
import { motion } from 'framer-motion'


const Hero = () => {
  return (
    <div id='home' className='px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32'>
      <div className='flex flex-col items-center justify-center gap-10 text-white'>
        <div className='flex max-w-[600px] flex-col items-center justify-center gap-3 text-center'>
          <motion.div initial={{y:-50, opacity:0}} animate={{y:0, opacity:1}} transition={{duration: 0.8, delay:0}}><h1 className='bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-6xl font-semibold transition-all duration-300 hover:-translate-y-1 hover:text-7xl cursor-default'>Ahmed Nasser</h1></motion.div>
          <motion.div initial={{y:50, opacity:0}} animate={{y:0, opacity:1}} transition={{duration: 0.8, delay:0}}>
          <h3 className='bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-2xl md:text-3xl'>Web Developer</h3>
          <p className='md:text-base text-pretty text-sm text-gray-400'>A Computer science graduate with a passion for web development, based in <em className='text-bold text-base'>Cairo, Egypt</em></p>  
          </motion.div>
        </div>
      </div>
      </div>
  )
}

export default Hero