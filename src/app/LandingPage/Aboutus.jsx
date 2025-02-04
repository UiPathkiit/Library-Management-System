import React from 'react'
import Image from 'next/image'
const Aboutus = () => {
  return (
    <div className='flex flex-col gap-4 w-full min-h-screen bg-[#EDFFF5]'>
      <div className='w-11/12 m-12 h-72 flex flex-row gap-7'>
       <div className='text flex flex-col gap-3'>
         <h2 className='font-semibold text-3xl '>About US</h2>
         <p> Stay on top of things and revamp your work process with our game-changing feature. Get a bird's eye view with our customizable dashboard. </p>
         <div className='flex flex-row gap-4'>
            <Image
             width={20}
             height={40}
             alt=""
             className='w-5 h-5'
             src="/assets/check.png"></Image>
            <p>Efficient Book Tracking</p>
         </div>
         <div className='flex flex-row gap-4'>
         <Image
             width={20}
             height={40}
             alt=""
             className='w-5 h-5'
             src="/assets/check.png"></Image>
            <p>User-Friendly Interface</p>
         </div>
         <div className='flex flex-row gap-4' >
         <Image
             width={20}
             height={40}
             alt=""
             className='w-5 h-5'
             src="/assets/check.png"></Image>
            <p>Real-Time Updates</p>
         </div>
       </div>
       <Image
       width={450}
       height={650}
       src="/assets/about1.png"
    //    className='w-96 h-72'
       alt="About page"
       ></Image>
      </div>
      <div className='w-11/12 m-12 h-72 flex flex-row gap-7'>
       <div className='text flex flex-col gap-3'>
         <h2 className='font-semibold text-3xl '>About US</h2>
         <p> Stay on top of things and revamp your work process with our game-changing feature. Get a bird's eye view with our customizable dashboard. </p>
         <div className='flex flex-row gap-4'>
            <Image
             width={20}
             height={40}
             alt=""
             className='w-5 h-5'
             src="/assets/check.png"></Image>
            <p>Efficient Book Tracking</p>
         </div>
         <div className='flex flex-row gap-4'>
         <Image
             width={20}
             height={40}
             alt=""
             className='w-5 h-5'
             src="/assets/check.png"></Image>
            <p>User-Friendly Interface</p>
         </div>
         <div className='flex flex-row gap-4' >
         <Image
             width={20}
             height={40}
             alt=""
             className='w-5 h-5'
             src="/assets/check.png"></Image>
            <p>Real-Time Updates</p>
         </div>
       </div>
       <Image
       width={450}
       height={650}
       src="/assets/about1.png"
    //    className='w-96 h-72'
       alt="About page"
       ></Image>
      </div>
      <div className='w-11/12 m-12 h-72 flex flex-row gap-7'>
       <div className='text flex flex-col gap-3'>
         <h2 className='font-semibold text-3xl '>About US</h2>
         <p> Stay on top of things and revamp your work process with our game-changing feature. Get a bird's eye view with our customizable dashboard. </p>
         <div className='flex flex-row gap-4'>
            <Image
             width={20}
             height={40}
             alt=""
             className='w-5 h-5'
             src="/assets/check.png"></Image>
            <p>Efficient Book Tracking</p>
         </div>
         <div className='flex flex-row gap-4'>
         <Image
             width={20}
             height={40}
             alt=""
             className='w-5 h-5'
             src="/assets/check.png"></Image>
            <p>User-Friendly Interface</p>
         </div>
         <div className='flex flex-row gap-4' >
         <Image
             width={20}
             height={40}
             alt=""
             className='w-5 h-5'
             src="/assets/check.png"></Image>
            <p>Real-Time Updates</p>
         </div>
       </div>
       <Image
       width={450}
       height={650}
       src="/assets/about1.png"
    //    className='w-96 h-72'
       alt="About page"
       ></Image>
      </div>
    </div>
  )
}

export default Aboutus
