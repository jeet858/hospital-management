import React, { Fragment } from "react";
import { FaLocationDot, FaCalendar } from "react-icons/fa6";
import Image, { type StaticImageData } from "next/image";
import { FaBrain } from "react-icons/fa";
import a from "/public/20(1).jpeg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from ".eslintrc.cjs";

interface AppointmentBookProps {
  imageSrc: StaticImageData;
  name: string;
  degree: string;
  location: string;
}

export const AppointmentBook: React.FunctionComponent<AppointmentBookProps> = (
  props,
) => {
  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return (
    <div className="flex justify-center">
      <div className="flex h-fit w-[261px] flex-col ">
        <div className="h-fit w-[261px]">
          <Image src={props.imageSrc} className="h-full w-full" alt="" />
        </div>
        <div className="space-y-[1%]  border border-zinc-300 p-[2%]">
          <div className="font-['Lato'] text-xl font-medium text-black">
            {props.name}
          </div>
          <div className="font-['Lato'] text-xs font-normal text-zinc-500">
            {props.degree}
          </div>
          <div className="flex flex-row items-center space-x-1">
            <FaLocationDot style={{ color: "#7E7E7E" }} />
            <div className="font-['Lato'] text-xs font-normal text-zinc-500">
              {props.location}
            </div>
          </div>
          <div className="flex flex-row items-center space-x-1">
            <FaCalendar style={{ color: "#7E7E7E" }} />
            <div className="flex w-full flex-row justify-between font-['Lato'] text-xs font-normal">
              {weekDays.map((item, index) => (
                <div
                  key={index}
                  className={`${
                    index % 2 !== 0 ? "text-green-700" : "text-zinc-500"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="flex h-fit  w-full justify-center">
            <button className="h-10 w-24 rounded border-2 border-sky-400">
              <div className="font-['Inter'] text-[15px] font-normal text-black">
                Book Now
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

function SampleNextArrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

const ShowAppointment: React.FunctionComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: (
      <SampleNextArrow
        className={undefined}
        style={undefined}
        onClick={undefined}
      />
    ),
    prevArrow: (
      <SamplePrevArrow
        className={undefined}
        style={undefined}
        onClick={undefined}
      />
    ),
  };

  const appointment = [
    {
      imageSrc: a,
      name: "Flores Emily",
      degree: "Ph.D, DPT, MS OMPT",
      location: "England",
    },
    {
      imageSrc: a,
      name: "Flores Emily",
      degree: "Ph.D, DPT, MS OMPT",
      location: "England",
    },
    {
      imageSrc: a,
      name: "Flores Emily",
      degree: "Ph.D, DPT, MS OMPT",
      location: "England",
    },
    {
      imageSrc: a,
      name: "Flores Emily",
      degree: "Ph.D, DPT, MS OMPT",
      location: "England",
    },
    {
      imageSrc: a,
      name: "Flores Emily",
      degree: "Ph.D, DPT, MS OMPT",
      location: "England",
    },
  ];
  return (
    <div className="h-fit w-screen">
      <div className="mt-16 flex h-[22rem] w-full flex-row space-x-[2%]">
        <div className="flex h-[22rem] w-[20%] flex-col items-center justify-center space-y-[5%] bg-blue-50 p-5 ">
          <FaBrain
            style={{ color: "#328BDD", width: "45px", height: "45px" }}
          />
          <div className="font-['Lato'] text-[26px] font-bold text-black">
            Our Top Rated
          </div>
          <div className="font-['Lato'] text-2xl font-medium text-red-400">
            Neurosurgeons
          </div>
          <div className="text-center font-['Lato'] text-xs font-light text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </div>
          <button className="h-10 w-24 rounded border-2 border-sky-400">
            <div className="font-['Inter'] text-[15px] font-normal text-black">
              View All
            </div>
          </button>
        </div>

        <div className="w-[75%]">
          <Slider {...settings}>
            {appointment?.map((item, index) => {
              return (
                <Fragment key={index}>
                  <AppointmentBook
                    imageSrc={item.imageSrc}
                    name={item.name}
                    degree={item.degree}
                    location={item.location}
                  />
                </Fragment>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ShowAppointment;
