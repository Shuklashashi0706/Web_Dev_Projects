import React from 'react'

function Card(props) {
  function handleClick(){
    props.onDelete(props.id);
  }
  return (
    <>
    <div className='p-2 m-2 h-[100px] w-[30%] bg-black text-white rounded-lg '>
    <h1>{props.title}</h1>
    <p>{props.content}</p>
    <button onClick={handleClick} className='bg-yellow-300 text-black rounded-md px-3'>Delete</button>
    </div>
    </>
  )
}

export default Card