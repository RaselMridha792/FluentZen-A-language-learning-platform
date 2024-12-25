import { useContext, useState } from "react";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/AuthContext";
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

const SignIn = () => {
  const [eye, SetEye] = useState(false);
  const {handleLogin, handleSignInGoogle} = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    handleLogin(email, password)
    .then(result =>{
        toast.success('login successfull');
        navigate(location?.state ? location.state : '/')
    })
    .catch(error=>{
        toast.error(error.message);
    })
  };
  const handleEye = () => {
    SetEye(!eye);
  };

  
  const handleSignInWithGoogle = () =>{
    handleSignInGoogle()
    .then(result=>{
      toast.success('login successfull');
      navigate(location?.state ? location.state : '/')
    })
    .catch(error =>{
      toast.error(error.message);
    })
  }
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <ToastContainer></ToastContainer>
        <div className="card bg-base-100 lg:w-1/4 px-5 py-5 shadow-2xl">
          <form onSubmit={handleSignIn} className="card-body">
            <h1 className="text-center text-3xl font-bold">Login In Now</h1>
            <div>
              <button onClick={handleSignInWithGoogle} className="btn btn-outline w-full">Sign In With Google</button>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password*</span>
              </label>
              <input
                type={eye ? "text" : "password"}
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <div onClick={handleEye} className="absolute bottom-4 right-4">
                {eye ? <FaEyeSlash /> : <FaRegEye />}
              </div>
            </div>
              <label className="label">
                <Link to="/resetPassword" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
              <p className="text-center py-3">
                don't have any account? please {"  "}
                <Link className="text-red-500" to="/signUp">
                  SignUp Now
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
