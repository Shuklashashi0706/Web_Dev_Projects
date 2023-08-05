import React from 'react'

function Newletter() {
  return (
    <div className="bg-[#2699fb] p-4">
    <div className='max-w-[1600px] mx-auto md:grid grid-cols-2'>
        <div className='p-8'>
            <p className='font-bold text-white text-5xl'>Want to Know more about our website?</p>
            <p className='text-white font-semibold'>Sign up to our newsletter and stay up to date</p>
        </div>
        <div className='p-10'>
            <form className=''>
                <input type='text' placeholder='Enter Email' className='p-2 rounded w-[250px] md:w-[400px] text-left '></input>
                <button className='w-[28%] bg-black text-white hover:scale-110 rounded-md p-2 mx-2'>Notify Me</button>
            </form>
            <p className='text-white font-semibold'>We care about the protection of your data.Read our</p>
            <a href="#" className='font-semibold  underline'>Privacy Policy.</a>
        </div>
    </div>
    </div>
  )
}

export default Newletter