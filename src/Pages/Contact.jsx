import React from "react";
import GoogleMap from "../Components/GoogleMap";

const Contact = () => {
  return (
    <div className="pt-24">
      <div className="text-center pb-7 pt-2 text-6xl font-logo font-bold">
        Contact Us!
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 ">
        <form
          method="POST"
          action="https://getform.io/f/26e7d445-bbd1-4425-beab-de6248c879bc"
          className="flex flex-col items-center"
        >
          <input
            type="text"
            name="name"
            placeholder="Type your Name"
            className="p-2 bg-transparent border-3 border-black  w-3/4 border-2 rounded-md text-black"
          />
          <input
            type="text"
            name="email"
            placeholder="Type your Email"
            className="p-2 bg-transparent border-3 border-black  w-3/4 border-2 my-4 rounded-md text-black"
          />
          <textarea
            name="message"
            placeholder="Enter your message here"
            rows="10"
            className="p-2 w-3/4 border-2 border-black rounded-md text-black font-bold"
          ></textarea>
          <div className="py-5">
            <button type="submit" className='py-1 px-4 rounded-lg bg-black text-white font-bold text-xl items-center text-center hover:text-gray-400'>Contact Us</button>
          </div>
        </form>
        <div>
          <GoogleMap />
        </div>
      </div>
    </div>
  );
};

export default Contact;
