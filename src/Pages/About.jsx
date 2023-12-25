import React from "react";

const About = () => {
  const img =
    "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/the-old-city-barber-shop-in-black-and-white-greg-mimbs.jpg";

  return (
    <div className="pt-24">
      <div className="text-center pt-5 text-6xl font-logo font-bold">
        A Little Bit About Us...
      </div>
      <div className="grid grid-cols-1 text-center pt-10 pb-5">
        <div className="flex justify-center items-center">
          <img src={img} alt="" className="w-2/4 h-11/12 pb-5" />
        </div>
        <div className="text-2xl">
          <p className="px-20">
          Welcome to Jimmy's Barbershop, where tradition meets style!
          Established in 1965, we take pride in being a family-owned and
          operated haven for all your grooming needs. With decades of
          experience, our skilled barbers have been dedicated to delivering
          top-notch services that stand the test of time.
          </p>
          <p className="px-20 pt-3">
          Here we specialize in a variety of haircuts, ranging from classic
          styles to contemporary trends. Our talented team is well-versed in the
          art of beard trims, ensuring your facial hair is groomed to
          perfection. Beyond haircuts and trims, we offer personalized hair
          styling services to bring out your unique personality and flair.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
