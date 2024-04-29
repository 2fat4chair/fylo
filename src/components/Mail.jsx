import React from "react";

function Mail() {
  return (
    <div className="bg-[#585989]">
      <div className="max-w-[1440px] p-6 flex flex-col bg-[#585989] md:flex-row md:gap-20 md:mx-auto md:py-20">
        <div className="md:w-[50%] md:mr-40">
          <h1 className="text-center text-2xl font-bold text-[#F6F6FE] py-4 md:text-left md:text-3xl">
            Get early access today
          </h1>
          <p className="text-xl text-center text-[#F6F6FE] md:text-left md:text-xl">
            It only takes a minut to sign up on our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
        </div>
        <div className="flex flex-col  gap-4 w-[75%] mx-auto py-8 md:w-[60%]">
          <input
            type="email"
            placeholder="email@example.com"
            className="w-full p-4 bg-[#F6F6FE] border border-[#585989] rounded"
          />
          <button className="w-full p-4 bg-[#3065F8] text-[#F6F6FE] rounded font-bold md:w-[40%] md:">
            Get Started For Free
          </button>
        </div>
      </div>
    </div>
  );
}

export default Mail;
