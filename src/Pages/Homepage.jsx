import React from "react";
import Button from '../Components/Button'

const img =
  "https://thefader-res.cloudinary.com/private_images/w_2400,c_limit,f_auto,q_auto:best/40380002_WEB_gmcgws/levels-barbershop-new-york-ny.jpg";

const img2 =
  "https://thebkcircus.com/wp-content/uploads/2021/02/You_Next_Final_Images_CRP_0064-1920x1284.jpg";
const Homepage = () => {
  return (
    <div>
      <div className="pt-28 text-center w-full h-full items-center px-24 grid lg:grid-cols-2 md:grid-cols-1">
        <img
          src={img}
          alt="homepageimg"
          className="w-full rounded-lg shadow-2xl shadow-black"
        />
        <div className="sm:pt-10 md:pt-5 pt-5 px-10">
          <div className="font-logo font-bold text-7xl">Jimmy's Barbershop</div>
          {/* Welcome to Jimmy's Barbershop, where tradition meets style!
          Established in 1965, we take pride in being a family-owned and
          operated haven for all your grooming needs. With decades of
          experience, our skilled barbers have been dedicated to delivering
          top-notch services that stand the test of time. */}
          <div className="text-2xl">Established 1965</div>
          <div className="pt-2 pb-2">
            <div className="text-xl">56 125th Street</div>
            <div className="text-xl">Brooklyn, NY 11350</div>
            <div className="text-xl">555-555-5555</div>
          </div>
          <Button buttonName="Contact Us" pathName="/contact"/>
        </div>
      </div>
      <div className="py-10 text-center w-full h-full items-center px-24 grid lg:grid-cols-2 md:grid-cols-1">
        <div className="sm:pt-10 md:pt-10 px-5 pt-5 py-10 text-2xl">
          Here we specialize in a variety of haircuts, ranging from classic
          styles to contemporary trends. Our talented team is well-versed in the
          art of beard trims, ensuring your facial hair is groomed to
          perfection. Beyond haircuts and trims, we offer personalized hair
          styling services to bring out your unique personality and flair.
        </div>
        <img
          src={img2}
          alt="homepageimg"
          className="w-full rounded-lg shadow-2xl shadow-black"
        />
      </div>
    </div>
  );
};

export default Homepage;
