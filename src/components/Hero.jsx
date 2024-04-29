import React from "react";
import Human from "../assets/illustration-1.svg";

function Hero() {
  return (
    <div className="flex flex-col max-w-[1440px] mx-auto m-10 mt-24 px-6 lg:flex-row-reverse lg:items-center lg:gap-6">
      <div className="flex-1">
        <img src={Human} alt="/" />
      </div>

      <div className="flex-1">
        <h1 className="text-center font-bold text-4xl text-[#070439] py-6 lg:text-left lg:text-5xl">
          All your files in one secure location, accessible anywhere.
        </h1>
        <p className="text-center text-xl mb-6 px-6 lg:text-left lg:px-0 lg:text-2xl">
          Fylo stores your most important files in one secure location. Access
          them wherever you need, share and collaborate with friends, family,
          and co-workers.
        </p>
        <div className="grid lg:grid-cols-4 gap-5">
          <input
            type="email"
            placeholder="Enter your email..."
            className="w-full p-4 border border-[#070439] rounded lg:col-span-2"
          />
          <button className="w-full p-4 bg-[#3065F8] text-[#F6F6FE] rounded">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
