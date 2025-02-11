import { useContext, useState } from "react";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/AuthContext";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { Helmet } from "react-helmet";

const SignUp = () => {
  const { handleSignUp, handleUpdateProfile, handleSignInGoogle } =
    useContext(UserContext);
  const [eye, SetEye] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*()]).{6,}$/;
  const navigate = useNavigate();
  const handleSignUpemail = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    if (password.length < 6) {
      setErrorMessage("password mast be 6 caracter or longer");
      return;
    }
    if (!passwordRegex.test(password)) {
      setErrorMessage(
        "password mast be at least one uppercase, lowercase, letter and special caracters"
      );
      return;
    }
    setErrorMessage("");

    const userInfo = { name, email, photo };

    handleSignUp(email, password)
      .then((result) => {
        handleUpdateProfile({ displayName: name, photoURL: photo })
          .then(() => {
            toast.success("account created successfully");
            fetch(
              "https://assignment-11-server-side-sandy.vercel.app/save-user",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(userInfo),
              }
            )
              .then((res) => res.json())
              .then((data) => {
                console.log("user created successfully", data);
              });
            navigate("/");
          })
          .catch((error) => {
            console.log(error.message);
          });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleEye = () => {
    SetEye(!eye);
  };

  const handleSignInWithGoogle = () => {
    handleSignInGoogle()
      .then((result) => {
        toast.success("login successfull");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <Helmet>
          <meta charSet="utf-8" />
          <title>FluentZen | Sign Up</title>
        </Helmet>
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
            <div className="form-control mt-6">
              <button className="btn bg-emerald-500  hover:bg-emerald-600 text-white">Sign Up</button>
              <div className="mt-5">
                <button
                  onClick={handleSignInWithGoogle}
                  className="btn border-emerald-500 hover:bg-emerald-500 hover:text-white text-emerald-500 bg-white  w-full"
                >
                  Sign In With Google
                </button>
              </div>
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
