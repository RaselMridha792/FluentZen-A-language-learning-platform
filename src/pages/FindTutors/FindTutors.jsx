import React, { useContext, useEffect, useState } from "react";
import TutorCard from "./TutorCard";
import { useLoaderData } from "react-router-dom";
import Select from "react-select";
import { Helmet } from "react-helmet";
import { ColorContext } from "../../components/hook/ColorProvider";

const FindTutors = () => {
  const [tutors, setTutors] = useState([]);
  const categoryTutor = useLoaderData();
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [searchLanguage, setSearchLanguage] = useState(null);

  const {changes} = useContext(ColorContext)
  useEffect(() => {
    if(searchLanguage){
      const loadData2 = async () =>{
        const response = await fetch(`https://assignment-11-server-side-sandy.vercel.app/find-tutors/${searchLanguage}`)
        const data = await response.json()
        console.log(data)
        setTutors(data);
      }
      loadData2()
    }
    else if (categoryTutor) {
      setTutors(categoryTutor);
    } else{
      const loadData = async () => {
        const response = await fetch(
          "https://assignment-11-server-side-sandy.vercel.app/find-tutors"
        );
        const data = await response.json();
        setTutors(data);
      };
      loadData();
    }
  }, [categoryTutor, searchLanguage]);

  // for implementing search features

  const languages = [
    {
      value: "english",
      label: "english",
    },
    {
      value: "spanish",
      label: "spanish",
    },
    {
      value: "french",
      label: "french",
    },
    {
      value: "german",
      label: "german",
    },
    {
      value: "italian",
      label: "italian",
    },
    {
      value: "chinese",
      label: "chinese",
    },
    {
      value: "arabic",
      label: "arabic",
    },
    {
      value: "portuguese",
      label: "portuguese",
    },
    {
      value: "japanese",
      label: "japanese",
    },
    {
      value: "polish",
      label: "polish",
    },
    {
      value: "dutch",
      label: "dutch",
    },
    {
      value: "urdu",
      label: "urdu",
    },
    {
      value: "greek",
      label: "greek",
    },
    {
      value: "serbian",
      label: "serbian",
    },
  ];

  const handleChangeLanguage = (selectedOption) => {
    setSelectedLanguage(selectedOption);
    setSearchLanguage(selectedOption.value)
  };
  return (
    <>
      <section className={`max-w-screen-2xl ${changes?'text-white':'text-black'} mx-auto px-5`}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>FluentZen | Find Tutors</title>
      </Helmet>
        <div className="my-10 flex flex-col md:flex-row gap-10 items-center justify-between">
          <h1 className="text-2xl md:text-4xl font-bold">
            Find Your Best Tutors For Learning Language
          </h1>
          <div className="p-4 md:w-1/3 w-full">
            <Select
              options={languages}
              value={selectedLanguage}
              onChange={handleChangeLanguage}
              placeholder="search for tutor"
              className="text-black"
              isClearable
            ></Select>
            {selectedLanguage && (
              <>
                <div>
                  <p>search for: {selectedLanguage.label}</p>
                </div>
              </>
            )}
          </div>
        </div>
        <hr />
        <div className="my-20">
          <h1 className="text-3xl font-bold">
            {tutors.length} tutors that match your needs
          </h1>
          <div className="mt-10 flex gap-5">
            <div className="space-y-5">
              {tutors.map((tutor) => (
                <TutorCard key={tutor._id} tutor={tutor}></TutorCard>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FindTutors;
