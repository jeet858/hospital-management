import React, { Fragment } from "react";
import OurHealthHazard from "~/components/elements/OurHealthHazard";
import OurSpaciality from "~/components/elements/OurSpaciality";
import ShowAppointment from "~/components/elements/Appointments";
import Feedback from "~/components/elements/Feedback";
import HeadNav from "~/components/layout/HeadNav";
import { Banner } from "~/components/elements/Banner";
import Bottom from "~/components/layout/Bottom";
const DigitalConsult: React.FunctionComponent = () => {
  return (
    <div className="flex h-[320vh] w-full flex-col space-y-[7%] overflow-x-hidden pl-[4.3rem] pr-[1.5rem]">
      <div className="flex h-fit w-full flex-col ">
        <HeadNav />
        <Banner />
        <div className="flex flex-row items-center space-x-2 py-[1rem] font-['Lato'] hover:cursor-pointer">
          <span className=" text-[#3B4561]">Home</span>
          <img src="Vector.png" className="h-[.5rem] text-[#3B4561]" alt="" />
          <span className="text-[#F36562]">Doctor Digital Consult</span>
        </div>
      </div>

      <div className="flex h-[18%] w-[95%] flex-col items-center justify-between">
        <div className="flex h-[17%] w-[91%] flex-row justify-between pr-[2.6rem]">
          <div className="flex flex-col">
            <span className="text-[30px] text-[#3B4561]">25+ Spaciality</span>
            <span className="text-[22px] text-[#7E7E7E]">
              Consult with top doctors across spacialities
            </span>
          </div>
          <button className="flex h-[80%] w-[11%] items-center justify-center border-2 border-[#3B4561] text-sm text-[#353434]">
            See all Spacialities
          </button>
        </div>
        <div className="h-[66.66%] w-full">
          {" "}
          <OurSpaciality />
        </div>
      </div>
      <div className="flex h-[18%] w-[95%] flex-col items-center justify-between">
        <div className="flex h-[17%] w-[91%] flex-row justify-between pr-[2.6rem]">
          <div className="flex flex-col">
            <span className="text-[30px] text-[#3B4561]">
              Common Health Hazards
            </span>
            <span className="text-[22px] text-[#7E7E7E]">
              Consult a doctor online for any health issue
            </span>
          </div>
          <button className="flex h-[80%] w-[11%] items-center justify-center border-2 border-[#3B4561] text-sm text-[#353434]">
            See all Symptoms
          </button>
        </div>
        <div className="h-[66.66%] w-full">
          <OurHealthHazard />
        </div>
      </div>
      <div className="h-fit w-[80%]">
        <ShowAppointment />
      </div>

      <div className="flex h-fit w-[95%] flex-col space-y-[2rem]">
        <span className="text-[35px] font-semibold text-[#3B4561]">
          What Our Users Say About Us
        </span>

        <Feedback />
      </div>
      <Bottom />
      {/* <div className="overflow-x-hiddenrx flex h-[40%] w-full flex-row">
        <Slider {...sickettings}>
          {sickcategory?.map((item, index) => {
            return (
              <SickCategory
                imageSrc={item.imageSrc}
                category={item.category}
                key={index}
              />
            );
          })}
        </Slider>
      </div> */}
    </div>
  );
};
export default DigitalConsult;
