import React, { useContext, useState } from "react";
import { FaStar } from "react-icons/fa";
import { HiCheckBadge } from "react-icons/hi2";
import {  IoLanguageSharp } from "react-icons/io5";
import { MdOutlineCastForEducation } from "react-icons/md";
import { Link } from "react-router-dom";
import { ColorContext } from "../../components/hook/ColorProvider";

const TutorCard = ({ tutor }) => {
  const {changes} = useContext(ColorContext)
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
  } = tutor;
  return (
    <>
      <div className="flex gap-5 group font-Noto-Sans">
        <div className={`border-2 p-5 hover:border-black lg:w-2/3 `}>
          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex gap-3">
              <img
                className="md:w-44 md:h-44 h-32 w-32 object-cover "
                src={user_image}
                alt=""
              />
              <div className="md:hidden justify-between w-full">
                <div>
                  <h1 className="text-xl font-bold flex items-center gap-1">
                    {name}{" "}
                    <span>
                      <HiCheckBadge />
                    </span>
                  </h1>
                  <p className="flex items-center gap-1 capitalize">
                    <MdOutlineCastForEducation />
                    Lesson: {language}
                  </p>
                  <p className="flex items-center  gap-1 capitalize">
                    <IoLanguageSharp />
                    Speak: {language}(Native)
                  </p>
                </div>
                <div className="flex text-xl font-bold gap-5">
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
              </div>
            </div>
            <div className="md:w-3/4">
              <div className="flex flex-col gap-2">
                <div className="md:flex justify-between hidden w-full">
                  <div>
                    <h1 className="text-xl font-bold flex items-center gap-1">
                      {name}{" "}
                      <span>
                        <HiCheckBadge />
                      </span>
                    </h1>
                    <button className={`${changes?'bg-gray-700':'bg-blue-100'} p-1 rounded-md text-xs font-bold`}>
                      Professional
                    </button>
                    <p className="flex items-center text-lg gap-1 capitalize">
                      <MdOutlineCastForEducation />
                      Lesson: {language}
                    </p>
                    <p className="flex items-center text-lg gap-1 capitalize">
                      <IoLanguageSharp />
                      Speak: {language}(Native)
                    </p>
                  </div>
                  <div className="flex text-xl font-bold gap-5">
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
                </div>
                <div>
                  <p className="">{description.slice(0, 300)}</p>
                  <div className="mt-2">
                    <Link to={`/tutor/details/${_id}`}>
                      <button className={`btn bg-emerald-400 hover:bg-emerald-200 text-black`}>
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* right side  */}
        <div className="w-1/3  transition-opacity duration-300 opacity-0 group-hover:opacity-100 hidden lg:block">
          <div className="border p-5 shadow-xl space-y-2">
            <img className="w-full h-52 object-cover" src={image} alt="" />
            <Link
              to={`/tutor/details/${_id}`}
              className="btn bg-emerald-400 capitalize hover:bg-emerald-600 w-full text-black"
            >
              view full schedule
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TutorCard;