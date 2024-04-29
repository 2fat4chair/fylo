import React from "react";
import FyloLogo from "../assets/logo.svg";

function Navbar() {
  return (
    <div className="max-w-[1440px] md:mx-auto flex items-center justify-between p-6">
      <div className="w-32">
        <img src={FyloLogo} alt="Landing page logo" />
      </div>

      <ul className="flex items-center justify-center gap-4 md:gap-8 text-[#070439] md:text-xl ">
        <li>Features</li>
        <li>Team</li>
        <li>Sign In</li>
      </ul>
    </div>
  );
}

export default Navbar;
