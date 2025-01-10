import React from "react";
import banner1 from "../../assets/banner/banner1.jpg";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const Banner = () => {
  return (
    <>
      <div className="bg-emerald-300 font-Noto-Sans md:py-36 py-20  text-black">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:w-8/12 md:w-10/12 gap-10 mx-auto px-5">
          <motion.div
            initial={{ y: -100, opacity: 10 }}
            whileInView={{ y: 0, opacity: 100 }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <h1 className="text-4xl font-bold lg:w-3/4">
              Master skills faster with expert guidance.
            </h1>
            <p className="lg:w-3/4">
              Master Skills Faster with Expert Guidance – Your Path to Success
              Starts Here!
            </p>
            <Link to="/find-tutors">
              <button className="btn bg-gray-900 text-white border-none px-10 text-xl hover:bg-gray-600">
                Get Started <FaLongArrowAltRight />
              </button>
            </Link>
          </motion.div>
          <motion.div
            initial={{ y: -100, opacity: 10 }}
            whileInView={{ y: 0, opacity: 100 }}
            transition={{ duration: 1 }}
            className=""
          >
            <img className="md:w-[600px] w-96 rounded-2xl" src={banner1} />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Banner;
