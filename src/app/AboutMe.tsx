import React from "react";

const AboutMe: React.FC = () => {
  return (
    <div className="flex-1 h-screen text-[#FFFDD0] flex items-start justify-center pt-16">
      <div className="max-w-4xl text-center px-6">
        <h1 className="text-4xl font-bold mb-6">About Me</h1>
        <p className="text-2xl leading-relaxed">
          Hello! My name is Parker Goby, I am currently a Software Engineer II
          at Whisker. I have a ton of interests, so I decided to make a website
          that enhances my experience with them. Feel free to click the
          components below or the Navbar on the left to learn more!
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
