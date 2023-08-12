import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          A seasoned MERN Stack Developer proficient in building robust and
          scalable web applications. Expertise in crafting efficient front-end
          interfaces using React and responsive design principles. Profound
          knowledge of Node.js and MongoDB for creating dynamic and performant
          back-end systems. Passionate about leveraging modern technologies to
          create exceptional user experiences
        </p>

        <br />

        <p className="text-xl">
          I possess 6 months of hands-on experience in MERN Stack development
          and have served as a dedicated Full Stack intern for an additional 6
          months. Skilled in creating dynamic web applications using React,
          Node.js, Express, and MongoDB. Committed to delivering efficient and
          innovative solutions.
        </p>
      </div>
    </div>
  );
};

export default About;
