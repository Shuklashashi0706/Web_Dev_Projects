import React from 'react'

function Card(props) {
  return (
    <>
    <div className='border border-green-600 h-[100px] w-[30%] bg-black text-white rounded-lg mx-5'>
    <h1>{props.title}</h1>
    <p>{props.content}</p>
    </div>
    </>
  )
}

export default Card