import axios from "axios";
import React from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateTutorial = () => {
  const tutorial = useLoaderData();
  const { name, email, review, image, language, price, description, _id } =
    tutorial;
  const handleUpdateTutorial = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const image = form.image.value;
    const language = form.language.value;
    const prices = form.prices.value;
    const reviews = form.review.value;
    const review = parseInt(reviews);
    const description = form.description.value;
    const price = parseInt(prices);
    const tutorialData = {
      name,
      email,
      image,
      language,
      price,
      review,
      description,
    };

    Swal.fire({
      title: "Are you sure?",
      text: "Are you want to update?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.patch(`https://assignment-11-server-side-sandy.vercel.app/update-tutorial/${_id}`, tutorialData, {
          headers: {
            "content-type": "application/json"
          },
          withCredentials: true,
        })
          .then(res => {
            const data = res.data;
            if (data.modifiedCount == 1) {
                Swal.fire({
                  title: "Updated Successful!",
                  text: "Your tutorial information has been updated.",
                  icon: "success"
                });
            }
          })
          .catch(error =>{
            Swal.fire({
              title: "Failed!",
              text: error.message,
              icon: "error"})
          })
      }
    });
  };
  return (
    <>
      <section className="max-w-screen-2xl mx-auto px-5 font-Noto-Sans">
      <Helmet>
            <meta charSet="utf-8" />
            <title>FluentZen | Update Tutorials</title>
          </Helmet>
        <div className="py-5 mt-10">
          <h1 className="md:text-4xl text-xl font-bold uppercase text-center">
            Update Your Tutorial
          </h1>
        </div>
        <div className="py-5">
          <p className="text-2xl uppercase mb-5">
            update your tutorial's information
          </p>
          <div className="flex flex-col lg:flex-row gap-10 mb-20">
            <div className="w-full">
              <hr />
              <div>
                <form onSubmit={handleUpdateTutorial}>
                  <div className="flex flex-col md:flex-row gap-5">
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text">name--readOnly</span>
                      </div>
                      <input
                        type="text"
                        name="name"
                        value={name}
                        readOnly
                        placeholder="name"
                        className="input input-bordered w-full"
                        required
                      />
                    </label>
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text">email--read Only</span>
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={email}
                        readOnly
                        placeholder="email"
                        className="input input-bordered w-full"
                        required
                      />
                    </label>
                  </div>

                  <div className="flex flex-col md:flex-row gap-5">
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text">Description*</span>
                      </div>
                      <textarea
                        type="number"
                        name="description"
                        defaultValue={description}
                        rows="10"
                        cols="50"
                        placeholder="write a short description about your tutorial"
                        className="input input-bordered w-full h-32"
                        required
                      />
                    </label>
                  </div>
                  <div className="flex flex-col md:flex-row gap-5">
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text">language*</span>
                      </div>
                      <select
                        name="language"
                        defaultValue={language}
                        className="select select-bordered w-full"
                      >
                        <option disabled selected>
                          please select a language
                        </option>
                        <option>english</option>
                        <option>spanish</option>
                        <option>french</option>
                        <option>german</option>
                        <option>italian</option>
                        <option>chinese</option>
                        <option>korean</option>
                        <option>danish</option>
                        <option>arabic</option>
                        <option>japanese</option>
                        <option>hindi</option>
                        <option>bangla</option>
                        <option>portuguese</option>
                        <option>polish</option>
                        <option>dutch</option>
                        <option>urdu</option>
                        <option>greek</option>
                        <option>serbian</option>
                        <option>hebrew</option>
                        <option>ukrainian</option>
                      </select>
                    </label>
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text">review--read Only</span>
                      </div>
                      <input
                        type="number"
                        name="review"
                        readOnly
                        defaultValue={review}
                        placeholder="hr email"
                        className="input input-bordered w-full"
                        required
                      />
                    </label>
                  </div>
                  <div className="flex flex-col md:flex-row gap-5">
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text">price*</span>
                      </div>
                      <input
                        type="number"
                        name="prices"
                        defaultValue={price}
                        placeholder="$price"
                        className="input input-bordered w-full"
                        required
                      />
                    </label>
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text">image URL*</span>
                      </div>
                      <input
                        type="url"
                        name="image"
                        defaultValue={image}
                        placeholder="tutorial image"
                        className="input input-bordered w-full"
                        required
                      />
                    </label>
                  </div>
                  <hr className="md:my-10 my-5" />
                  <div className="mt-5">
                    <button className="btn bg-gray-900 hover:bg-gray-700 w-full text-white">
                      Update Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UpdateTutorial;
