import React, { useContext } from "react";
import { FaCheckCircle, FaStar, FaSuperpowers } from "react-icons/fa";
import { IoLanguageSharp } from "react-icons/io5";
import { MdEmail, MdOutlineCastForEducation } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import { UserContext } from "../../context/AuthContext";

const TutorialDetails = () => {
  const tutorials = useLoaderData();
  const {user} = useContext(UserContext);
  const {
    name,
    email,
    image,
    language,
    price,
    review,
    description,
    user_image,
    _id,
  } = tutorials;

  const handleBookTutor = () =>{
    const bookedTutor =  {tutor_id:_id, image:user_image, language, price, tutorEmail:email, email:user.email}

    fetch('http://localhost:5000/booked-tutor',{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(bookedTutor)
    })
    .then(res => res.json())
    .then(data=> {
        console.log(data)
    })
  }
  return (
    <>
      <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row lg:gap-10 font-Noto-Sans px-5">
        <div className="lg:w-2/3 p-5 mt-10">
          <div className=" gap-5 flex flex-col md:flex-row">
            <img className="w-44 h-44 object-cover" src={user_image} alt="" />
            <div className="space-y-2">
              <h1 className="text-xl font-bold">{name}</h1>
              <p className="flex items-center text-lg gap-1 capitalize">
                <MdOutlineCastForEducation />
                teaches Language: {language}
              </p>
              <p className="flex items-center gap-2">
                <MdEmail />
                Email: {email}
              </p>
              <p className="flex items-center text-lg gap-1 capitalize">
                <IoLanguageSharp />
                Speak: {language}
              </p>
              <p>
                🔥TOP 1% Best {language} Tutor 🔥Certified Full-Time Teacher🔥6
                years of experience 🔥Teaching over 6000+ hours 🔥SuperTutor
              </p>
              <p className="flex items-center gap-2">
                <FaCheckCircle />
                Trials are 100% refundable
              </p>

              <hr />
            </div>
          </div>
          <div className="pt-5">
            <h1 className="font-bold text-xl">details:</h1>
            <p className="text-gray-500">{description}</p>
          </div>
        </div>
        <div className="lg:w-1/3 mt-10">
          <div className="border rounded-lg p-5 shadow-lg">
            <img className="w-full h-64 object-cover" src={image} alt="" />
            <div className="flex text-xl font-bold gap-5 my-5">
              <div>
                <p className="flex justify-center">
                  <FaStar />
                  {review}
                </p>
                <p className="text-sm">review</p>
              </div>
              <div>
                <p>${price}</p>
                <p className="text-sm">price</p>
              </div>
            </div>
            <div className="space-y-2">
              <button onClick={handleBookTutor} className="btn bg-gray-800 hover:bg-white hover:text-black hover:border-black text-white w-full">
                Book Now
              </button>
            </div>
            <div className="py-5">
              <p className="flex font-bold gap-2 items-center">
                <FaSuperpowers />
                Super popular
              </p>
              <p>11 new contacts and 11 lesson bookings in the last 48 hours</p>
              <p>Usually responds in 1 hour</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto font-Noto-Sans mb-10 px-5">
        <div className="join join-vertical w-full mt-20">
          <h1 className="text-3xl font-bold py-5">FAQ:</h1>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              1. What is your teaching approach?
            </div>
            <div className="collapse-content">
              <p>
                Our teaching approach is interactive and learner-focused. We use
                real-life scenarios, multimedia resources, and personalized
                lesson plans to make language learning engaging and effective
                for every student.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              2. Do you provide classes for beginners?
            </div>
            <div className="collapse-content">
              <p>
                Yes, we have tailored courses for all levels, from complete
                beginners to advanced learners. Our beginner courses focus on
                basic grammar, vocabulary, and conversational skills to help you
                build a strong foundation.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              3. How are the classes conducted?
            </div>
            <div className="collapse-content">
              <p>
                Our classes are flexible and can be conducted online or
                in-person, depending on your preference. We use a mix of
                interactive lessons, assignments, and real-world practice to
                make learning engaging and effective.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TutorialDetails;
