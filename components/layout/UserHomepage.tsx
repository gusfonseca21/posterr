import Image from "next/image";
import { useRouter } from "next/router";

import { useSelector } from "react-redux";
import { usersValue } from "../../slices/usersSlice";
import NewPostField from "./NewPostField/NewPostField";

import classes from "./UserHomepage.module.css";

const UserHomepage = () => {
  const router = useRouter();

  return (
    <div className={classes["user-homepage"]}>
      <NewPostField />
      <div className={classes["posts-button"]}>
        <span
          className={`${classes["button-text"]} ${
            router.pathname === "/all" && classes.active
          }`}
          onClick={() => router.push("/all", undefined, { shallow: true })}
        >
          Todos{" "}
        </span>
        <span
          className={`${classes["button-text"]} ${
            router.pathname === "/following" && classes.active
          }`}
          onClick={() =>
            router.push("/following", undefined, { shallow: true })
          }
        >
          {" "}
          Seguindo
        </span>
      </div>
    </div>
  );
};

export default UserHomepage;
