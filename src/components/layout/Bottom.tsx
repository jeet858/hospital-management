import React from "react";
import { MdLocationOn } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
const Bottom: React.FunctionComponent = () => {
  return (
    <div className="flex h-fit w-full flex-col">
      <div className=" flex h-[53vh] w-full flex-row justify-around bg-[#E8F6FF] pt-[3rem] ">
        <span className="flex flex-col space-y-[1rem]">
          <span className="pb-5 text-2xl ">By Spaciality</span>
          <span className="text-xl text-[#7E7E7E]">
            <a href="#">Allergy and Immunology</a>
          </span>
          <span className="text-xl text-[#7E7E7E]">
            <a href="">Anesthesiology</a>
          </span>
          <span className="text-xl text-[#7E7E7E]">
            <a href="">Diagnostic Radiology</a>
          </span>
          <span className="text-xl text-[#7E7E7E]">
            <a href="">Emergency Medicine</a>
          </span>
          <span className="text-xl text-[#7E7E7E]">
            <a href="">Surgery</a>
          </span>
          <span className="text-xl text-[#696868]">
            <a href="">View All</a>
          </span>
        </span>

        <span className="flex flex-col space-y-[1rem]">
          <span className="pb-5 text-2xl ">
            <a href="">Doctors In US</a>
          </span>
          <span className="text-xl text-[#7E7E7E]">
            <a href="#">Allergy and Immunology in US</a>
          </span>
          <span className="text-xl text-[#7E7E7E]">
            <a href="">Anesthesiology In Us</a>
          </span>
          <span className="text-xl text-[#7E7E7E]">
            <a href="">Diagnostic Radiology in US</a>
          </span>
          <span className="text-xl text-[#7E7E7E]">
            <a href="">Emergency Medicine in US</a>
          </span>
          <span className="text-xl text-[#7E7E7E]">
            <a href="">Surgery in US</a>
          </span>
          <span className="text-xl text-[#696868]">
            <a href="">View All</a>
          </span>
        </span>

        <span className="flex flex-col space-y-[1rem]">
          <span className="pb-5 text-2xl ">
            <a href="">Doctors In India</a>
          </span>
          <span className="text-xl text-[#7E7E7E]">
            <a href="#">Allergy and Immunology in India</a>
          </span>
          <span className="text-xl text-[#7E7E7E]">
            <a href="">Anesthesiology In India</a>
          </span>
          <span className="text-xl text-[#7E7E7E]">
            <a href="">Diagnostic Radiology in India</a>
          </span>
          <span className="text-xl text-[#7E7E7E]">
            <a href="">Emergency Medicine in India</a>
          </span>
          <span className="text-xl text-[#7E7E7E]">
            <a href="">Surgery in India</a>
          </span>
          <span className="text-xl text-[#696868]">
            <a href="">View All</a>
          </span>
        </span>

        <span className="flex flex-col space-y-[1rem]">
          <span className="pb-5 text-2xl ">
            <a href="">By Location</a>
          </span>
          <span className="text-xl text-[#7E7E7E]">
            <a href="#">United Kingdom</a>
          </span>
          <span className="text-xl text-[#7E7E7E]">
            <a href="">India </a>
          </span>
          <span className="text-xl text-[#7E7E7E]">
            <a href="">Australia</a>
          </span>
          <span className="text-xl text-[#7E7E7E]">
            <a href="">Turkey</a>
          </span>
          <span className="text-xl text-[#7E7E7E]">
            <a href="">United Emirates</a>
          </span>
          <span className="text-xl text-[#696868]">
            <a href="">View All</a>
          </span>
        </span>
      </div>
      <div className="relative flex h-[60vh] w-full flex-row items-center justify-around bg-[#3D4461] text-white">
        <div className="absolute -top-[4rem] flex h-[8rem] w-full justify-center">
          <div className="flex h-full w-[40%] flex-row justify-between rounded-l-[5rem] rounded-r-[5rem] bg-white px-[1.2rem]">
            <div className="flex w-[34%] flex-row items-center">
              <img
                src="img-01 1.png"
                className="h-[3.8rem] w-[4.5rem]"
                alt=""
              />
              <div className="flex h-[60%] items-center border-l-4 border-[#D9D9D9]">
                <div className="flex h-[80%] flex-col justify-between pl-[.5rem]">
                  <span className=" text-[#7E7E7E]">Emergency Call</span>
                  <span className="text-2xl text-[#F36562]">
                    <a href="">1234 5678 -9</a>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex h-full w-[26%] items-center justify-center text-[#7E7E7E]">
              --OR--
            </div>
            <div className="flex w-[34%] flex-row items-center">
              <div className="flex h-[60%] items-center border-r-4 border-[#D9D9D9]">
                <div className="flex h-[80%] flex-col justify-between pr-[.5rem]">
                  <span className=" text-[#7E7E7E]">Emergency Call</span>
                  <span className="text-2xl text-[#F36562]">
                    <a href="">1234 5678 -9</a>
                  </span>
                </div>
              </div>
              <img
                src="img-02-1 1.png"
                className="h-[4rem] w-[4.5rem] pl-[.3rem] "
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="flex h-[60%] w-[25%]  flex-col  justify-evenly">
          <span className="ml-2 flex w-auto flex-col">
            <span className="mb-4 h-auto w-auto">
              <img src="healthcare logo 2_Mesa de trabajo 1_2 1.png" alt="" />
            </span>
            <span className="mt-4 h-auto w-[80%] text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.Cum
              nostrum consequatur ipsa at. Omnis veniam dolores iure numquam.
            </span>
          </span>

          <span className="mt-8 flex w-[53%] flex-row space-x-2 ">
            <MdLocationOn className="h-6 w-6" />
            <span>
              <a href="" className="whitespace-nowrap">
                lorem street,Ipsum,102594
              </a>
            </span>
          </span>
          <span className=" ml-1 mt-3 flex w-[38%] flex-row  ">
            <span className="pt-1">
              <FaEnvelope className="h-4 w-4" />
            </span>
            <span className="ml-3 ">
              <a href="">info@domain.com</a>
            </span>
          </span>
          <span className="mt-3 flex w-[30%] flex-row ">
            <span className="pl-1 pt-1">
              <FaPhoneAlt />
            </span>
            <span className="ml-3 whitespace-nowrap">
              <a href="">12345-67890</a>
            </span>
          </span>

          <span className="mt-6 flex w-[25%] flex-row justify-between">
            <a href="">
              {" "}
              <FaFacebookF />
            </a>
            <a href="">
              <FaInstagram />
            </a>
            <a href="">
              {" "}
              <FaXTwitter />
            </a>
            <a href="">
              {" "}
              <FaYoutube />
            </a>
          </span>
        </div>

        <div className="flex h-[60%] w-[30%] flex-col space-y-5 ">
          <span className="text-3xl">Twitter Live Feed</span>
          <div className="flex h-auto flex-col space-y-12">
            <div className="flex flex-row space-x-2">
              <img
                src="012-545x389 2.png"
                className="h-[3rem] w-[6rem] rounded-sm"
                alt=""
              />

              <span className="flex flex-col">
                <span className="w-full text-start text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dicta, distinctio laboriosam sint doloremque quisquam
                  voluptate aliquid.
                </span>
                <span className="flex flex-row space-x-6 text-xs">
                  <span>11:23 AM</span>
                  <span>02-12-23</span>
                </span>
              </span>
            </div>

            <div className="flex flex-row space-x-2">
              <img
                src="012-545x389 2.png"
                className="h-[3rem] w-[6rem] rounded-sm"
                alt=""
              />

              <span className="flex flex-col">
                <span className="w-full text-start text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dicta, distinctio laboriosam sint doloremque quisquam
                  voluptate aliquid.
                </span>
                <span className="flex flex-row space-x-6 text-xs">
                  <span>11:23 AM</span>
                  <span>02-12-23</span>
                </span>
              </span>
            </div>
          </div>
        </div>

        <div className="flex h-[60%] w-[30%] flex-col space-y-12">
          <span className="text-3xl">Twitter Live Feed</span>
          <div className="flex w-[85%] flex-col space-y-9 text-sm">
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
              quisquam earum mollitia magni odit vero ipsam veniam.
            </span>
            <div className=" flex h-[3rem] w-[80%] flex-row justify-between rounded-md">
              <input
                type="email"
                name=""
                id=""
                className="h-full  flex-1 rounded-l-md pl-[1rem] text-sm text-[#7E7E7E] outline-none"
                placeholder="Enter your Email"
              />
              <button className=" flex h-full w-[20%] items-center justify-center rounded-r-md  bg-[#F36562]">
                <FaArrowRight className="h-6 w-8" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-[6vh] w-full items-center justify-center bg-[#373D57] text-white">
        Copyright @ 2023 . All Rights Reserved
      </div>
    </div>
  );
};
export default Bottom;
