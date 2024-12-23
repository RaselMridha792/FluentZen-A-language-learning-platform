import React, { useEffect, useState } from "react";
import TutorCard from "./TutorCard";

const FindTutors = () => {

    const [tutors, setTutors] = useState([])
    useEffect(()=>{
        const loadData = async()=>{
            const response = await fetch('http://localhost:5000/find-tutors')
            const data = await response.json();
            setTutors(data)
        }
        loadData()
    },[])
  return (
    <>
      <section className="max-w-screen-2xl mx-auto px-5">
        <div className="my-10 flex flex-col md:flex-row gap-10 items-center justify-between">
          <h1 className="text-2xl md:text-4xl font-bold">
            Find Your Best Tutors For Learning Language
          </h1>
          <label className="input input-bordered md:w-1/3 w-full flex items-center gap-2">
            <input type="text" className="grow" placeholder="Search Language" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
        <hr />
        <div className="my-20">
          <h1 className="text-3xl font-bold">{tutors.length} English teachers that match your needs</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {tutors.map(tutor => <TutorCard key={tutor._id} tutor={tutor}></TutorCard>)}
          </div>
        </div>
      </section>
    </>
  );
};

export default FindTutors;
