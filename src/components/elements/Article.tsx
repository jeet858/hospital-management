// import Image, { StaticImageData } from 'next/image'
import Image, { type StaticImageData } from "next/image";
import React, { Fragment } from "react";
import {
  FaCalendarAlt,
  FaPenAlt,
  FaEye,
  FaRegCommentAlt,
} from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import x from "/public/012-545x389 1.jpeg";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface ArticleProps {
  image: StaticImageData;
  text: string;
  date: string;
  name: string;
}

export const Article: React.FunctionComponent<ArticleProps> = (props) => {
  return (
    <div className="h-fit w-[400px]">
      <div className="flex h-fit w-[400px] flex-col ">
        <div className="h-fit w-[400px]">
          <Image src={props.image} alt="hello" />
        </div>
        <div className="space-y-[2%] border border-zinc-300 p-[2%]">
          <div className='font-["Lato"] text-xl font-normal text-black'>
            {props.text}
          </div>
          <div className="flex flex-row items-center space-x-1">
            <FaCalendarAlt style={{ color: "#7E7E7E" }} />
            <div className='font-["Lato"] text-sm font-normal text-zinc-500'>
              {props.date}
            </div>
          </div>
          <div className="flex flex-row items-center space-x-1">
            <FaPenAlt style={{ color: "#7E7E7E" }} />
            <div className='font-["Lato"] text-sm font-normal text-zinc-500'>
              {props.name}
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-around border-x-[1px] border-b-[1px] border-zinc-300 p-[2%]">
          <div className="flex flex-row items-center space-x-1">
            <IoMdHeartEmpty style={{ color: "#7E7E7E" }} />
            <div className="flex flex-row space-x-0.5">
              <span className='font-["Lato"] text-[14px]/[16.8px] font-normal text-zinc-500'>
                66
              </span>
              <span className='font-["Lato"] text-[14px]/[16.8px] font-normal text-zinc-500'>
                likes
              </span>
            </div>
          </div>
          <div className="flex flex-row items-center space-x-1">
            <FaEye style={{ color: "#7E7E7E" }} />
            <div className="flex flex-row space-x-0.5">
              <span className='font-["Lato"] text-[14px]/[16.8px] font-normal text-zinc-500'>
                66
              </span>
              <span className='font-["Lato"] text-[14px]/[16.8px] font-normal text-zinc-500'>
                likes
              </span>
            </div>
          </div>
          <div className="flex flex-row items-center space-x-1">
            <FaRegCommentAlt style={{ color: "#7E7E7E" }} />
            <div className="flex flex-row space-x-0.5">
              <span className='font-["Lato"] text-[14px]/[16.8px] font-normal text-zinc-500'>
                66
              </span>
              <span className='font-["Lato"] text-[14px]/[16.8px] font-normal text-zinc-500'>
                likes
              </span>
            </div>
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

const ShowArticle: React.FunctionComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: 
      <SampleNextArrow
        className={undefined}
        style={undefined}
        onClick={undefined}
      />
    ,
    prevArrow: 
      <SamplePrevArrow
        className={undefined}
        style={undefined}
        onClick={undefined}
      />
    ,
  };

  const article = [
    {
      imageSrc: x,
      text: "Alcohol may be less harmful for people over 50",
      date: "September 13, 2019",
      name: "Ralph Davis",
    },
    {
      imageSrc: x,
      text: "Alcohol may be less harmful for people over 50",
      date: "September 13, 2019",
      name: "Ralph Davis",
    },
    {
      imageSrc: x,
      text: "Alcohol may be less harmful for people over 50",
      date: "September 13, 2019",
      name: "Ralph Davis",
    },
    {
      imageSrc: x,
      text: "Alcohol may be less harmful for people over 50",
      date: "September 13, 2019",
      name: "Ralph Davis",
    },
  ];
  return (
    <div className="h-screen w-screen flex justify-center">
      <div className="w-[80%]">
      <Slider {...settings}>
        {article?.map((item, index) => (
          <div key={index}>
            <Article
              image={item.imageSrc}
              text={item.text}
              date={item.date}
              name={item.name}
            />
          </div>
        ))}
      </Slider></div>
    </div>
  );
};

export default ShowArticle;
