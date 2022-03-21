import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "../index.css";
const Contact = () => {
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
    <section className=" body-font relative">
      {showAlert && (
        <div
          className="alert alert-success fixed-top alert-dismissible fade show"
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
      <div className="contact container px-5 py-5 mx-auto">
        <div className=" flex flex-col text-center w-full">
          <h1 className="text-light fw-bold sm:text-3xl text-2xl font-medium title-font mb-4">
            Contact Me
          </h1>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div>
            <form
              action="submit"
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-wrap -m-2"
            >
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="name" className="leading-7 text-light fw-bold  ">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full  bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="email" className="leading-7 text-light fw-bold ">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full  bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    for="message"
                    className="leading-7  text-light fw-bold"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full  bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className=" text-center p-2 w-full">
                <button type="submit" className="fw-bold btn btn-outline-light">
                  Contact
                </button>
              </div>
            </form>
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
              <a
                rel="noopener noreferrer"
                target="_blank"
                className="text-light lead"
                href="mailto:Shaharyar.tariq248@gmail.com"
              >
                Shaharyar.tariq248@gmail.com
              </a>
              <p className="text-light fw-bold leading-normal my-5">Faisalabad,Punjab Pakistan.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
