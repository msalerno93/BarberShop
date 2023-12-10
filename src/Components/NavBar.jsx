import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import {Link} from "react-router-dom"
import img from "../Assets/Images/Logo.png"

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const navLinks = [
    { id: 1, name: "Home", link: "/home" },
    { id: 3, name: "About Us", link: "/about" },
    { id: 4, name: "Careers", link: "/careers" },
    { id: 5, name: "Contact Us", link: "/contact" },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-gray-800 fixed bg-gray-100">
      <div className="inline-flex">
          <img src={img} alt="barber" width={75} className="pt-2" />
        <h1 className="text-5xl text-black font-bold font-logo ml-2 pt-4">
          Jimmy's Barbershop
        </h1>
      </div>
      <ul className="hidden lg:flex">
        {navLinks.map(({ name, id, link }) => {
          return (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-bold text-2xl text-gray-900 hover:scale-110 duration-200"
            >
              <Link to={link}>{name}</Link>
            </li>
          );
        })}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-900 lg:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-transparent text-gray-900">
          {navLinks.map(({ id, name, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl font-bold text-gray-900 hover:scale-110 duration-200"
            >
              <button
                onClick={() => setNav(!nav)}
              >
                <Link to={link} onClick={() => setNav(!nav)}>{name}</Link>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
