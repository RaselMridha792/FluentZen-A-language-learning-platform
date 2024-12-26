import { Link } from "react-router-dom";
import Banner from "../../components/common/Banner";
import Categories from "../../components/layouts/Categories";
import Stats from "./Stats";
import { motion } from "motion/react";
import React from "react";
import { Helmet } from "react-helmet";

const HomePage = () => {
  return (
    <>
      <Banner></Banner>
      <Helmet>
        <meta charSet="utf-8" />
        <title>FluentZen | Home</title>
      </Helmet>
      <section className="max-w-screen-2xl mx-auto px-5 ">
        <Stats></Stats>
        <div className="my-10">
          <Categories></Categories>
        </div>
        <div className="my-20">
          <h1 className="md:text-6xl text-3xl font-Noto-Sans text-center">
            Our Solution
          </h1>
          <div className="grid grid-cols1 md:grid-cols-3 gap-5 my-10">
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center"
            >
              <img
                src="https://i.ibb.co.com/vvdpKfj/00-Homepage-Lezioni-140x140.png"
                alt=""
              />
              <h1 className="lg:w-1/2 text-center py-3">
                An intensive, effective way to learn a language through
                speaking.
              </h1>
              <Link to="/find-tutors" className="btn bg-green-500 ">
                find more
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center"
            >
              <img
                src="https://i.ibb.co.com/jzcYkdK/00-Homepage-Academy-140x140.png"
                alt=""
              />
              <h1 className="lg:w-1/2 text-center py-3">
                An interactive, self-study course to approach speaking lessons
                with more confidence.
              </h1>
              <Link to="/find-tutors" className="btn bg-green-500 ">
                find more
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center"
            >
              <img
                src="https://i.ibb.co.com/qkXdYcs/00-Homepage-Blended-140x140.png"
                alt=""
              />
              <h1 className="lg:w-1/2 text-center py-3">
                A complete formula for an all-inclusive English training
                approach.
              </h1>
              <Link to="/find-tutors" className="btn bg-green-500 ">
                find more
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="my-20 px-5 flex flex-col gap-5 items-center justify-between md:flex-row font-Noto-Sans">
          <motion.div
            initial={{ y: -100, opacity: 10 }}
            whileInView={{ y: 0, opacity: 100 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl ">
              {" "}
              The first step towards{" "}
              <span className="text-green-400">fluentZen</span>
            </h1>
            <p className="lg:w-1/2 py-5 text-gray-400">
              An e-learning course designed to keep your staff’s engagement
              levels high, featuring over 250 adaptive videos to provide a
              cutting-edge self-study course.
              <br />
              For those who initially need to reinforce the basics of the
              English language, the Academy provides a dynamic and interactive
              way to approach the speaking lessons with more confidence.
            </p>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 10 }}
            whileInView={{ y: 0, opacity: 100 }}
            transition={{ duration: 1 }}
          >
            <img src="https://i.ibb.co.com/M6J8dwF/Reporting-04.png" alt="" />
          </motion.div>
        </div>
        <div className="my-20">
          <h1 className="md:text-5xl text-center text-3xl font-Noto-Sans font-bold pb-10">
            What say users about fluentZen{" "}
          </h1>
          <motion.div
           initial={{ y: -100, opacity: 10 }}
           whileInView={{ y: 0, opacity: 100 }}
           transition={{ duration: 1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
            <div className="card bg-gray-700 text-white font-Figtree  ">
              <div className="card-body">
                <div className="avatar">
                  <div className="w-12 rounded-full">
                    <img src="https://i.ibb.co.com/PznYkWJ/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-ta.jpg" />
                  </div>
                </div>
                <p>
                  "This platform transformed my career! The content is
                  well-structured, and the mentors are incredibly supportive.
                  Highly recommend it to anyone looking to upskill."
                </p>
                <h2 className="card-title">— Samantha Johnson</h2>
              </div>
            </div>
            <div className="card bg-gray-700 text-white font-Figtree  ">
              <div className="card-body">
                <div className="avatar">
                  <div className="w-12 rounded-full">
                    <img src="https://i.ibb.co.com/6tD0QLJ/avatar-2oe5auz0p0f.jpg" />
                  </div>
                </div>
                <p>
                  "The interactive lessons and real-world projects made learning
                  so engaging. I've gained the confidence to apply for my dream
                  job!"
                </p>
                <h2 className="card-title">— Rajesh Kumar</h2>
              </div>
            </div>
            <div className="card bg-gray-700 text-white font-Figtree  ">
              <div className="card-body">
                <div className="avatar">
                  <div className="w-12 rounded-full">
                    <img src="https://i.ibb.co.com/RyKH5cD/istockphoto-1288538088-612x612.jpg" />
                  </div>
                </div>
                <p>
                  "Exceptional experience! The resources are comprehensive, and
                  the community is always there to help. It's more than just a
                  website; it's a journey."
                </p>
                <h2 className="card-title">— Emily Chen</h2>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
