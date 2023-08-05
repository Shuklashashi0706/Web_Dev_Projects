import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'

const STYLES = ['btn--primary', 'btn--outline']

const SIZES = ['btn--medium', 'btn--large']
const Button = ({ children, isAuthenticated, onClick, buttonStyle, buttonSize, type }) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <>
            {isAuthenticated ? (
                <button className=" text-white text-xl font-thin border border-red-500 py-2 px-5 " onClick={onClick} type={type}>
                    {children}
                </button>
            ) : (
                <Link to='/sign-up' className='btn-mobile'>
                    <button className={`btn ${checkButtonStyle} ${buttonSize}`} onClick={onClick} type={type}>
                        {children}
                    </button>
                </Link>
            )}
        </>
    )
}
export default Button