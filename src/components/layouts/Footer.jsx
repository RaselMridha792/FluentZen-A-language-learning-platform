import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/AuthContext";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <section className="bg-gray-800 font-Noto-Sans">
        <footer className="footer max-w-screen-2xl mx-auto text-white p-10">
          <div>
            <div>
              <h1 className="text-4xl font-bold">FluentZen</h1>
              <p>your learning school</p>
              <p className="py-3">
                Unlock the world, one word at a time. Start your language
                journey with us today!
              </p>
            </div>
          </div>
          <nav>
            <h6 className="footer-title">NavLinks</h6>
            <Link to="/find-tutors">find tutors</Link>
            <Link to={`/my-booked-tutor/${user?.email}`}>My Booked Tutor</Link>
            <Link to="/add-tutorials">Add Tutorials</Link>
            <Link to="/my-tutorials">My Tutorials</Link>
          </nav>
          <nav>
            <h6 className="footer-title">Social</h6>
            <div className="grid grid-flow-col gap-4">
              <a href="https://x.com/mridh68174" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a href="https://linkedin.com/in/raselmridha" target="_blank" className="text-2xl">
                <FaLinkedin></FaLinkedin>
              </a>
              <a href="https://www.facebook.com/rasel.mirdha.397" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </nav>
        </footer>
        <hr />
        <footer className="footer footer-center text-white p-4">
          <aside>
            <p>
              Copyright © {new Date().getFullYear()} - All right reserved by
              Rasel Mridha
            </p>
          </aside>
        </footer>
      </section>
    </>
  );
};

export default Footer;
