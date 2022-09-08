import Image from "next/image";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
  numberOfPostsIn24Hours,
  updateNumberOfPostsIn24Hours,
  usersValue,
} from "../../../slices/usersSlice";

import { useDispatch } from "react-redux";
import { newOriginalPost } from "../../../slices/usersSlice";

import classes from "./NewPostField.module.css";

const NewPostField = () => {
  const [characterCount, setCharacterCount] = useState(0);
  const [newPostContent, setNewPostContent] = useState("");

  const user = useSelector(usersValue);

  const numberOfPostsPerDay = useSelector(numberOfPostsIn24Hours);

  const dispatch = useDispatch();

  const characterCountHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setCharacterCount(e.currentTarget.value.length);
    setNewPostContent(e.currentTarget.value);
  };

  const postClickHandler = () => {
    dispatch(updateNumberOfPostsIn24Hours(""));
    if (newPostContent.trim().length > 0) {
      if (numberOfPostsPerDay >= 5) {
        return;
      }
      if (numberOfPostsPerDay < 5) {
        dispatch(newOriginalPost(newPostContent));
        setNewPostContent("");
        setCharacterCount(0);
        dispatch(updateNumberOfPostsIn24Hours);
      }
    } else {
      return;
    }
  };

  return (
    <div className={classes["new-post"]}>
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
