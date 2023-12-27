import React from "react";
import Button from "../Components/Button";
import error from "../Assets/Images/Error.png"

const ErrorPage = () => {

  return (
    <div className="pt-24 ">
        <div className="py-4 px-4">
            <Button buttonName="Return Home" pathName="/" />
        </div>
      {/* <div className="text-center pb-7 pt-2 text-6xl font-logo font-bold">
        <p>ERROR!</p>
        <p className="text-4xl">Page Not Found!</p>
      </div> */}
      <div className="flex justify-center items-center h-1/3">
        <img src={error} alt="" className="w-1/2 h-1/3" />
      </div>
    </div>
  );
};

export default ErrorPage;
