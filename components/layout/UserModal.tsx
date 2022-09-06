import { useRouter } from "next/router";

import Image from "next/image";

import classes from "./UserModal.module.css";
import { loggedUser, usersValue } from "../../slices/usersSlice";
import { useSelector, useDispatch } from "react-redux";
import { follow, unfollow } from "../../slices/usersSlice";
import PostCard from "../posts/PostCard";

import { generateRandomNumber } from "../../Helpers";
import NewPostField from "./NewPostField/NewPostField";

const UserModal = () => {
  const router = useRouter();

  let profileId: number;

  if (router.query.id) {
    profileId = +router.query.id;
  }

  const users = useSelector(usersValue);

  const currentLoggedUser = useSelector(loggedUser);

  const isLoggedUser = router.query.id === currentLoggedUser.toString();

  const [loggedUserData] = users.filter((user) => {
    if (user.id === currentLoggedUser) {
      return user;
    }
  });

  const [profileData] = users.filter((user) => {
    if (user.id === profileId) {
      return user;
    }
  });

  const loggedUserFollowingArray = loggedUserData.following;

  const isLoggedUserFollowing = loggedUserFollowingArray.includes(
    profileData.id
  );

  const profilePosts = profileData.posts;

  const dateOptions: {
    day: "numeric" | "2-digit" | undefined;
    month: "long";
    year: "numeric" | "2-digit" | undefined;
  } = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  const joinedDate = new Intl.DateTimeFormat("pt-BR", dateOptions).format(
    profileData.dateJoined * 1000
  );

  const dispatch = useDispatch();

  console.log(users[0].following);

  return (
    <div className={classes.modal}>
      <Image
        src={profileData.photo}
        height="150px"
        width="150px"
        alt="Foto de perfil"
        className={classes["user-photo"]}
      />
      <span className={classes["user-name"]}>{profileData.name}</span>
      {isLoggedUser && (
        <button
          className={`${classes["follow-button"]} ${classes["logged-user"]}`}
        >
          Você
        </button>
      )}
      {!isLoggedUser && !isLoggedUserFollowing && (
        <button
          className={classes["follow-button"]}
          onClick={() => dispatch(follow(profileId))}
        >
          Seguir
        </button>
      )}
      {!isLoggedUser && isLoggedUserFollowing && (
        <button
          className={`${classes["follow-button"]} ${classes.following}`}
          onClick={() => dispatch(unfollow(profileId))}
        >
          Seguindo
        </button>
      )}
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
        <>
          {isLoggedUser && <NewPostField />}
          {profilePosts.map((post) => {
            return (
              <PostCard
                firstLevelPoster={post.postedBy}
                secondLevelPoster={post.originalPoster}
                postType={post.type}
                comment={post.comment}
                content={post.content}
                key={generateRandomNumber(0, 1000)}
              />
            );
          })}
        </>
      </div>
    </div>
  );
};

export default UserModal;
