import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";


import HeadNav from "~/components/layout/HeadNav";

// import { Banner } from "../components/elements/Banner";


import { HomePageBanner } from "../components/elements/HomePageBanner";

import { api } from "~/utils/api";
import ArticleHeading, { Heading } from "~/components/elements/Heading";
import Bottom from "~/components/layout/Bottom";
import ShowAppointment, {
  AppointmentBook,
} from "~/components/elements/Appointments";
import ShowArticle, { Article } from "~/components/elements/Article";
import React from "react";
import MainPageTemplate from "~/components/templates/MainPageTemplate";
const Home: React.FunctionComponent = () => {
  return (
    <>
      <MainPageTemplate>
        {/* <ShowAppointment /> */}
        {/* <ArticleHeading /> */}
        {/* <ShowArticle /> */}
      </MainPageTemplate>
    </>
  );
};

export default Home;
    



