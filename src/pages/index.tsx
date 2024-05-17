import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import OurHealthHazard from "~/components/elements/OurHealthHazard";
import OurSpaciality from "~/components/elements/OurSpaciality";
import HeadNav from "~/components/layout/HeadNav";


// import { Banner } from "../components/elements/Banner";


import { HomePageBanner } from "../components/elements/HomePageBanner";



import { api } from "~/utils/api";
import Heading from "~/components/elements/TextPattern";
import Bottom from "~/components/layout/Bottom";
import Appointment from "~/components/elements/Appointments";
import Article from "~/components/elements/Article";
import React from "react";
import MainPageTemplate from "~/components/templates/MainPageTemplate";
import TextPattern from "~/components/elements/TextPattern";
const Home: React.FunctionComponent = () => {
  return (
    <>
      <MainPageTemplate>

        {/* <ShowAppointment /> */}
        {/* <ArticleHeading /> */}
        {/* <ShowArticle /> */}

        <Appointment />
        <TextPattern firstHeading="Read Professional Articles" secondHeading1="Latest" secondHeading2="Articles" text="Lorem ipsum dolor amet consectetur adipisicing eliteiuim sete eiusmod tempor incididunt ut 
        labore etnalom dolore magna aliqua udiminimate veniam quis norud." />

        <Article />

      </MainPageTemplate>
    </>
  );
};

export default Home;

