import React, { useContext } from "react";
import { UserContext } from "../../context/AuthContext";
import Swal from "sweetalert2";
import axios from "axios";
import { Helmet } from "react-helmet";
import { ColorContext } from "../../components/hook/ColorProvider";

const AddTutorials = () => {
  const { user } = useContext(UserContext);
  const {changes} = useContext(ColorContext);
  const handleAddTutorial = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const image = form.image.value;
    const language = form.language.value;
    const prices = form.prices.value;
    const reviews = form.reviews.value;
    const review = parseInt(reviews);
    const description = form.description.value;
    const price = parseInt(prices);
    const user_image = user.photoURL;
    const tutorialData = {
      name,
      email,
      image,
      language,
      price,
      review,
      description,
      user_image,
    };
    axios.post("https://assignment-11-server-side-sandy.vercel.app/add-tutorials", tutorialData, {
      headers: {
        "content-type": "application/json"
      },
      withCredentials: true,
    })
      .then(res => {
        const data = res.data;
        if(data.acknowledged == true){
          Swal.fire({
            title: "Added SuccessFull",
            text: "Successfully added tutorials",
            icon: "success"
          });
        }
      })
      .catch(error =>{
        Swal.fire({
          title: "Error",
          text: error.message,
          icon: "error"
        });
      })
  };
  return (
    <>
      <section className={`max-w-screen-2xl mx-auto px-5 font-Noto-Sans ${changes?'text-white':'text-black'}`}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>FluentZen | Add Tutorials</title>
      </Helmet>
        <div className="py-5 mt-10">
          <h1 className="md:text-4xl text-xl font-bold uppercase text-center">
            Add a tutorial
          </h1>
          <p className="py-3 md:text-xl text-center">
            find best matched student for you
          </p>
        </div>
        <div className="py-5">
          <p className="text-2xl uppercase mb-5">
            tell us about you and your tutorials
          </p>
          <div className="flex flex-col lg:flex-row gap-10 mb-20">
            <div className="lg:w-2/3">
              <hr />
              <div>
                <form onSubmit={handleAddTutorial}>
                  <div className="flex flex-col md:flex-row gap-5">
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text">name*</span>
                      </div>
                      <input
                        type="text"
                        name="name"
                        defaultValue={user?.displayName}
                        placeholder="name"
                        className="input input-bordered w-full"
                        required
                      />
                    </label>
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text">email*</span>
                      </div>
                      <input
                        type="email"
                        name="email"
                        defaultValue={user?.email}
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
                      <select name="language" className="select select-bordered w-full">
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
                        <span className="label-text">review*</span>
                      </div>
                      <input
                        type="number"
                        name="reviews"
                        defaultValue={0}
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
                        placeholder="tutorial image"
                        className="input input-bordered w-full"
                        required
                      />
                    </label>
                  </div>
                  <hr className="md:my-10 my-5" />
                  <div className="mt-5">
                    <button className="btn bg-emerald-500 hover:bg-emerald-600 w-full text-white">
                      submit tutorial
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* faq section  */}
            <div className="space-y-5 md:w-1/3">
              <div
                tabIndex={0}
                className="collapse collapse-arrow border-base-300 bg-base-200 border"
              >
                <div className="collapse-title text-xl font-medium">
                  1. Who can add tutorials on this platform?
                </div>
                <div className="collapse-content">
                  <p>
                    Only registered users with verified accounts can add
                    tutorials. This helps ensure that the content shared is
                    authentic and meets the quality standards of our community.
                  </p>
                </div>
              </div>
              <div
                tabIndex={0}
                className="collapse collapse-arrow border-base-300 bg-base-200 border"
              >
                <div className="collapse-title text-xl font-medium">
                  2. What types of tutorials can I upload?
                </div>
                <div className="collapse-content">
                  <p>
                    You can upload text-based lessons, video tutorials, or
                    interactive content focusing on language learning topics
                    such as grammar, vocabulary, pronunciation, or cultural
                    insights. Tutorials should align with the platform’s content
                    guidelines.
                  </p>
                </div>
              </div>
              <div
                tabIndex={0}
                className="collapse collapse-arrow border-base-300 bg-base-200 border"
              >
                <div className="collapse-title text-xl font-medium">
                  3. How do I make my tutorial engaging for learners?
                </div>
                <div className="collapse-content">
                  <p>
                    Use clear and concise explanations, include real-life
                    examples, and add multimedia elements like images, audio, or
                    videos. Additionally, incorporating quizzes or exercises can
                    make the tutorial more interactive and engaging.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddTutorials;
