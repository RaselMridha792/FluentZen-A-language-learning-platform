import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ColorContext } from "../../components/hook/ColorProvider";

const AcademyFigure = () => {
  const {changes} = useContext(ColorContext)
  return (
    <>
      <section className={`pb-20 w-full font-Figtree ${changes?'text-white':'text-black'}`}>
        <div className="max-w-screen-2xl mx-auto px-5">
          <div>
            <h1 className="md:text-5xl text-3xl font-bold py-5 text-center">
              The course that makes a difference
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
              <div
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col border p-5 rounded-lg shadow-sm hover:shadow-xl duration-300 items-center justify-center"
              >
                <img
                  src="https://i.ibb.co.com/zRMrFMy/01-Academy-Contenuti-140x140.png"
                  alt=""
                />
                <p className="text-2xl font-bold">Contents</p>
                <h1 className="text-center pb-3">
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
                className="flex flex-col border hover:shadow-xl duration-300 p-5 rounded-lg shadow-sm items-center justify-center"
              >
                <img
                  src="https://i.ibb.co.com/LzVPbqx/01-Academy-Flessibilita-140x140.png"
                  alt=""
                />
                <p className="text-2xl font-bold">Flexible</p>
                <h1 className=" text-center pb-3">
                  An interactive, self-study course to approach speaking lessons
                  with more confidence.
                </h1>
                <Link to="/find-tutors" className="btn bg-black text-white border-none">
                  find more
                </Link>
              </div>
              <div
                className="flex border hover:shadow-xl duration-300 p-5 rounded-lg shadow-sm flex-col items-center justify-center"
              >
                <img
                  src="https://i.ibb.co.com/kx0nnLF/01-Academy-Progressi-140x140.png"
                  alt=""
                />
                <p className="text-2xl font-bold">Progress</p>
                <h1 className=" text-center pb-3">
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
