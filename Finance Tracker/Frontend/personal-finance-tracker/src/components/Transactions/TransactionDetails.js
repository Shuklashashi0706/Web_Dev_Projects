import React from 'react'

const TransactionDetails = ({ description, amount, type, onDelete }) => {
    return (
        <div className='flex space-x-5 mb-5 ' >
            <p className='bg-gray-200 p-4 text-center rounded-lg w-40 ' >{description}</p>
            <p className='bg-gray-200 p-4 text-center rounded-lg w-40 flex justify-center items-center ' >{amount}</p>
            <p className={`${type == 'credit' ? 'bg-green-400' : 'bg-red-400'} p-4 text-center rounded-lg w-36 flex justify-center items-center `} >{type[0]?.toUpperCase() + type?.substring(1)}{type ? 'ed' : null}</p>
            <button onClick={onDelete} className='bg-red-500 w-40 rounded-md font-bold' >
                Delete
            </button>
        </div>)
}

export default TransactionDetails