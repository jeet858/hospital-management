import React from "react";
import HeadNav from "../layout/HeadNav";
import Bottom from "../layout/Bottom";
import { HomePageBanner } from "../elements/HomePageBanner";
import Contact from "../elements/Contact";

interface MainPageTemplateProps {
  children?: JSX.Element | JSX.Element[];
}

const MainPageTemplate: React.FC<MainPageTemplateProps> = (props) => {
  return (
    <div className="flex h-fit w-full flex-col overflow-x-hidden">
      {/* <HeadNav /> */}
      <HomePageBanner />
      {/* <div className="flex h-fit w-full flex-col">{props.children}</div> */}
      {/* <Contact/> */}
      {/* <Bottom /> */}
      
    </div>
  );
};

export default MainPageTemplate;
