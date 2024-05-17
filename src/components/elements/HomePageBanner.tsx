import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image, { StaticImageData } from "next/image";
import Picture from "../../../public/Group_131.png";
import Consult from "../../../public/online_medione.png";
import Patho from "../../../public/pathology_one.png";
import TreatM from "../../../public/treatment_one.png";
import Clinic from "../../../public/clinic_one.png";

export const HomePageBanner: React.FunctionComponent = (props) => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };
  const bannerData = [
    { imgSrc: Picture },
    { imgSrc: Picture },
    { imgSrc: Picture },
    { imgSrc: Picture },
    { imgSrc: Picture },
  ];
  return (
    <div className="w-full max-w-full overflow-x-hidden">
      <div>
        <Slider {...settings}>
          {bannerData.map((item, index) => {
            return (
              <BannerTiles
                imgSrc={item.imgSrc}
                key={index}
                buttonOneText={"Sign Up"}
                buttonTwoText={"New Appointment"}
                buttonOneOnClick={(e) => {
                  e.preventDefault(); //this function prevents the refresh of the page whenever button is clicked.
                  console.log("abc");
                }}
                buttonTwoOnClick={() => {
                  console.log("def");
                }}
              />
            );
          })}
        </Slider>
      </div>

      <div className="flex flex-row justify-evenly">
        <div className="flex h-[400px] w-full flex-col justify-end border border-[#dadada] bg-white p-10">
          <div className="flex justify-end">
            <Image src={Consult} alt={"doctor digital consult"} />
          </div>
          <div className="inset-x-0 bottom-0 break-normal text-[32px] font-semibold text-[#f36562]">
            Doctor <br />
            Digital Consult
          </div>
        </div>
        <div className="flex h-[400px] w-full flex-col justify-end border border-[#dadada] bg-white p-10">
          <div className="flex justify-end">
            <Image src={Clinic} alt={"doctor digital consult"} />
          </div>
          <a href="#" className="text-[32px] font-semibold text-[#3b4561]">
            Clinic /<br /> Hospital Visit
          </a>
        </div>
        <div className="flex h-[400px] w-full flex-col justify-end border border-[#dadada] bg-white p-10">
          <div className="flex justify-end">
            <Image src={Patho} alt={"doctor digital consult"} />
          </div>
          <a href="#" className="break-normal text-[32px] font-semibold text-[#f36562]">
            Book <br />
            Pathology Tests
          </a>
        </div>
        <div className="flex h-[400px] w-full flex-col justify-end border border-[#dadada] bg-white p-10">
          <div className="flex justify-end">
            <Image src={TreatM} alt={"doctor digital consult"} />
          </div>
          <a href="#" className="text-[32px] font-semibold text-[#3b4561]">
            Buy <br />
            Medicines
          </a>
        </div>
      </div>
      {/*-----------------------------------------------------*/}
      <div className="flex flex-row justify-evenly py-20">
        <div>
          <span>
            <p>Bring Care to Your</p>
            <p>Home With One Click </p>
            <p>
              Lorem ipsum dolor amet consectetur adipisicing elitiuim sete
              <br />
              eiusmod tempor incididunt ut labore etnalom dolore magn aiqua
            </p>
          </span>
          <div className="flex">
            <button className=" text border border-sky-500 bg-white px-6 py-2 font-bold text-black">
              About Us
            </button>
            <div className="px-10">
              <button className=" bg-blue-500 px-6 py-2 font-bold text-white  shadow-md">
                Contact
              </button>
            </div>
          </div>
        </div>
        <div>aaaaaaaaaaaaaaa</div>
      </div>
    </div>
  );
};

interface BannerTilesProps {
  imgSrc: string | StaticImageData;
  buttonOneText: string;
  buttonTwoText: string;
  buttonOneOnClick: React.MouseEventHandler<HTMLButtonElement>;
  buttonTwoOnClick: React.MouseEventHandler<HTMLButtonElement>;
}

const BannerTiles: React.FunctionComponent<BannerTilesProps> = (props) => {
  return (
    <div className="flex flex-col">
      <Image src={Picture} alt="pic1" className="h-auto w-full" />
      <div className="relative flex flex-col">
        <div className="flex flex-row">
          <button
            className="absolute bottom-0 right-60 z-10 m-4 rounded-lg border border-black bg-white px-16 py-3.5 text-black"
            onClick={(e) => {
              console.log("First Button");
            }}
          >
            {props.buttonOneText}
          </button>
          <button
            className="absolute bottom-0 right-0 z-10 m-4 rounded-lg border border-black bg-white px-8 py-3.5 text-black"
            onClick={() => {console.log("Second Button");
            }}
          >
            {props.buttonTwoText}
          </button>
        </div>
      </div>
    </div>
  );
};
