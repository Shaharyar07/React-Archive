import React, { useRef } from "react";
import Dp from "./../img/PortfolioDp.jpeg";
import frontEnd from "./../img/front-end.png";
import react from "./../img/react.png";
import mernStack from "./../img/programmer.png";

import emailjs from "emailjs-com";

import { ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../index.css";
const Home = () => {
  const [showAlert, setShowAlert] = React.useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "sherry248",
        "template_3a06cjn",
        form.current,
        "user_QOwVAlbqC09xPJu7qldHe"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setShowAlert(true);
  };
  return (
    <div>
      {showAlert && (
        <div
          className="alert alert-success alert-dismissible fade show fixed-top"
          role="alert"
        >
          <strong>Email has been sent Successfully</strong> I'll reach out to
          you ASAP!
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() => setShowAlert(false)}
          ></button>
        </div>
      )}
      <section className="hero d-sm-flex ms-0 bg-dark text-light p-3 text center text-sm-start">
        <div className="container d-sm-flex">
          <div className="mt-5 w-75 ">
            <div className="autoWritter">
              <h1 className="autoWrite-text fw-bold">
                Hey! I am <strong className="text-warning">Shaharyar</strong>{" "}
              </h1>
              <p className=" fw-bold my-3">
                Currently pursuing comprehensive four-year course of study in
                Bachelor of science in software engineering
              </p>
              <Link
                className="scale-up-top btn btn-outline-danger btn-lg fw-bold mt-3"
                to="/contact"
              >
                Hire Me!!
              </Link>
            </div>
          </div>
          <div className=" d-flex justify-content-end">
            <img
              className="img-fluid  w-50  m-3   w-sm-25 d-none d-md-block "
              src={Dp}
              alt=""
              srcset=""
            />
          </div>
        </div>
      </section>
      <section className="container border shadow-sm mb-5  rounded py-5 my-5">
        <h1 className="fw-bold text-center">My Skills</h1>
        <div className="container">
          <div className="row row-cols-3 d-sm-flex row-sm-cols-1 p-5 mt-4">
            <div className="col">
              <p className="fw-bold">HTML</p>
              <ProgressBar variant="info" now={94} label="94%" />
            </div>
            <div className="col">
              <p className="fw-bold">CSS</p>
              <ProgressBar variant="primary" now={88} label="88%" />
            </div>
            <div className="col">
              <p className="fw-bold">JavaScript</p>
              <ProgressBar variant="danger" now={85} label="85%" />
            </div>
            <div className="col">
              <p className="fw-bold">React Js</p>
              <ProgressBar variant="info" now={85} label="85%" />
            </div>
            <div className="col">
              <p className="fw-bold">Mern Stack</p>
              <ProgressBar variant="warning" now={65} label="65%" />
            </div>
            <div className="col">
              <p className="fw-bold">Bootstrap</p>
              <ProgressBar variant="primary" now={95} label="95%" />
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4">
              MERN Stack Developer
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
              Being a web developer is always difficult. It’s a creative job,
              but one where usually you aren’t the primary stakeholder.
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-red-500 inline-flex"></div>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-5 flex-shrink-0">
                <img src={frontEnd} alt="" srcset="" />
              </div>
              <div className="flex-grow">
                <h2 className=" text-lg title-font font-medium mb-3">
                  Front End Web Developer
                </h2>
                <p className="leading-relaxed text-base">
                  Front-end web development, also known as client-side
                  development is the practice of producing HTML, CSS and
                  JavaScript for a website br or Web Application so that a user
                  can see and interact with them directly. It is also called UI
                  development among some developers.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-5 flex-shrink-0">
                <img src={react} alt="" srcset="" />
              </div>
              <div className="flex-grow">
                <h2 className=" text-lg title-font font-medium mb-3">
                  React Developer
                </h2>
                <p className="leading-relaxed text-base">
                  React makes it simple and easy to build websites and apps,
                  create UI test cases, reuse existing codes on website to its
                  mobile counterpart, and improve UI and performance of web
                  applications. It’s versatile enough to use where JavaScript is
                  required
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-5 flex-shrink-0">
                <img src={mernStack} alt="" srcset="" />
              </div>
              <div className="flex-grow">
                <h2 className="text-lg title-font font-medium mb-3">
                  Mern Stack
                </h2>
                <p className="leading-relaxed text-base">
                  MERN stands for MongoDB, Express, React, Node, after the four
                  key technologies that make up the stack. MongoDB - document
                  database. Express(.js) - Node.js web framework. React(.js) - a
                  client-side JavaScript framework. Node(.js) - the premier
                  JavaScript web server.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="flex mt-6 justify-center">
          <div className="w-75 h-1 rounded-full bg-pink-500 inline-flex"></div>
        </div>
        <form
          action="submit"
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-wrap -m-2"
        >
          <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
            <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
              <h1 className="title-font text-dark font-medium text-3xl ">
                People don't care about what you say, they care about what you
                build.
              </h1>
              <p className="leading-relaxed mt-4">
                It´s better to wait for a productive programmer to become
                available than it is to wait for the first available programmer
                to become productive.
              </p>
            </div>
            <div className="lg:w-2/6 md:w-1/2  rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
              <h2
                style={{
                  color: "#2b4162",
                }}
                className=" text-center fw-bold font-medium title-font mb-5"
              >
                Contact Me
              </h2>
              <div className="relative mb-4">
                <label for="full-name" className="leading-7 text-sm">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label for="email" className="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button type="submit" className="btn btn-outline-warning">
                Contact
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Home;
