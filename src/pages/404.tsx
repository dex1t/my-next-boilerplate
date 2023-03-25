import type { NextPage } from "next";
import Head from "next/head";
import { DefaultLayout } from "@/layouts/DefaultLayout";
import { Text } from "@chakra-ui/react";

const NotFound: NextPage = () => {
  return (
    <>
      <Head>
        <title>Not Found | Example</title>
      </Head>

      <DefaultLayout>
        <Text textAlign="center">
          <p>404 - Page Not Found</p>
        </Text>
      </DefaultLayout>
    </>
  );
};

export default NotFound;
