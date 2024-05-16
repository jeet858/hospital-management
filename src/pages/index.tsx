import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import OurHealthHazard from "~/components/elements/OurHealthHazard";
import OurSpaciality from "~/components/elements/OurSpaciality";
import HeadNav from "~/components/layout/HeadNav";

import { Banner } from "../components/elements/Banner";

import { api } from "~/utils/api";
import ArticleHeading, { Heading } from "~/components/elements/Heading";
import Bottom from "~/components/layout/Bottom";
import ShowAppointment, {
  AppointmentBook,
} from "~/components/elements/Appointments";
import ShowArticle, { Article } from "~/components/elements/Article";
import React from "react";
const Home: React.FunctionComponent = () => {
  return (
    <>
      <HeadNav />
      <Banner />
      <ShowAppointment />
      <ArticleHeading />
      <ShowArticle />
      <Bottom />
    </>
  );
};

export default Home;
