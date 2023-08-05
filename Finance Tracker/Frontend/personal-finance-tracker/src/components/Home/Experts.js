import React from 'react'
// import hack from '../assets/images/ethical-hacking.png'

function Experts() {
  return (
    <div className=' max-w-[1240px] mx-auto  md:my-5  md:grid grid-cols-2'>
        <div className='border bg-red-600 flex justify-center'>
          <img  className='object-cover rounded w-full h-[35rem]' src={require('../../assets/images/pic_1.jpg')} alt=""></img>
        </div>
        <div className=' p-5 md:p-0 ml-[20px] col-span-1 flex flex-col flex-wrap items-center justify-center'>
          <h2 className='font-bold text-2xl text-[#00df9a] m-2'>Learn Finance From Experts</h2>
          <p className='m-2 text-black font-semibold text-justify md:text-left'>Learn finance from experts! Unlock the secrets of managing your money, investments, and financial planning. Our experienced professionals will guide you through practical strategies and help you gain valuable insights. Take control of your financial future and enroll in our finance courses today!</p> 
        <button className='w-[30%] bg-black text-white hover:scale-110 rounded-md p-3 m-2 '>Get Started</button>
        </div>
    </div>
  )
}

export default Experts