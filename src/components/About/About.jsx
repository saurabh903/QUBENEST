import React from "react";
import CarPng from "../../assets/pg.jpg";

const About = () => {
  return (
    <div className="relative dark:bg-dark bg-slate-100 sm:min-h-[600px] sm:grid sm:place-items-center duration-300 bg-[url('././assets/pg.jpg')] bg-cover bg-center">
      {/* Overlay to reduce opacity */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center rounded">
          <div data-aos="slide-right" data-aos-duration="1500">
            <img
              src={CarPng}
              alt=""
              className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <h1
                data-aos="fade-up"
                className="text-3xl sm:text-4xl font-bold font-serif"
              >
                About us
              </h1>
              <p data-aos="fade-up" className="leading-8 tracking-wide text-white">
                Our PG is the ideal choice for students, offering a perfect blend of comfort, convenience, and a study-friendly environment. 
                With modern amenities, safe surroundings, and a supportive community, we ensure that students can focus on their studies while enjoying a home-like atmosphere.
              </p>
              <button data-aos="fade-up" className="button-outline">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
