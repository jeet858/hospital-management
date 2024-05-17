import React, { Fragment } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
interface CategoryProps {
  imageSrc: string;
  category: string;
}
export const SickCategory: React.FunctionComponent<CategoryProps> = (props) => {
  return (
    <div className="flex h-[30vh] w-[90%] flex-col items-center justify-center">
      <div className="flex h-full w-[60%] flex-col border-2 border-[#BFBFBF]">
        <div className="flex h-[60%] w-full items-center justify-center">
          <img src={props.imageSrc} className="h-full w-full" alt="" />
        </div>
        <div className="flex flex-1 flex-col items-center space-y-[10%] border border-zinc-300 p-[2%]">
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
const OurHealthHazard: React.FunctionComponent = () => {
  const sksettings = {
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

  const sickcategory = [
    {
      imageSrc: "/young-man-suffering-from-cough-shirt-looking-ill 1.png",
      category: "Cough & Cold ?",
    },
    {
      imageSrc: "/close-up-worried-woman-with-white-background 1.png",
      category: "Skin Problem ?",
    },
    {
      imageSrc: "/ill-girl-using-thermometer 1.png",
      category: "Sick Kid ?",
    },
    {
      imageSrc:
        "sick-woman-with-hands-stomach-suffering-from-intense-pain 1.png",
      category: "Stomach Issue?",
    },
  ];
  return (
    <div className="h-[40vh] w-full">
      <Slider {...sksettings}>
        {sickcategory?.map((item, index) => {
          return (
            <Fragment key={index}>
              <SickCategory imageSrc={item.imageSrc} category={item.category} />
            </Fragment>
          );
        })}
      </Slider>
    </div>
  );
};
export default OurHealthHazard;
