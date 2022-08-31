import { useRouter } from "next/router";

import Image from "next/image";

import Home from "..";

import classes from "../../styles/UserPage.module.css";
import { profile } from "console";
import { usersValue } from "../../slices/usersSlice";
import { useSelector } from "react-redux";
import Posts from "../../components/layout/Posts";
import UserHomepage from "../../components/layout/UserHomepage";

//TODO: Arrumar a lógica da vizualização da HomePage com o modal quando clicamos no usuário

const UserPage = () => {
  const router = useRouter();

  const profileId = +router.query.id;

  const users = useSelector(usersValue);

  const [profileData] = users.filter((user) => {
    if (user.id === profileId) {
      return user;
    }
  });

  console.log(profileData);

  const overlayClickHandler = () => {
    router.push("/");
  };

  const dateOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  const joinedDate = new Intl.DateTimeFormat("pt-BR", dateOptions).format(
    profileData.dateJoined * 1000
  );
  return (
    <>
      <div className={classes.modal}>
        <Image
          src={profileData.photo}
          height="150px"
          width="150px"
          alt="Foto de perfil"
          className={classes["user-photo"]}
        />
        <span className={classes["user-name"]}>{profileData.name}</span>
        <span className={classes["date-joined"]}>
          {"Juntou-se ao Posterr em "}
          <b>{joinedDate}</b>
        </span>
        <div className={classes["profile-data-div"]}>
          <span className={classes["followers-number"]}>
            {"Seguidores:"} <b>{profileData.followers.length}</b>
          </span>
          <span className={classes["following-number"]}>
            {"Seguindo:"} <b>{profileData.following.length}</b>
          </span>
          <span className={classes["posts-number"]}>
            {"Posts:"} <b>{profileData.posts.length}</b>
          </span>
        </div>
        <div className={classes["modal-posts"]}>
          {profileId === 8 && <UserHomepage />}
          <Posts />
        </div>
      </div>
      <div className={classes.overlay} onClick={overlayClickHandler}>
        <Home />
      </div>
    </>
  );
};

export default UserPage;
