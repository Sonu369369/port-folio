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
          Full-stack developers are proficient in both frontend and backend development, allowing them to handle all aspects of web development. They can create entire web applications from start to finish, making them versatile contributors to a development team. Full-stack development requires a deep understanding of both client-side and server-side technologies.
        </p>

        <br />

        <p className="text-xl">
          Frontend development focuses on creating the visual and interactive elements that users see and interact with on a website or web application. This involves using languages such as HTML (Hypertext Markup Language), CSS
        </p>
      </div>
    </div>
  );
};

export default About;
