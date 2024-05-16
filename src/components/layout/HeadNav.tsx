import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
const HeadNav: React.FunctionComponent = () => {
  return (
    <div className="flex h-[22%] flex-col">
      <div className="flex flex-row justify-between bg-[#F4F8FB]  px-[6rem]">
        <div className="flex flex-col">
          <span className="text-[#7E7E7E]">Emergency Help?</span>
          <span className="text-[1.5rem] font-semibold text-[#F36562]">
            +1234- 5678-9
          </span>
        </div>
        <div className="flex flex-row items-center space-x-[2rem] ">
          <FaFacebookF className="h-[1.2rem] w-[1.2rem] text-[#2C4EC5]" />
          <FaInstagram className="h-[1.2rem] w-[1.2rem] text-[#BE17A3]" />
          <FaXTwitter className="h-[1.2rem] w-[1.2rem] text-[#328BDD]" />
          <FaYoutube className="h-[1.2rem] w-[1.2rem] text-[#B51111]" />
        </div>
      </div>
      <div className="flex h-[3rem] flex-row justify-between px-[6rem]">
        <div className="flex items-center">
          <img
            src="healthcare logo 2_Mesa de trabajo 1 1.png"
            className="h-[60%] w-full"
            alt=""
          />
        </div>
        <div className="flex flex-row items-center space-x-[4rem] text-lg">
          <span className="font-semibold">Hone</span>
          <span className="font-semibold">About Us</span>
          <span className="flex items-center font-semibold">
            Admin <FaCaretDown />
          </span>
        </div>
      </div>
    </div>
  );
};
export default HeadNav;
