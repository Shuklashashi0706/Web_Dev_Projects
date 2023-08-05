import React from 'react'
import { Link } from 'react-router-dom'
import {useState} from 'react'
function Header() {
  const now=new Date().toLocaleTimeString();
  const [time,setTime]=useState(now);
  setInterval(updateTime,1000); 
  function updateTime(){
    const newTime= new Date().toLocaleTimeString();
    setTime(newTime);
}
  return (
    <>
    <div className='w-[100%]'>
      <div className='p-5 flex bg-black text-white justify-evenly'>
      <ul>
        <li><Link to='/'>Home</Link></li>
      </ul>
      <h1 className="">{time}</h1>

      </div>
    </div>
    </>
  )
}


export default Header