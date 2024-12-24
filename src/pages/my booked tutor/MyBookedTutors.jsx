import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyBookedTutors = () => {
  const tutors = useLoaderData();
  const { _id, tutor_id, language, price, tutorEmail, email } = tutors;
  console.log(tutors);

  const handleReview = (tutor_id) =>{
    console.log(tutor_id)
    fetch(`http://localhost:5000/tutor-review/${tutor_id}`,{
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify()
    })
    .then(res=> res.json())
    .then(data =>{
        if(data.modifiedCount == 1){
            Swal.fire({
                title: "Successfull?",
                text: "review given successfully",
                icon: "success"
              });
        }
    })
    
  }
  return (
    <>
      <div>
        <div className="max-w-screen-2xl mx-auto px-5 font-Noto-Sans">
          <h1 className="text-2xl font-bold uppercase my-10">
            {tutors.length} tutors you booked
          </h1>
          <hr />
          <div className="overflow-x-auto mb-20 mt-5">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Language</th>
                  <th>tutorial Details</th>
                  <th>$ price</th>
                  <th>Give Review</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {tutors.map((tutorial) => (
                  <tr key={tutorial._id}>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-20 w-20">
                            <img
                              src={tutorial.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{tutorial.name}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {tutorial.language}
                    </td>
                    <td className="lg:w-1/3">
                      <Link to={`/tutor/details/${tutorial._id}`}>
                        <button className="btn btn-link">view details</button>
                      </Link>
                    </td>
                    <td>${tutorial.price}</td>
                    <th className="flex gap-3">
                        <button onClick={()=> handleReview(tutorial.tutor_id)} className="btn btn-success">
                          give review
                        </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyBookedTutors;
