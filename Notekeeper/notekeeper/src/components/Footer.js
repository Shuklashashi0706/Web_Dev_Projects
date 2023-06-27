import React from 'react'

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className='bg-black text-white flex justify-center p-10'>
      <p>Copyright@<span>{year}</span></p>
    </div>
  )
}

export default Footer