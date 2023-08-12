import React, { useState } from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  const [isImageHovered, setIsImageHovered] = useState(false);

  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have 6 month of experience building and designing software.
            Currently, I love to work on web applications using technologies
            like React, Tailwind, Next.js, and GraphQL.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div
          className={`relative overflow-hidden rounded-2xl ${
            isImageHovered ? "shadow-lg" : "shadow-md"
          } transition-shadow duration-300`}
          onMouseEnter={() => setIsImageHovered(true)}
          onMouseLeave={() => setIsImageHovered(false)}
        >
          <img
            src={HeroImage}
            alt="my profile"
            className={`w-2/3 md:w-full ${
              isImageHovered ? "scale-105" : "scale-100"
            } transition-transform duration-300 ${
              isImageHovered ? "opacity-80" : "opacity-100"
            }`}
            style={{
              animation: "fadeIn 1s ease-in-out",
              transformOrigin: "center",
              cursor: "pointer",
            }}
          />
          {isImageHovered && (
            <div
              className="absolute inset-0 rounded-2xl border-4"
              style={{
                borderImage: "linear-gradient(45deg, #f06, #9f6) 1",
                animation: "borderGradientAnimation 1s infinite alternate",
              }}
            />
          )}
          {isImageHovered && (
            <div
              className="absolute inset-0 rounded-2xl border-4"
              style={{
                borderImage: "linear-gradient(45deg, #9f6, #06f) 1",
                animation:
                  "borderGradientAnimationHover 0.5s infinite alternate",
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
