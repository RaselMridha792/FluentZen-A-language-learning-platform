import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Categories = () => {
  const category = [
    {
      language: "english",
      icons: "https://img.icons8.com/?size=100&id=4682&format=png&color=000000",
    },
    {
      language: "spanish",
      icons:
        "https://img.icons8.com/?size=100&id=H_YaYackFhdL&format=png&color=000000",
    },
    {
      language: "french",
      icons:
        "https://img.icons8.com/?size=100&id=49070&format=png&color=000000",
    },
    {
      language: "german",
      icons:
        "https://img.icons8.com/?size=100&id=9NmZk6gmbUyW&format=png&color=000000",
    },
    {
      language: "italian",
      icons:
        "https://img.icons8.com/?size=100&id=40917&format=png&color=000000",
    },
    {
      language: "chinese",
      icons:
        "https://img.icons8.com/?size=100&id=i0YiC1u6jFZb&format=png&color=000000",
    },
    {
      language: "arabic",
      icons:
        "https://img.icons8.com/?size=100&id=r6Lu64bgSeEz&format=png&color=000000",
    },
    {
      language: "portuguese",
      icons:
        "https://img.icons8.com/?size=100&id=AGaqoOyHCMmi&format=png&color=000000",
    },
    {
      language: "japanese",
      icons: "https://img.icons8.com/?size=100&id=4697&format=png&color=000000",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5 font-Figtree">
        {category.map((singleCategory, index) => (
            <div key={index} className="flex items-center justify-center gap-2 border py-5 px-10">
              <img
                className="w-12"
                src={singleCategory.icons}
                alt=""
              />
              <Link
                to={`/find-tutors/${singleCategory.language}`}
                className="flex items-center justify-between w-full"
              >
                <h1 className="md:text-3xl text-xl font-bold capitalize">
                  {singleCategory.language} Tutors
                </h1>
                <p className="text-4xl">
                  <FaArrowRight />
                </p>
              </Link>
            </div>
        ))}
      </div>
    </>
  );
};

export default Categories;
