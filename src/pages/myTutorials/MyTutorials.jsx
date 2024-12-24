import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyTutorials = () => {
  const { user } = useContext(UserContext);
  const [tutorials, setTutorials] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/my-tutorials?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setTutorials(data);
      });
  }, [user?.email]);

  const handleDeleteTutorial = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this Tutorial!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/delete-tutorial/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            Swal.fire({
              title: "Deleted!",
              text: "Your Tutorial has been deleted.",
              icon: "success",
            });
          });
      }
    });
  };
  return (
    <>
      <div>
        <div className="max-w-screen-2xl mx-auto px-5 font-Noto-Sans">
          <h1 className="text-3xl font-bolt uppercase my-10">
            Your All Tutorials
          </h1>
          <hr />
          <div className="overflow-x-auto mb-20 mt-5">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Language, review</th>
                  <th>Description</th>
                  <th>$ price</th>
                  <th>actions</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {tutorials.map((tutorial) => (
                  <tr key={tutorial._id}>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={tutorial.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{tutorial.name}</div>
                          <div className="text-sm opacity-50">
                            United States
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {tutorial.language}
                      <br />
                      <span className="badge badge-ghost badge-sm">
                        review: {tutorial.review} stars
                      </span>
                    </td>
                    <td className="lg:w-1/3">
                      {tutorial.description.slice(0, 100)}...{" "}
                      <Link to={`/tutor/details/${tutorial._id}`}>
                        <button className="btn btn-link">learn more</button>
                      </Link>
                    </td>
                    <td>${tutorial.price}</td>
                    <th className="flex gap-3">
                      <button className="btn btn-warning btn-xs">Update</button>
                      <button
                        onClick={() => handleDeleteTutorial(tutorial._id)}
                        className="btn btn-error btn-xs"
                      >
                        delete
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

export default MyTutorials;
