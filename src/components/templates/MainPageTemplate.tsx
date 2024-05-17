import React from "react";
import HeadNav from "../layout/HeadNav";
import Bottom from "../layout/Bottom";

import Contact from "../elements/Contact";

import HomePageBanner from "../elements/HomePageBanner";

interface MainPageTemplateProps {
  children?: JSX.Element | JSX.Element[];
}
const MainPageTemplate: React.FC<MainPageTemplateProps> = (props) => {
  return (
    <div className="flex h-fit w-full flex-col overflow-x-hidden ">
      <HeadNav />

      {/* <HomePageBanner /> */}
      {/* <div className="flex h-fit w-full flex-col">{props.children}</div> */}

      <HomePageBanner />
      <div className="flex h-fit w-full flex-col">{props.children}</div>

      <Bottom />
    </div>
  );
};

export default MainPageTemplate;
