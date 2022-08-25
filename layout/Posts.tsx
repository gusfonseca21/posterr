import Image from "next/image";

import classes from "./Posts.module.css";

import { useSelector } from "react-redux";
import { postsValue } from "../slices/postsSlice";

import { AiOutlineRetweet } from "react-icons/ai";
import { MdFormatQuote } from "react-icons/md";
import { useState } from "react";

const Posts = () => {
  const [repostIconState, setRepostIconState] = useState({
    status: false,
    id: "",
  });
  const [quoteIconState, setQuoteIconState] = useState({
    status: false,
    id: "",
  });

  const posts = useSelector(postsValue);

  const mouseEnterRepostIconHandler = (id: string) => {
    setRepostIconState({ status: true, id });
  };

  const mouseLeaveRepostIconHandler = () => {
    setRepostIconState({ status: false, id: "" });
  };

  const mouseEnterQuoteIconHandler = (id: string) => {
    setQuoteIconState({ status: true, id });
  };

  const mouseLeaveQuoteIconHandler = () => {
    setQuoteIconState({ status: false, id: "" });
  };

  console.log(repostIconState);

  return (
    <>
      {posts.map((post) => {
        return (
          <div className={classes.posts} key={post.id}>
            <div className={classes["image-div"]}>
              <Image
                src={post.user.profilePicture}
                width="80px"
                height="80px"
                alt="Foto de perfil"
                className={classes["profile-picture"]}
              />
            </div>
            <div className={classes["post-body"]}>
              <span className={classes["profile-name"]}>{post.user.name}</span>
              <span className={classes["post-content"]}>
                {post.content}
                <div className={classes.icons}>
                  <div className={classes["repost-icon-div"]}>
                    <AiOutlineRetweet
                      className={classes["repost-icon"]}
                      onMouseEnter={() => mouseEnterRepostIconHandler(post.id)}
                      onMouseLeave={mouseLeaveRepostIconHandler}
                    />

                    {repostIconState.status && post.id === repostIconState.id && (
                      <div
                        id={post.id}
                        className={classes["repost-icon-hover-div"]}
                      >
                        Repostar
                      </div>
                    )}
                  </div>
                  <div className={classes["quote-icon-div"]}>
                    <MdFormatQuote
                      className={classes["quote-icon"]}
                      onMouseEnter={() => mouseEnterQuoteIconHandler(post.id)}
                      onMouseLeave={mouseLeaveQuoteIconHandler}
                    />
                    {quoteIconState.status && post.id === quoteIconState.id && (
                      <div
                        id={post.id}
                        className={classes["quote-icon-hover-div"]}
                      >
                        Citar
                      </div>
                    )}
                  </div>
                </div>
              </span>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Posts;

{
  /* <div className={classes.posts} key={post.id}>
  <Image
    src={post.user.profilePicture}
    width="80px"
    height="80px"
    alt="Foto de perfil"
    className={classes["profile-picture"]}
  />
  <div className={classes["post-body"]}>
    <span className={classes["profile-name"]}>{post.user.name}</span>
    <span className={classes["post-content"]}>
      {post.content}
      <div className={classes.icons}>
        <AiOutlineRetweet className={classes["repost-icon"]} />
        <MdFormatQuote className={classes["quote-icon"]} />
      </div>
    </span>
  </div>
</div>; */
}
