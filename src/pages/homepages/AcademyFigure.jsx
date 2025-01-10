import React from "react";
import { Link } from "react-router-dom";

const AcademyFigure = () => {
  return (
    <>
      <section className="mt-20 py-10 w-full font-Figtree bg-emerald-300 text-white">
        <div className="max-w-screen-2xl mx-auto px-5">
          <div>
            <h1 className="text-4xl font-bold text-black py-5 text-center">
              The course that makes a difference
            </h1>
            <div className="grid grid-cols1 md:grid-cols-3 gap-5 mt-5 text-black">
              <div
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center"
              >
                <img
                  src="https://i.ibb.co.com/zRMrFMy/01-Academy-Contenuti-140x140.png"
                  alt=""
                />
                <p className="text-2xl font-bold">Contents</p>
                <h1 className="lg:w-1/2 text-center pb-3">
                  An intensive, effective way to learn a language through
                  speaking.
                </h1>
                <Link to="/find-tutors" className="btn bg-black text-white border-none">
                  find more
                </Link>
              </div>
              <div
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center"
              >
                <img
                  src="https://i.ibb.co.com/LzVPbqx/01-Academy-Flessibilita-140x140.png"
                  alt=""
                />
                <p className="text-2xl font-bold">Flexible</p>
                <h1 className="lg:w-1/2 text-center pb-3">
                  An interactive, self-study course to approach speaking lessons
                  with more confidence.
                </h1>
                <Link to="/find-tutors" className="btn bg-black text-white border-none">
                  find more
                </Link>
              </div>
              <div
                className="flex flex-col items-center justify-center"
              >
                <img
                  src="https://i.ibb.co.com/kx0nnLF/01-Academy-Progressi-140x140.png"
                  alt=""
                />
                <p className="text-2xl font-bold">Progress</p>
                <h1 className="lg:w-1/2 text-center pb-3">
                  A complete formula for an all-inclusive English training
                  approach.
                </h1>
                <Link to="/find-tutors" className="btn bg-black text-white border-none">
                  find more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AcademyFigure;
