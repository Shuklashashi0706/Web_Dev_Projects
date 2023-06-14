import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <>
    <div className='w-[100%]'>
      <div className='p-5 flex bg-black text-white justify-evenly'>
      <p>Header</p>
      <ul>
        <li><Link to='/'>Home</Link></li>
      </ul>
      </div>
    </div>
    </>
  )
}


export default Header