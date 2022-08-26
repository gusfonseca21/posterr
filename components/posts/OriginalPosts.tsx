import { useState } from "react";

import Image from "next/image";

import classes from "./OriginalPosts.module.css";

import { AiOutlineRetweet } from "react-icons/ai";
import { MdFormatQuote } from "react-icons/md";

const OriginalPosts: React.FC<{
  userId: number;
  userPhoto: string;
  userName: string;
  postContent: string;
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
  return (
    <div className={classes.posts} key={props.userId}>
      <div className={classes["image-div"]}>
        <Image
          src={props.userPhoto}
          width="80px"
          height="80px"
          alt="Foto de perfil"
          className={classes["profile-picture"]}
        />
      </div>
      <div className={classes["post-body"]}>
        <span className={classes["profile-name"]}>{props.userName}</span>
        <span className={classes["post-content"]}>
          {props.postContent}
          <div className={classes.icons}>
            <div className={classes["repost-icon-div"]}>
              <AiOutlineRetweet
                className={classes["repost-icon"]}
                onMouseEnter={() => mouseEnterRepostIconHandler(props.userId)}
                onMouseLeave={mouseLeaveRepostIconHandler}
              />

              {repostIconState.status && props.userId === repostIconState.id && (
                <div className={classes["repost-icon-hover-div"]}>Repostar</div>
              )}
            </div>
            <div className={classes["quote-icon-div"]}>
              <MdFormatQuote
                className={classes["quote-icon"]}
                onMouseEnter={() => mouseEnterQuoteIconHandler(props.userId)}
                onMouseLeave={mouseLeaveQuoteIconHandler}
              />
              {quoteIconState.status && props.userId === quoteIconState.id && (
                <div className={classes["quote-icon-hover-div"]}>Citar</div>
              )}
            </div>
          </div>
        </span>
      </div>
    </div>
  );
};

export default OriginalPosts;
