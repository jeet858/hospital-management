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

const HomePageBanner: React.FunctionComponent = (props) => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };
  return (
    <div className="w-full max-w-full overflow-x-hidden">
      <div>
        <Slider {...settings}>
          <div>
            <div className="relative">
              <Image src={Picture} alt="pic1" className="w-full h-auto"/>
              <button className="absolute bottom-0 right-0 m-4 bg-blue-500 text-white px-4 py-2 rounded z-10">Hello</button>
            </div>
          </div>
          <div>
            <div>
              <Image src={Picture} alt="pic2" />
            </div>
          </div>
          <div>
            <div>
              <Image src={Picture} alt="pic3" />
            </div>
          </div>
          <div>
            <div>
              <Image src={Picture} alt="pic4" />
            </div>
          </div>
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
          <div className="text-[32px] font-semibold text-[#3b4561]">
            Clinic /<br /> Hospital Visit
          </div>
        </div>
        <div className="flex h-[400px] w-full flex-col justify-end border border-[#dadada] bg-white p-10">
          <div className="flex justify-end">
            <Image src={Patho} alt={"doctor digital consult"} />
          </div>
          <div className="break-normal text-[32px] font-semibold text-[#f36562]">
            Book <br />
            Pathology Tests
          </div>
        </div>
        <div className="flex h-[400px] w-full flex-col justify-end border border-[#dadada] bg-white p-10">
          <div className="flex justify-end">
            <Image src={TreatM} alt={"doctor digital consult"} />
          </div>
          <div className="text-[32px] font-semibold text-[#3b4561]">
            Buy <br />
            Medicines
          </div>
        </div>
      </div>
      {/*-----------------------------------------------------*/}
      <div className="flex flex-row justify-evenly">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default HomePageBanner;
