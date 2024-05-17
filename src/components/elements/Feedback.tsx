import React, { Fragment } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
interface FeedbackProps {
  imageSrc: string;
  name: string;
  age: string;
  profession: string;
  feedback: string;
}
export const FeedbackFrag: React.FunctionComponent<FeedbackProps> = (props) => {
  return (
    <div className="flex h-[30vh] w-[90%] flex-col items-center justify-center">
      <div className="flex h-[97%] w-[97%] items-center justify-center border-2 border-[#BFBFBF] shadow-md shadow-[#DADADA]">
        <div className="h-[88%] w-[88%]">
          <div className="flex h-[35%] w-full flex-row items-end space-x-[1rem]">
            <img
              src={props.imageSrc}
              className="h-[70px] w-[70px] rounded-full"
              alt=""
            />
            <div className="flex h-[80%] w-[50%] flex-col justify-end">
              <span className="text-[22px]">{props.name}</span>
              <div className="flex h-[50%] flex-row items-center">
                <span className="w-fit border-r-2 border-black pr-[.7rem]">
                  {props.age}
                </span>
                <span className="flex-1 pl-[.7rem]">{props.profession}</span>
              </div>
            </div>
          </div>
          <div className="flex-1 p-[1rem]">{props.feedback}</div>
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
const Feedback: React.FunctionComponent = () => {
  const feedbacksettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: (
      <NArrow className={undefined} style={undefined} onClick={undefined} />
    ),
    prevArrow: (
      <PArrow className={undefined} style={undefined} onClick={undefined} />
    ),
  };

  const patient = [
    {
      imageSrc: "testimonial-default-women-v1 1.png",
      name: "Preeti",
      age: "27 Yr Old",
      profession: "IT Professional",
      feedback:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum necessitatibus modi voluptas, veniam, ipsam rerum quo ex repudiandae molestias libero, consectetur perferendis ipsa doloribus eos temporibus eum voluptate praesentium sint. Quaerat animi suscipit odit ea!",
    },
    {
      imageSrc: "testimonial-default-women-v1 1.png",
      name: "Preeti",
      age: "27 Yr Old",
      profession: "IT Professional",
      feedback:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum necessitatibus modi voluptas, veniam, ipsam rerum quo ex repudiandae molestias libero, consectetur perferendis ipsa doloribus eos temporibus eum voluptate praesentium sint. Quaerat animi suscipit odit ea!",
    },
    {
      imageSrc: "testimonial-default-women-v1 1.png",
      name: "Preeti",
      age: "27 Yr Old",
      profession: "IT Professional",
      feedback:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum necessitatibus modi voluptas, veniam, ipsam rerum quo ex repudiandae molestias libero, consectetur perferendis ipsa doloribus eos temporibus eum voluptate praesentium sint. Quaerat animi suscipit odit ea!",
    },
  ];
  return (
    <div className="h-[40vh] w-full">
      <Slider {...feedbacksettings}>
        {patient?.map((item, index) => {
          return (
            <Fragment key={index}>
              <FeedbackFrag
                imageSrc={item.imageSrc}
                name={item.name}
                age={item.age}
                profession={item.profession}
                feedback={item.feedback}
              />
            </Fragment>
          );
        })}
      </Slider>
    </div>
  );
};
export default Feedback;
