import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { HomePageBanner } from "../components/elements/HomePageBanner";
import { api } from "~/utils/api";
import ArticleHeading, { Heading } from "~/components/elements/Heading";

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <HomePageBanner />
    </>
  );
}

