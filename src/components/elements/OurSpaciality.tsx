import React, { Fragment } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
interface CategoryProps {
  imageSrc: string;
  category: string;
}
export const OurCategory: React.FunctionComponent<CategoryProps> = (props) => {
  return (
    <div className="flex h-[30vh] w-[90%] flex-col items-center justify-center">
      <div className="flex h-full w-[60%] flex-col border-2 border-[#BFBFBF]">
        <div className="flex h-[60%] w-full items-center justify-center">
          <div className="flex h-[150px] w-[150px] items-center justify-center rounded-full border-2 border-[#BFBFBF]">
            {" "}
            <img src={props.imageSrc} className="h-[60%] w-[60%] " alt="" />
          </div>
        </div>
        <div className="flex flex-1 flex-col items-center space-y-[10%] p-[2%]">
          <div className="font-['Lato'] text-2xl font-medium text-black">
            {props.category}
          </div>

          <button className="flex h-10 w-24 items-center justify-center rounded border-2 border-sky-400 font-['Inter'] text-[15px] text-black">
            Consult Now
          </button>
        </div>
      </div>
    </div>
  );
};
function NArrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey" }}
      onClick={onClick}
    />
  );
}

function PArrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey" }}
      onClick={onClick}
    />
  );
}
const OurSpaciality: React.FunctionComponent = () => {
  const spsettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: (
      <NArrow className={undefined} style={undefined} onClick={undefined} />
    ),
    prevArrow: (
      <PArrow className={undefined} style={undefined} onClick={undefined} />
    ),
  };
  const doccategory = [
    {
      imageSrc: "stethoscope (1) 1.png",
      category: "General physician",
    },
    {
      imageSrc: "pediatric 1.png ",
      category: "Pediatric",
    },
    {
      imageSrc: "peeling 1.png",
      category: "Dermatology",
    },
    {
      imageSrc: "uterus 1.png",
      category: "Gynaecology",
    },
  ];
  return (
    <div className="h-[40vh] w-full ">
      <Slider {...spsettings}>
        {doccategory?.map((item, index) => {
          return (
            <Fragment key={index}>
              <OurCategory imageSrc={item.imageSrc} category={item.category} />
            </Fragment>
          );
        })}
      </Slider>
    </div>
  );
};
export default OurSpaciality;
