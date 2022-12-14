import { useState } from "react";

import Image from "next/image";

import classes from "./PostCard.module.css";

import { AiOutlineRetweet } from "react-icons/ai";
import { MdFormatQuote } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import {
  changeQuoteModalStatus,
  changeQuoteModalStatusValue,
  loggedUser,
  numberOfPostsIn24HoursValue,
  usersValue,
} from "../../slices/usersSlice";
import { useRouter } from "next/router";

import {
  newRepost,
  updateNumberOfPostsIn24Hours,
} from "../../slices/usersSlice";
import { generateRandomNumber } from "../../Helpers";

const PostCard: React.FC<{
  firstLevelPoster: number | null;
  secondLevelPoster: number | null;
  postType: string;
  comment: string | null;
  content: string;
  originalPostId: number | null;
}> = (props) => {
  const [repostIconState, setRepostIconState] = useState({
    status: false,
    id: 0,
  });
  const [quoteIconState, setQuoteIconState] = useState({
    status: false,
    id: 0,
  });

  const mouseEnterRepostIconHandler = (id: number) => {
    setRepostIconState({ status: true, id });
  };

  const mouseLeaveRepostIconHandler = () => {
    setRepostIconState({ status: false, id: 0 });
  };

  const mouseEnterQuoteIconHandler = (id: number) => {
    setQuoteIconState({ status: true, id });
  };

  const mouseLeaveQuoteIconHandler = () => {
    setQuoteIconState({ status: false, id: 0 });
  };

  const users = useSelector(usersValue);

  const changeQuoteModalValue = useSelector(changeQuoteModalStatusValue);

  const numberOfPostsPerDay = useSelector(numberOfPostsIn24HoursValue);

  const userLogged = useSelector(loggedUser);

  const dispatch = useDispatch();

  const router = useRouter();

  const isOriginal = props.postType === "original";
  const isRepost = props.postType === "repost";
  const isQuote = props.postType === "quote";

  const firstLevelPoster = users.filter(
    (user) => user.id === props.firstLevelPoster
  );

  const secondLevelPoster = users.filter(
    (user) => user.id === props.secondLevelPoster
  );

  const clickUserNameHandler = (id: number) => {
    router.push(`/user/${id}`, undefined, { shallow: true });
  };

  const newRepostClickHandler = () => {
    dispatch(updateNumberOfPostsIn24Hours(""));
    if (numberOfPostsPerDay >= 5) {
      return;
    }
    if (numberOfPostsPerDay < 5) {
      dispatch(
        newRepost({
          originalPoster: props.firstLevelPoster,
          originalPostId: generateRandomNumber(0, 1000),
          content: props.content,
        })
      );
    } else {
      return;
    }
  };

  const quoteClickHandler = () => {
    dispatch(
      changeQuoteModalStatus({ id: props.originalPostId, setState: true })
    );
  };

  return (
    <div
      className={`${classes.posts} ${isRepost ? classes.repost : ""}`}
      key={firstLevelPoster[0].id}
    >
      {isRepost && (
        <span
          className={classes["reposted-title"]}
          onClick={() => clickUserNameHandler(firstLevelPoster[0].id)}
        >
          {firstLevelPoster[0].name + " repostou"}
        </span>
      )}
      <div className={classes["image-div"]}>
        <Image
          src={`${
            isOriginal || isQuote
              ? firstLevelPoster[0].photo
              : secondLevelPoster[0].photo
          }`}
          width="80px"
          height="80px"
          alt="Foto de perfil"
          className={classes["profile-picture"]}
        />
      </div>
      {isQuote && (
        <div className={classes["post-body"]}>
          <span
            className={classes["profile-name"]}
            onClick={() => clickUserNameHandler(firstLevelPoster[0].id)}
          >
            {firstLevelPoster[0].name}
          </span>
          <span className={classes["post-content"]}>{props.comment}</span>
          <div className={classes["post-quoted"]}>
            <div className={classes.posts} key={firstLevelPoster[0].id}>
              <div className={classes["image-div"]}>
                <Image
                  src={secondLevelPoster[0]?.photo}
                  width="80px"
                  height="80px"
                  alt="Foto de perfil"
                  className={classes["profile-picture"]}
                />
              </div>
              <div className={classes["post-body"]}>
                <span
                  className={classes["profile-name"]}
                  onClick={() => clickUserNameHandler(secondLevelPoster[0].id)}
                >
                  {secondLevelPoster[0]?.name}
                </span>
                <span className={classes["post-content"]}>{props.content}</span>
              </div>
            </div>
          </div>
        </div>
      )}
      {!isQuote && (
        <div className={classes["post-body"]}>
          <span
            className={classes["profile-name"]}
            onClick={() =>
              `${
                !isRepost
                  ? clickUserNameHandler(firstLevelPoster[0].id)
                  : clickUserNameHandler(secondLevelPoster[0].id)
              }`
            }
          >
            {isRepost ? secondLevelPoster[0]?.name : firstLevelPoster[0].name}
          </span>
          <span className={classes["post-content"]}>
            {props.content}
            {props.postType === "original" &&
              props.firstLevelPoster !== userLogged &&
              !changeQuoteModalValue.status && (
                <div className={classes.icons}>
                  <div
                    className={classes["repost-icon-div"]}
                    onClick={newRepostClickHandler}
                  >
                    <AiOutlineRetweet
                      className={classes["repost-icon"]}
                      onMouseEnter={() =>
                        mouseEnterRepostIconHandler(firstLevelPoster[0].id)
                      }
                      onMouseLeave={mouseLeaveRepostIconHandler}
                    />

                    {repostIconState.status &&
                      firstLevelPoster[0].id === repostIconState.id && (
                        <div className={classes["repost-icon-hover-div"]}>
                          Repostar
                        </div>
                      )}
                  </div>
                  <div
                    className={classes["quote-icon-div"]}
                    onClick={quoteClickHandler}
                  >
                    <MdFormatQuote
                      className={classes["quote-icon"]}
                      onMouseEnter={() =>
                        mouseEnterQuoteIconHandler(firstLevelPoster[0].id)
                      }
                      onMouseLeave={mouseLeaveQuoteIconHandler}
                    />
                    {quoteIconState.status &&
                      firstLevelPoster[0].id === quoteIconState.id && (
                        <div className={classes["quote-icon-hover-div"]}>
                          Citar
                        </div>
                      )}
                  </div>
                </div>
              )}
          </span>
        </div>
      )}
    </div>
  );
};

export default PostCard;
