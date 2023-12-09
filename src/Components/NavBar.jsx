import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import {Link} from "react-router-dom"

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const navLinks = [
    { id: 1, name: "Home", link: "/home" },
    { id: 3, name: "About Us", link: "/about" },
    { id: 4, name: "Careers", link: "/careers" },
    { id: 5, name: "Contact Us", link: "/contact" },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-gray-900 fixed bg-transparent">
      <div>
        <h1 className="text-5xl text-gray-900 font-bold ml-2">
          BarberShop
        </h1>
      </div>
      <ul className="hidden md:flex">
        {navLinks.map(({ name, id, link }) => {
          return (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium text-2xl text-gray-900 hover:scale-110 duration-200"
            >
              <Link to={link}>{name}</Link>
            </li>
          );
        })}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-900 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-transparent text-gray-900">
          {navLinks.map(({ id, name, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl text-gray-900 hover:scale-110 duration-200"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
              >
                <Link onClick={() => setNav(!nav)}>{name}</Link>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
