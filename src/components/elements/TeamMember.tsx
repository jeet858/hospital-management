import React, { Fragment } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa6";
import { FaGooglePlusG } from "react-icons/fa";

interface Iprops {
  img: string;
  position: string;
  details: string;
}

export const TeamMemberTile: React.FunctionComponent<Iprops> = (props) => {
  const SocialMedia = [
    <FaFacebookF />,
    <FaInstagram />,
    <FaLinkedin />,
    <FaYoutube />,
    <FaGooglePlusG />,
    <FaXTwitter />,
  ];
  return (
    <div>
      <div className="h-fit w-64 flex flex-col ">
        <div>
          <img src={props.img} alt="" />
        </div>
        <div className="border-[#DBDBDB] border space-y-[6%]">
          <div className='text-[14px]/[16.8px] w-full flex justify-center mt-[8%] text-[#3BB7E7] font-normal font-["Lato"]'>
            {props.position}
          </div>
          <div className='text-black w-full flex justify-center text-[20px]/[24px] font-semibold font-["Lato"]'>
            {props.details}
          </div>
          <div className="w-full flex justify-center pb-[10%]">
            <div className="w-full flex flex-row justify-evenly">
                {SocialMedia?.map((item, index) => <div key={index}>{item}</div>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TeamMember: React.FunctionComponent = () => {
  const Member = [
    { imgsrc: "/team03 1.png", position: "sdfgh", details: "sdfghjkliuytr" },
    { imgsrc: "/team03 1.png", position: "sdfgh", details: "sdfghjkliuytr" },
    { imgsrc: "/team03 1.png", position: "sdfgh", details: "sdfghjkliuytr" },
  ];
  return(
    <div className="w-full flex justify-center">
        <div className="w-full flex flex-row justify-evenly">
        {
            Member?.map((item,index)=>(
                <Fragment key={index}><TeamMemberTile img={item.imgsrc} position={item.position} details={item.details}/></Fragment>
            ))
        }
    </div>
    </div>
  )
};
export default TeamMember;
