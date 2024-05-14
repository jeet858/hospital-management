import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image, { StaticImageData } from "next/image";
import Picture from "../../../public/Group_131.png";

// interface BannerProps {
//   imgSrc: StaticImageData;
// }

export const Banner: React.FunctionComponent = (props) => {
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
    <div className="flex-auto">
      <div>
        <Slider {...settings}>
          <div>
            <div>
              <Image src={Picture} alt="pic1" />
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

      <div className="flex grid-cols-4">
        <div className="h-[400px] w-[360px] border border-[#dadada] bg-white">
          <div className="inset-x-0 bottom-0 break-normal text-[32px] font-semibold text-[#f36562]">
            Doctor Digital Consult
          </div>
        </div>
        <div className="h-[400px] w-[360px] border border-[#dadada] bg-white">
          <div className="text-[32px] font-semibold text-[#3b4561]">
            Clinic / Hospital Visit
          </div>
        </div>
        <div className="h-[400px] w-[360px] border border-[#dadada] bg-white">
          <div className="break-normal text-[32px] font-semibold text-[#f36562]">
            Book Pathology Tests
          </div>
        </div>
        <div className="h-[400px] w-[360px] border border-[#dadada] bg-white">
          <div className="text-[32px] font-semibold text-[#3b4561]">
            Buy Medicines
          </div>
        </div>
      </div>

      {/* <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:text-blue-400 hover:bg-slate-50">
        Click me
      </button> */}
    </div>
  );
};
