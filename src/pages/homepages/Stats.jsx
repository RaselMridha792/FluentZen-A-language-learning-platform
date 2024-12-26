import React, { useEffect, useState } from "react";

const Stats = () => {
  const [tutors, setTutors] = useState([]);
  const [users, setUsers]= useState([]);

  useEffect(()=>{
    fetch("https://assignment-11-server-side-sandy.vercel.app/get-users")
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  useEffect(()=>{
    fetch("https://assignment-11-server-side-sandy.vercel.app/find-tutors")
    .then(res => res.json())
    .then(data => setTutors(data))
  },[])

  const reviewCount = tutors.map(tutor => tutor.review);
  let sum = 0
  for(let review of reviewCount){
    sum = sum + review;
  }
  return (
      <div className="stats shadow w-full my-20">
        <div className="stat">
          <div className="stat-figure text-secondary">
          </div>
          <div className="stat-value">{tutors?.length}+</div>
          <div className="stat-title">experienced tutors</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
          </div>
          <div className="stat-value">{sum}</div>
          <div className="stat-title">total reviews</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
          </div>
          <div className="stat-value">14+</div>
          <div className="stat-title">Languages</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-secondary">
          </div>
          <div className="stat-value">{users?.length}+</div>
          <div className="stat-title">active user</div>
        </div>
      </div>
  );
};

export default Stats;
