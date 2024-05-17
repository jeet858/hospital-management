import React from "react";
interface Iprops {
  logo: string;
}

export const PartnerTile: React.FunctionComponent<Iprops> = (props) => {
  return (
    <div className="flex h-full w-full grow">
      <div className="flex items-center justify-center border border-[#A9A9A9]">
        <img src={props.logo} alt="" className="h-[129%] w-[78%]" />
      </div>
    </div>
  );
};

const Partner: React.FunctionComponent = () => {
  const logo = [
    "/graphicriver.png",
    "/graphicriver.png",
    "/graphicriver.png",
    "/graphicriver.png",
    "/graphicriver.png",
    "/graphicriver.png",
    "/graphicriver.png",
    "/graphicriver.png",
  ];
  return (
    <div className="grid h-fit w-screen grid-cols-4">
      {logo?.map((item, index) => (
        <div key={index} className="">
          <PartnerTile logo={item} />
        </div>
      ))}
    </div>
  );
};

export default Partner;
