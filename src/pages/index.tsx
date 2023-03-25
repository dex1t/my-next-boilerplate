import { NextPage } from "next";
import Head from "next/head";
import { DefaultLayout } from "@/layouts/DefaultLayout";
import { Text } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Boilerplate</title>
      </Head>
      <DefaultLayout>
        <Text>main</Text>
      </DefaultLayout>
    </>
  );
};
export default Home;
