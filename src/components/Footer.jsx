import React from "react";
import FyloLogo from "../assets/logo.svg";
import Phone from "../assets/icon-phone.svg";
import Email from "../assets/icon-email.svg";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-[#070439]">
      <div className="max-w-[1440px] mx-auto py-28 text-white px-6 md:gap-28 grid md:grid-cols-4 ">
        <div>
          <img src={FyloLogo} alt="/" />
          <ul className="mt-6">
            <li className="flex items-center gap-4 py-2">
              <img src={Phone} alt="/" />
              Phone: +1-543-123-4567
            </li>
            <li className="flex items-center gap-4 py-2">
              <img src={Email} alt="/" />
              example@fylo.com
            </li>
          </ul>
        </div>

        <ul className="my-7 w-auto">
          <li className="py-1">About Us</li>
          <li className="py-1">Jobs</li>
          <li className="py-1">Press</li>
          <li className="py-1">Blog</li>
        </ul>

        <ul className="my-7">
          <li className="py-1">Contact Us</li>
          <li className="py-1">Terms</li>
          <li className="py-1">Privacy</li>
        </ul>

        <ul className="my-7">
          <li className="flex justify-center gap-4">
            <FaFacebook size={23} />
            <FaTwitter size={23} />
            <FaInstagram size={23} />
          </li>
        </ul>
        {/* <div className="flex justify-center gap-4">
          <FaFacebook size={23} />
          <FaTwitter size={23} />
          <FaInstagram size={23} />
        </div> */}
      </div>
    </div>
  );
}

export default Footer;
