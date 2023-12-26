import React from "react";
import Button from "../Components/Button";
import GoogleMap from "../Components/GoogleMap";

const Contact = () => {
  return (
    <div className="pt-24">
      <div className="text-center pb-7 pt-2 text-6xl font-logo font-bold">
        Contact Us!
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 ">
        <form method="POST" className="flex flex-col items-center">
          <input
            type="text"
            name="name"
            placeholder="Type your Name"
            className="p-2 bg-transparent border-3 border-black  w-3/4 border-2 rounded-md text-gray-300"
          />
          <input
            type="text"
            name="email"
            placeholder="Type your Email"
            className="p-2 bg-transparent border-3 border-black  w-3/4 border-2 my-4 rounded-md text-gray-300"
          />
          <textarea
            name="message"
            placeholder="Enter your message here"
            rows="10"
            className="p-2 w-3/4 border-2 border-black rounded-md text-black font-bold"
          ></textarea>
          <div className="py-5">
            <Button buttonName="Contact Us">Contact Me</Button>
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
