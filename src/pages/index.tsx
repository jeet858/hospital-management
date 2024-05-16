import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";

import HeadNav from "~/components/layout/HeadNav";

import HomePageBanner from "../components/elements/HomePageBanner";

import { api } from "~/utils/api";
import Heading from "~/components/elements/Heading";
import Bottom from "~/components/layout/Bottom";
import Appointment from "~/components/elements/Appointments";
import Article from "~/components/elements/Article";
import React from "react";
import MainPageTemplate from "~/components/templates/MainPageTemplate";
const Home: React.FunctionComponent = () => {
  return (
    <>
      <MainPageTemplate>
        <Appointment />
        <Heading firstHeading="" secondHeading1="" secondHeading2="" text="" />

        <Article />
      </MainPageTemplate>
      {/* <HeadNav />
      <Banner />

      <Bottom /> */}
    </>
  );
};

export default Home;
