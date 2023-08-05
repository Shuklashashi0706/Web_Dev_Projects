import React, { Fragment, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'

import { signup } from '../store/actions/auth'
import Spinner from '../components/Spinner/Spinner'

const SignUp = ({ isAuthenticated, signup }) => {
  const history = useNavigate()

  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    gender: '',
    role: '',
    usn: '',
    collegename: '',
    password: '',
    password2: ''
  })

  const { name, email, mobile, gender, role, usn, collegename, password, password2 } = formData

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = e => {
    e.preventDefault()
    if (password !== password2) {
      console.error("Password do not match");
    } else {
      setLoading(true)
      signup(name, email, mobile, gender, role, usn, collegename, password, history)
    }
  }

  if (isAuthenticated) {
    return <Navigate to="/profile" />
  }

  if (loading) {
    return <Spinner />
  }

  return (
    <Fragment>
      <section className="flex flex-col  items-center  h-screen " style={{ backgroundColor: "#004f58" }}>
        <h1 className='text-white text-3xl mt-6'>Sign Up</h1>
        <p className="text-white text-xl my-3 ">
          <i className="fas fa-user "></i> Register Your Account
        </p>
        <form className='flex flex-col gap-6 mt-5' onSubmit={onSubmit} >
          <div className='flex justify-between' >
            <select className='rounded-2xl h-11 px-4 w-40 mr-2' value={role} onChange={onChange} name="role" id="role">
              <option value="">Role</option>
              <option value="student">Student</option>
              <option value="admin">Admin</option>
            </select>
            <select className='rounded-2xl h-11 px-4 w-40' value={gender} onChange={onChange} name="gender" id="gender">
              <option value="">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>
            <input name='name' value={name} onChange={onChange} type="text" placeholder='Full Name' className='pr-5 pl-5 py-2 rounded-2xl mr-3'></input>
            <input name='mobile' value={mobile} onChange={onChange} type="number" placeholder='Mobile Number' className='pr-5 pl-5 py-2 rounded-2xl'></input>
          </div>

          <div>
            <input name='email' value={email} onChange={onChange} type="email" placeholder='Email' className='pr-5 pl-5 py-2 rounded-2xl mr-3'></input>
            <input name='usn' value={usn} onChange={onChange} type="text" placeholder='USN Number' className='pr-5 pl-5 py-2 rounded-2xl'></input>
          </div>
          <input name='collegename' value={collegename} onChange={onChange} type="text" placeholder='College Name' className='pr-5 pl-5 py-2 rounded-2xl'></input>
          <input name='password' value={password} onChange={onChange} type="password" placeholder='Password' className='pr-5 pl-5 py-2 rounded-2xl'></input>
          <input name='password2' value={password2} onChange={onChange} type="password" placeholder='Confirm Password' className='pr-5 pl-5 py-2 rounded-2xl'></input>
          <p className='text-white'>Already a member?<span><Link className='text-blue-400' to="/sign-in"> Login</Link></span></p>
          <input type='submit' className='btn btn-primary'></input>
        </form>
      </section>
    </Fragment>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { signup })(SignUp)
