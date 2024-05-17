import React, { Fragment } from "react";

interface Iprops{
  img:string;
  name:string;
  text:string
}

export const ApprocheTile:React.FunctionComponent<Iprops>=(props)=>{
    return(
        <div className="w-64 h-96 flex flex-col justify-between space-y-[8%]">
          <div className="w-full h-[40%] items-center justify-center flex"><img src={props.img} alt="" className="w-20 h-20" /></div>
          
          <p className="text-center text-[24px]/[29.6px] font-semibold">{props.name}</p>
          <p className="text-[16px]/[19.6px] font-normal text-center">{props.text}</p>
        </div>
    )
}

const Approches: React.FunctionComponent = () => {
  const ApprochesData=[
    {
      img:"/social-network.png",
      name:"Contact",
      text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been "
    },
    {
      img:"/social-network.png",
      name:"Trust",
      text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been "
    },
    {
      img:"/social-network.png",
      name:"Transparency",
      text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been "
    },
  ]
  return (
    <div className="h-[591px] w-screen bg-[#3bb6e721] px-[3%] py-[1%]">
      <div className="flex w-full flex-col items-center space-y-4">
        <p className=" text-[36px]/[43.7px] font-semibold">
          Our approach to healthcare
        </p>
        <p className=" text-[24px]/[29.05px] font-normal ">
          Providing high-quality, trusted, and accessible healthcare is our
          reason for being
        </p>
      </div>
      <div className="flex flex-row justify-between">
        {
          ApprochesData.map((item,index)=>(
            <Fragment key={index}>
              <ApprocheTile img={item.img} name={item.name} text={item.text}/>
            </Fragment>
          ))
        }
      </div>
    </div>
  );
};

export default Approches;
