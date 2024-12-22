import { useContext, useState } from "react";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/AuthContext";
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';


const SignUp = () => {
    const {handleSignUp, handleUpdateProfile} = useContext(UserContext);
    const [eye, SetEye] = useState(false);
    const [errorMessage, setErrorMessage] = useState('')
    const passwordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*()]).{6,}$/;
    const navigate = useNavigate();
  const handleSignUpemail = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    if(password.length < 6){
        setErrorMessage('password mast be 6 caracter or longer');
        return;
    }
    if(!passwordRegex.test(password)){
        setErrorMessage("password mast be at least one uppercase, lowercase, letter and special caracters");
        return;
    }
    setErrorMessage('')

    const userInfo = { name, email, password, photo };

    handleSignUp(email, password)
    .then(result =>{

      handleUpdateProfile({displayName: name, photoURL: photo})
      .then(() =>{
        toast.success("account created successfully");
        navigate('/')
      })
      .catch(error =>{
        console.log(error.message)
      })
    })
    .catch(error=>{
        toast.error(error.message)
    })
  };


  const handleEye = ()=>{
    SetEye(!eye)
  }
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <ToastContainer></ToastContainer>
        <div className="card bg-base-100 md:w-1/4 px-5 py-5 shadow-2xl">
          <form onSubmit={handleSignUpemail} className="card-body">
            <h1 className="text-center text-3xl font-bold">Sign Up Now</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your full name"
                className="input input-bordered"
                required
              />
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">photo Url*</span>
              </label>
              <input
                type="url"
                name="photo"
                placeholder="your photo url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password*</span>
              </label>
              <input
                type={eye?"text":"password"}
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <div onClick={handleEye} className="absolute bottom-4 right-4">
                {eye?<FaEyeSlash />: <FaRegEye />}
               
                
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
              <p className="text-center py-3">
                have an account? please{" "}
                <Link className="text-red-500" to="/signIn">
                  Login Now
                </Link>
              </p>
            </div>
            <p className="text-red-500">{errorMessage}</p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
