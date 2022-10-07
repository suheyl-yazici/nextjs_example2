import React from "react";
import Link from "next/Link";
import Head from "next/head";


const About = () => {
  return (
    <>
      <Head>
      <title>Hakkında</title>

      </Head>
      <div>
        <h3>About Page</h3>
        <Link href="/">Geri Dön</Link>
      </div>

    <style jsx>
      {`
        h3 {
          font-size:20px;
          font-weight: 500;
          color: orange;
        }
      `}
    
    </style>


    </>
  );
};

export default About;
