import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { GiHamburgerMenu } from 'react-icons/gi'

import { signout } from '../../store/actions/auth'
import './Navbar.css'


function Navbar({ isAuthenticated, signout, user }) {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);
    const [button, setButton] = useState(true);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };
    useEffect(() => {
        showButton()
    }, []);
    window.addEventListener('resize', showButton)
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>ClubManager <i className="fab fa-typo3"></i></Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <GiHamburgerMenu style={{ color: 'white' }} />
                        <i className={click ? "fas fa-times" : "fas fa-bars"} />
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>

                        <li className='nav-item'><Link to="/" className='nav-links' onClick={closeMobileMenu}>Home</Link></li>
                        <li className='nav-item'><Link to="/search" className='nav-links' onClick={closeMobileMenu}>Search</Link></li>
                        {!isAuthenticated ? (
                            <li className='nav-item'><Link to="/sign-in" className='nav-links' onClick={closeMobileMenu}>Sign In</Link></li>
                        ) : (
                            <>
                                {user?.role == 'admin' && (
                                    <li className='nav-item'><Link to="/club-profile" className='nav-links' onClick={closeMobileMenu}>Club</Link></li>
                                )}
                                <li className='nav-item'><Link to="/profile" className='nav-links' onClick={closeMobileMenu}>Profile</Link></li>
                            </>
                        )}
                    </ul>
                    {button &&
                        <Link to={`${ isAuthenticated ? '/sign-in' : '/sign-up' }`}className='btn-mobile'>
                            <button className={`text-white text-xl font-thin border py-2 px-5 ${isAuthenticated ? 'border-red-500' : 'border-white'}`} onClick={isAuthenticated && signout} >{isAuthenticated ? 'Sign Out' : 'Sign Up'}</button>
                        </Link>}
                </div>
            </nav >
        </>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
})

export default connect(mapStateToProps, { signout })(Navbar)
