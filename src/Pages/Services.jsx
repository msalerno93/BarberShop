import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      name: "Regular Haircut",
      price: 30,
    },
    {
      id: 2,
      name: "Beard Trim",
      price: 15,
    },
    {
      id: 3,
      name: "Kids Haircut",
      price: 25,
    },
    {
      id: 4,
      name: "Fade",
      price: 20,
    },
    {
      id: 5,
      name: "Hot Shave",
      price: 20,
    },
    {
      id: 6,
      name: "Tape Up",
      price: 25,
    },
    {
      id: 7,
      name: "Senior Citizens",
      price: 25,
    },
    {
      id: 8,
      name: "Owner Special",
      price: 45,
    },
    {
      id: 9,
      name: "Touch Up",
      price: 18,
    },
  ];

  return (
    <div className="pt-24 pb-10">
      <div className="text-center pt-5 text-6xl font-logo font-bold">
        Services We Offer
      </div>
      <div className="grid gap-2 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 text-center pt-16">
      {services.map(({ name, id, price }) => {
       return  <div className="shadow-lg mx-12 my-5 shadow-black rounded-3xl py-10 hover:scale-110 duration-200" key={id}>
        <p className="text-2xl font-bold">{name}</p>
        <p className="text-2xl">${price}</p>
       </div>;
      })}
      </div>
    </div>
  );
};

export default Services;
