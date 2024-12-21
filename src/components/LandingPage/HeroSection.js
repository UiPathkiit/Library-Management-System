import React from 'react'
// import Navbar from '../Menubar/Navbar'
import Image from 'next/image'
import Link from 'next/link'
export default function HeroSection() {
  return (
    <>
    {/* <Navbar /> */}
      <div className='bg-[#EDFFF5] w-full relative min-h-screen text-black overflow-hidden'>
        {/* image */}
        <div 
        className='absolute left-2/4 ml-28 mt-4 bg-contain opacity-50 bg-no-repeat '>
            <Image alt='' 
            width={200} 
            height={120}
            className='w-9/12 md:w-full h-40 sm:h-52 md:h-64 '
            src='/assets/herobook1.png'>
      </Image>
      </div>
      {/* content */}
      <div className='relative flex justify-center items-center flex-col gap-1 sm:gap-3  '>
      <h1 className=' font-semibold text-center text-2xl 
      sm:text-4xl md:text-5xl p-3 leading-tight word-wrap'>
      Organize, Access, Inspire: 
      <br className='text-center'></br> 
      Your Library, Your Way!
      </h1>
      <p className='text-center leading-snug text-xs 
      sm:text-sm md:text-base tracking-tight md:tracking-wide break-words'>
      Streamline your library experience with easy book 
      management, seamless <br></br> searching, and quick
       access to your favorite resources.
      </p>
      <div className='flex justify-between gap-6'>
      <button className='w-24 h-8 md:w-32 md:h-12
       text-white text-sm md:text-base
      rounded-md mt-2 bg-[#4328EB]'>
       Get Started </button>
      <Link href='/get-started' >
      <Image
      width={40} 
      height={26}
      alt='' 
      className='w-8 h-8 md:w-12 md:h-10 mt-2
       md:mt-3 cursor-pointer rounded-full p-2 bg-[#4328EB] bg-opacity-20'
      src='/assets/arrow.png'></Image></Link>
      </div>
      </div>
      <Image
      width={500}
      height={470}
       alt='Cubic'
       className='w-3/12 h-2/6 relative bottom-14 
       sm:bottom-28 md:bottom-28 overflow-hidden'
       src='/assets/cubic.png'
      ></Image>
      <div 
       className='w-full h-36 sm:h-40 md:h-64 lg:h-96'
      style={{
        backgroundImage: `url('/assets/hero-bg.png')`,
        backgroundSize: 'cover', // Ensures the image covers the entire div
        backgroundPosition: ' center', // Centers the image
        backgroundRepeat: 'no-repeat',
      }}>
      <div className='relative bottom-40 sm:bottom-60 sm:left-20 md:bottom-80 left-14
      lg:bottom-96 md:left-24 lg:left-32 '>
      <Image 
           width={1300}
           height={1300}
            alt='Library'
            className='sm:w-8/12 w-7/12 h-2/4 rounded-2xl'
            src='/assets/lib.jpeg'
           ></Image>
           <Image 
            width={1300}
            height={1300}
             alt='Library'
             className='w-2/12 sm:w-1/5 relative bottom-32 sm:bottom-60 md:bottom-80 lg:bottom-96 left-2/4 
             ml-10 sm:ml-24 lg:ml-40 h-2/4 '
             src='/assets/mobile.png'
            ></Image>
      </div></div></div>
    </>
  )
}
