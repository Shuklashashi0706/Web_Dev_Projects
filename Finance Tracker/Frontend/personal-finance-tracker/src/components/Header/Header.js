import React, { useState } from 'react'
import { HiMenuAlt1 } from "react-icons/hi";
import { AiOutlineCloseCircle } from "react-icons/ai"
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

function Header({ isAuthenticated }) {
    const [toggle, setToggle] = useState(false);
    return (
        // Main Body
        <div className="bg-[#1b87e5] p-4">
            {/* Navbar */}
            <div className='max-w-1240px flex  justify-between items-center mx-auto'>
                {/* Logo */}
                <div className='font-bold text-3xl px-2 hover:scale-125'>
                    Finance Tracker
                </div>
                {/* Menu */}
                {
                    toggle ?
                        <AiOutlineCloseCircle onClick={() => setToggle(!toggle)} className='text-white text-4xl md:hidden block' />
                        :
                        <HiMenuAlt1 onClick={() => setToggle(!toggle)} className='text-white text-4xl  md:hidden block' />
                }

                <ul className='font-bold text-xl hidden md:flex text-white gap-x-5 px-2'>
                    <li className=' hover:scale-110 duration-300 hover:underline'><Link to='/'>Home</Link></li>
                    {isAuthenticated ? (
                        <>
                            <li className=' hover:scale-110 duration-300 hover:underline'><Link to='/Wallet'>Wallet</Link></li>
                            <li className=' hover:scale-110 duration-300 hover:underline'><Link to='/Profile'>Profile</Link></li>
                        </>
                    ) : (
                        <li className=' hover:scale-110 duration-300 hover:underline'><Link to='/Login'>Login</Link></li>
                    )}
                    <li className=' hover:scale-110 duration-300 hover:underline'><Link to='/About'>About</Link></li>
                </ul>
                {/* Responsive Menu */}
                <ul className={`duration-300 md:hidden w-full h-screen text-white fixed left-[-100%] top-[67px] bg-black px-2
            ${toggle ? 'left-[0]' : 'left-[-100%]'}`}>
                    <li className='p-4'><Link to='/'>Home</Link></li>
                    <li className='p-4'><Link to='/courses'>Transaction</Link></li>
                    <li className='p-4'><Link to='/about'>About</Link></li>
                    <li className='p-4'><Link to='/login'>Login</Link></li>
                </ul>
            </div>

        </div>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(Header)