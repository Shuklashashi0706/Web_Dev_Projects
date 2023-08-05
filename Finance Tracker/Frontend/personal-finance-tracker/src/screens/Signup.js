import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { signup } from '../store/actions/auth'

const Signup = ({ signup, isAuthenticated }) => {
    const history = useNavigate()

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        password: '',
        password2: ''
    })

    const { name, email, mobile, password, password2 } = formData

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = e => {
        e.preventDefault()
        if (password !== password2) {
            console.error("Password do not match");
            // setAlert('Passwords do not match', 'danger');
        } else {
            
            signup(name, email, mobile, password, history)
        }
    }

    if (isAuthenticated) {
        return <Navigate to="/Profile" />
    }

    return (
        <div className='bg-[#2699fb] h-screen flex justify-center items-center' >
            <div className="bg-gray-100 w-[35rem] h-[45rem] my-10 rounded-2xl">
                <div className="m-5">
                    <h1 className="font-bold text-2xl text-purple-800">Signup</h1>
                    <p className="text-xs mt-4 text-purple-800">
                        Welcome, let's create a new account
                    </p>
                    <form action="" className="flex flex-col gap-4 ">
                        <input value={name} onChange={onChange} className="p-2 mt-8 rounded-xl border border-purple-300" type="text" name="name" placeholder="Name" />
                        <input value={email} onChange={onChange} className="p-2 rounded-xl border border-purple-300" type="email" name="email" placeholder="Email" />
                        <input value={mobile} onChange={onChange} className="p-2 rounded-xl border w-full border-purple-300 " type="tel" name="mobile"
                            placeholder="Mobile Number" />
                        <input value={password} onChange={onChange} className="p-2 rounded-xl border w-full border-purple-300 " type="password" name="password"
                            placeholder="Password" />
                        <input value={password2} onChange={onChange} className="p-2 rounded-xl border w-full border-purple-300 " type="password" name="password2"
                            placeholder="Confirm password" />
                        <button onClick={onSubmit} className="bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl text-white py-2 hover:scale-105 duration-300">
                            Signup
                        </button>
                    </form>
                    <div className="mt-5 grid grid-cols-3 items-center">
                        <hr className="border-purple-400" />
                        <p className="text-center text-sm">OR</p>
                        <hr className="border-purple-400" />
                    </div>
                    <button className="bg-white flex mx-auto my-7 border border-purple-300 p-3  px-[8rem] rounded-xl hover:scale-105 duration-300 text-purple-600 ">
                        <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="25px">
                            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                            <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                            <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                            <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                        </svg> <Link to="">Signup with Google</Link>
                    </button>
                    <hr className="border-purple-600 mt-5" />
                    <div className="mt-3 text-xs flex justify-between items-center text-purple-600">
                        <p>Already have an account?</p>
                        <button className="py-2 px-5 bg-white border border-purple-300 rounded-xl hover:scale-110 duration-300"><Link to="/Login">Login</Link></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect( mapStateToProps, { signup } )(Signup)