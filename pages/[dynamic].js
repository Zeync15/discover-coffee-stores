import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const Random = () => {
  const router = useRouter();
  console.log(router, "router");
  return (
    <div>
      <Head>
        <title>{router.query.dynamic}</title>
      </Head>
      Welcome to page {router.query.dynamic}
    </div>
  );
};

export default Random;
