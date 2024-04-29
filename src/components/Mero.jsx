import React from "react";
import bgDesktop from "../assets/bg-curve-desktop.svg";
import Arrow from "../assets/icon-arrow.svg";
import Quotes from "../assets/icon-quotes.svg";
import Avatar from "../assets/avatar-testimonial.jpg";
import Human from "../assets/illustration-2.svg";

function Mero() {
  return (
    <div className="mt-36">
      <img src={bgDesktop} alt="anan" className="w-full" />
      <div className="py-20 bg-[#f8f8fe]">
        <div className="bg-[#f8f8fe] max-w-[1440px] mx-auto px-6 flex flex-col-reverse md:grid-cols-2 md:grid md:place-items-center md:gap-16">
          <div>
            <div>
              <h1 className="text-center text-xl font-bold text-[#070439] py-8 pt-16 md:text-left md:text-5xl">
                Stay productive, wherever you are
              </h1>
              <p className="text-center text-xl pb-6  md:text-left md:text-2xl">
                Never let locaiton be an issue when accessing your files. Fylo
                has you covered for all of your file storage needs.
              </p>
              <p className="text-center text-xl pb-6 md:text-left md:pb-0 md:text-2xl">
                Securely share files and folders with friends, family and
                colleagues for live collaboration. No email attachments
                required!
              </p>
              <div className="py-6 flex items-center justify-center md:justify-start md:py-0">
                <a
                  href="/"
                  className="my-4 pb-1 border-b-2 border-[#3C9F8F] text-[#3C9F8F]"
                >
                  See how Fylo works
                  <span className="pl-2">
                    <img src={Arrow} alt="/" className="inline w-6" />
                  </span>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg lg:mt-6 xl:w-[55%]">
              <div className="p-8">
                <img src={Quotes} alt="/" className="w-5 pb-3" />
                <p className="text-[#070439]">
                  Fylo has improved our team productivity by an order of
                  magnitude. Since making the switch our team has become a
                  well-oiled collaboration machine.
                </p>
                <div className="flex items-center pt-8">
                  <img src={Avatar} alt="/" className="rounded-full w-11" />
                  <div className="pl-4">
                    <h1 className="text-[#070439] font-bold">Kyle Burton</h1>
                    <p className="">Founder & CEO, Huddle</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <img src={Human} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mero;
