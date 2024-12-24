import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoLanguageOutline, IoLanguageSharp } from "react-icons/io5";
import { MdOutlineCastForEducation } from "react-icons/md";
import { Link } from "react-router-dom";

const TutorCard = ({ tutor }) => {
  const [learnMore, setLearnMore] = useState(true);
  const handleLearnMore = () => {
    setLearnMore(!learnMore);
  };
  const {
    name,
    email,
    image,
    language,
    price,
    review,
    description,
    user_image,
    _id,
  } = tutor;
  return (
    <>
      <div className="flex gap-5 group font-Noto-Sans">
        <div className="border-2 p-5 hover:border-black lg:w-2/3">
          <div className="gap-5 flex flex-col">
            <div className="flex flex-col md:flex-row gap-5">
              <img
                className="md:w-40 md:h-40 object-cover"
                src={user_image}
                alt=""
              />
              <div className="md:flex justify-between w-full">
                <div>
                  <h1 className="text-xl font-bold">{name}</h1>
                  <p className="flex items-center text-lg gap-1 capitalize">
                    <MdOutlineCastForEducation />
                    Lesson: {language}
                  </p>
                  <p className="flex items-center text-lg gap-1 capitalize">
                    <IoLanguageSharp />
                    Speak: {language}(Native)
                  </p>
                </div>
                <div className="flex text-xl font-bold gap-5">
                  <div>
                    <p className="flex justify-center">
                      <FaStar />
                      {review}
                    </p>
                    <p className="text-sm">review</p>
                  </div>
                  <div>
                    <p>${price}</p>
                    <p className="text-sm">price</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p>
                Details:{" "}
                {learnMore ? (
                  <>{description.slice(0, 300)}</>
                ) : (
                  <>{description}</>
                )}
                <button onClick={handleLearnMore} className="btn btn-link">
                  learn more
                </button>
              </p>
              <div>
                <Link to={`/tutor/details/${_id}`}>
                  <button className="btn bg-gray-800 hover:bg-white hover:text-black hover:border-black text-white">
                    View Details
                  </button>
                </Link>
                <button className="btn bg-gray-800 text-white">
                  Add Tutorials
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="absolute top-0 right-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"> */}
        <div className="w-1/3  transition-opacity duration-300 opacity-0 group-hover:opacity-100 hidden lg:block">
          <div className="border p-5 shadow-xl space-y-2">
            <img className="w-full h-64 object-cover" src={image} alt="" />
            <button className="btn btn-outline w-full">
              view full schedule
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TutorCard;

// {
//     "_id": "6768ae26dc879978702be379",
//     "name": "raselmridha338@gmail.com",
//     "email": "raselmridha338@gmail.com",
//     "image": "https://i.ibb.co.com/98tCRr0/football.jpg",
//     "language": "English",
//     "price": 40,
//     "review": "5",
//     "description": "Hello, my name is Mihlali.\n\n\nI am a TEFL-certified tutor with an honors degree in Consumer Sciences and experience teaching both adults and children. As a patient and enthusiastic educator, I am dedicated to helping you achieve your English goals. Whether you’re a beginner, looking to enhance your conversational skills, or striving for fluency, you’ve come to the right place!\n\n\nExperience\n\n\nWith 8 years of teaching experience and a background in community volunteering since 2016, I have had the pleasure of tutoring a variety of subjects to learners of all ages. I have assisted my students with homework, helped them speak confidently, prepared them for interviews, and improved their communication skills in professional settings.\n\n\nCertifications\n\n\nI hold a TEFL Certificate and a How to Teach a Language Certificate from Preply, where I was awarded a professional tutor badge.\n\n\nTeaching methodologies\n\n\nCommunicative Language Teaching: I focus on real-life communication and interaction.\n\n\nDifferentiated Instruction: Tailored methods to suit different learning styles.\n\n\nInteractive Lessons: Fun and engaging activities using games, discussions, and multimedia.\n\n\nContinuous Assessment: Regular feedback to track progress.\n\n\nAre you ready to take your English skills to the next level? Booking your trial lesson with me is the perfect step toward achieving your language goals! Don’t wait any longer! Let’s embark on this exciting language journey together. Book your trial lesson today, and I will help you make learning English a rewarding and enjoyable experience!",
//     "user_image": "https://media.licdn.com/dms/image/v2/C5603AQGQ9MLeY8Zo0g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1640060509555?e=2147483647&v=beta&t=0S7Th6UKnz1YdWBhMSgsEpiM5KQR9fczuzq1ekk-8lQ"
// }
