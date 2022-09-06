import type { NextPage } from "next";

import Head from "next/head";

import classes from "../styles/Home.module.css";
import UserHomepage from "../components/layout/UserHomepage";
import Posts from "../components/layout/Posts";
import UserModal from "../components/layout/UserModal";

import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();

  const overlayClickHandler = () => {
    if (router.query.id) {
      router.push("/all", undefined, { shallow: true });
    }
  };

  return (
    <>
      {router.query.id && <UserModal />}
      <div className={classes.container} onClick={() => overlayClickHandler()}>
        <Head>
          <title>Posterr</title>
        </Head>
        <main
          className={`${classes.main} ${router.query.id && classes.overlay}`}
        >
          <div className={classes["main-header"]}>
            <h3 className={classes.logo}>Posterr</h3>
            <h3 className={classes["homepage-title"]}>Página Inicial</h3>
          </div>
          <UserHomepage />
          <Posts />
        </main>
      </div>
    </>
  );
};

export default Home;
