import type { NextPage } from "next";

import Head from "next/head";

import classes from "../styles/Home.module.css";
import UserHomepage from "../components/layout/UserHomepage";
import Posts from "../components/layout/Posts";

const Home: NextPage = () => {
  return (
    <div className={classes.container}>
      <Head>
        <title>Posterr</title>
      </Head>
      <main className={classes.main}>
        <div className={classes["main-header"]}>
          <h3 className={classes.logo}>Posterr</h3>
          <h3 className={classes["homepage-title"]}>Página Inicial</h3>
        </div>
        <UserHomepage />
        <Posts />
      </main>
    </div>
  );
};

export default Home;
