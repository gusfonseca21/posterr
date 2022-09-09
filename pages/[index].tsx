import type { NextPage } from "next";

import Head from "next/head";

import classes from "../styles/Home.module.css";
import UserHomepage from "../components/layout/UserHomepage";
import Posts from "../components/layout/Posts";
import UserModal from "../components/layout/UserModal";

import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import {
  changeQuoteModalStatus,
  changeQuoteModalStatusValue,
} from "../slices/usersSlice";
import QuoteModal from "../components/layout/QuoteModal";

const Home: NextPage = () => {
  const router = useRouter();

  const dispatch = useDispatch();

  const quoteModalStatus = useSelector(changeQuoteModalStatusValue);

  const overlayClickHandler = () => {
    if (router.query.id) {
      router.push("/all", undefined, { shallow: true });
    }

    if (quoteModalStatus.status) {
      dispatch(changeQuoteModalStatus({ id: null, setState: false }));
    }
  };

  return (
    <>
      {router.query.id && <UserModal />}
      {quoteModalStatus.status && <QuoteModal />}
      <div
        className={`${classes.container} ${
          quoteModalStatus.status && classes.overlay
        }`}
        onClick={overlayClickHandler}
      >
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
