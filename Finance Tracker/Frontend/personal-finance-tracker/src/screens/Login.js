import React, { useState, useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../store/actions/auth";

const Login = ({ login, isAuthenticated }) => {
  const history = useNavigate()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault()  //Doesn't refresh
    login(email, password, history)
  }

  if (isAuthenticated) {
    return <Navigate to="/profile" />
  }

  return (
    <div className=" bg-[#2699fb] h-screen flex justify-center items-center">
      <div className="bg-gray-100 w-[35rem] h-[45rem] flex justify-center items-center p-3 my-10 rounded-2xl">
        <div className="m-5 w-[30rem]">
          <h1 className="font-bold text-2xl text-purple-800">Login</h1>
          <p className="text-xs mt-4 text-purple-800">
            If you are already Link member, easily log in
          </p>
          <form action="" className="flex flex-col gap-4 ">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 mt-8 rounded-xl border border-purple-300"
              type="email"
              name="email"
              placeholder="Email"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 rounded-xl border w-full border-purple-300 "
              type="password"
              name="password"
              placeholder="Password"
            />
            <button onClick={onSubmit} className="bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl text-white py-2 hover:scale-105 duration-300" >
              Login
            </button>
          </form>
          <div className="mt-5 grid grid-cols-3 items-center">
            <hr className="border-purple-400" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-purple-400" />
          </div>
          <button className="bg-white flex mx-auto my-7 border border-purple-300 p-3  px-[8.3rem] rounded-xl hover:scale-105 duration-300 text-purple-600 ">
            <svg
              className="mr-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="25px"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              />
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              />
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              />
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              />
            </svg>{" "}
            <Link to="">Login with Google</Link>
          </button>
          <div className="text-purple-600 text-sm mt-10 hover:text-blue-500">
            <Link to="#">Forgot your password?</Link>
          </div>
          <hr className="border-purple-600 mt-5" />
          <div className="mt-3 text-xs flex justify-between items-center text-purple-600">
            <p>Don't have an account?</p>
            <button className="py-2 px-5 bg-white border border-purple-300 rounded-xl hover:scale-110 duration-300">
              <Link to="/Signup">Signup</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { login })(Login)
