import Image from "next/image";
import { useRouter } from "next/router";

import { useSelector } from "react-redux";
import { usersValue } from "../../slices/usersSlice";

import classes from "./UserHomepage.module.css";
import Link from "next/link";

const UserHomepage = () => {
  const user = useSelector(usersValue);

  const router = useRouter();

  const routerPath = router.pathname;

  return (
    <div className={classes["user-homepage"]}>
      <div className={classes["profile-picture-div"]}>
        <Image
          src={user[0].photo}
          width="80px"
          height="80px"
          alt="Foto de perfil"
          className={classes["profile-picture"]}
        />
      </div>
      <div className={classes["input-button-div"]}>
        <input
          type="text"
          className={classes["profile-input"]}
          placeholder="Poste alguma coisa!"
        />
        <button className={classes["post-button"]}>Postar</button>
      </div>
      {routerPath === "/all" ||
        (routerPath === "/following" && (
          <div className={classes["posts-button"]}>
            <Link href={"/all"}>
              <span
                className={`${classes["button-text"]} ${
                  router.pathname === "/all" && classes.active
                }`}
              >
                Todos{" "}
              </span>
            </Link>
            <Link href={"/following"}>
              <span
                className={`${classes["button-text"]} ${
                  router.pathname === "/following" && classes.active
                }`}
              >
                {" "}
                Seguindo
              </span>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default UserHomepage;
