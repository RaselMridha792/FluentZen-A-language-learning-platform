import React, { useContext, useEffect, useState } from "react";
import { motion } from "motion/react";
import { ColorContext } from "../../components/hook/ColorProvider";

const Stats = () => {
  const [tutors, setTutors] = useState([]);
  const [users, setUsers] = useState([]);
  const {changes} = useContext(ColorContext)

  useEffect(() => {
    fetch("https://assignment-11-server-side-sandy.vercel.app/get-users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  useEffect(() => {
    fetch("https://assignment-11-server-side-sandy.vercel.app/find-tutors")
      .then((res) => res.json())
      .then((data) => setTutors(data));
  }, []);

  const reviewCount = tutors.map((tutor) => tutor.review);
  let sum = 0;
  for (let review of reviewCount) {
    sum = sum + review;
  }
  return (
    <motion.div
      initial={{ y: 100, opacity: 10 }}
      whileInView={{ y: 0, opacity: 100 }}
      transition={{ duration: 1 }}
      className={`stats shadow w-full mt-20 mb-10 ${changes?'text-white bg-gray-600':'text-black'}`}
    >
      <div className="stat">
        <div className="stat-figure text-secondary"></div>
        <div className="stat-value">{tutors?.length}+</div>
        <div className="">experienced tutors</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-secondary"></div>
        <div className="stat-value">{sum}</div>
        <div className="">total reviews</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-secondary"></div>
        <div className="stat-value">14+</div>
        <div className="">Languages</div>
      </div>
      <div className="stat">
        <div className="stat-figure text-secondary"></div>
        <div className="stat-value">{users?.length}+</div>
        <div className="">active user</div>
      </div>
    </motion.div>
  );
};

export default Stats;
