import Image from "next/image";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
  changeQuoteModalStatus,
  changeQuoteModalStatusValue,
  newQuote,
  numberOfPostsIn24HoursValue,
  updateNumberOfPostsIn24Hours,
  usersValue,
} from "../../../slices/usersSlice";

import { useDispatch } from "react-redux";
import { newOriginalPost } from "../../../slices/usersSlice";

import classes from "./NewPostField.module.css";

const NewPostField = () => {
  const [characterCount, setCharacterCount] = useState(0);
  const [newPostContent, setNewPostContent] = useState("");

  const users = useSelector(usersValue);

  const changeQuoteModalValue = useSelector(changeQuoteModalStatusValue);

  const numberOfPostsPerDay = useSelector(numberOfPostsIn24HoursValue);

  const dispatch = useDispatch();

  const characterCountHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setCharacterCount(e.currentTarget.value.length);
    setNewPostContent(e.currentTarget.value);
  };

  const postClickHandler = () => {
    if (newPostContent.trim().length > 0) {
      dispatch(updateNumberOfPostsIn24Hours(""));
      if (numberOfPostsPerDay >= 5) {
        return;
      }
      if (numberOfPostsPerDay < 5) {
        if (!changeQuoteModalValue.status) {
          dispatch(newOriginalPost(newPostContent));
          setNewPostContent("");
          setCharacterCount(0);
          dispatch(updateNumberOfPostsIn24Hours);
        }
        if (changeQuoteModalValue.status) {
          const originalPostId = changeQuoteModalValue.id;

          const usersPosts = users.flatMap((user) => user.posts);

          const [originalPost] = usersPosts.filter(
            (post) => post.postId === originalPostId
          );
          dispatch(
            newQuote({
              originalPoster: originalPost.postedBy,
              originalPostId: originalPostId,
              comment: newPostContent,
              content: originalPost.content,
            })
          );

          dispatch(changeQuoteModalStatus({ id: null, setState: false }));
        }
      }
    } else {
      return;
    }
  };

  return (
    <div className={classes["new-post"]}>
      <div className={classes["profile-picture-div"]}>
        <Image
          src={users[0].photo}
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
          maxLength={777}
          onChange={characterCountHandler}
          value={newPostContent}
        />
        <button
          className={`${classes["post-button"]} ${
            numberOfPostsPerDay >= 5 && classes["post-button-blocked"]
          }`}
          onClick={postClickHandler}
        >
          Postar
        </button>
      </div>
      <div
        className={classes["character-count"]}
      >{`${characterCount}/777 caracteres`}</div>
    </div>
  );
};

export default NewPostField;
