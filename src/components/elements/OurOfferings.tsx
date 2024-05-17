import React from "react";
import { CiCircleCheck } from "react-icons/ci";

const OurOfferings: React.FunctionComponent = () => {
  const Offerings1 = ["Dummy Text", "Dummy Text", "Dummy Text", "Dummy Text"];
  const Offerings2 = ["Dummy Text", "Dummy Text", "Dummy Text", "Dummy Text"];

  return (
    <div className="h-60 w-screen  px-[3%] py-[1%]">
      <div className="h-full w-full ">
        <span className="text-[36px]/[43.57px] h-[20%] font-bold">Our offerings</span>
        <div className="flex w-full h-[80%] flex-row">
          <div className="grid h-full w-[50%] grid-rows-4 content-between items-end">
            {Offerings1?.map((item, index) => (
              <span
              key={index}
              className="flex flex-row items-center justify-self-start space-x-4"
            >
              <CiCircleCheck className="font-bold text-red-800" />{" "}
              <p className="text-[16px]/[19.6px]">{item}</p>
            </span>
            ))}
          </div>
          <div className="flex flex-row h-full w-[50%]">
            <div className="w-[50%] h-full"></div>
            <div className="grid  grid-rows-4 content-start items-end">
            {Offerings2?.map((item, index) => (
              <span
                key={index}
                className="flex flex-row items-center justify-self-start space-x-4"
              >
                <CiCircleCheck className="font-bold text-red-800" />{" "}
                <p className="text-[16px]/[19.6px]">{item}</p>
              </span>
            ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurOfferings;
