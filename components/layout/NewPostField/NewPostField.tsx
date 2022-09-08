import Image from "next/image";
import { useState } from "react";
import { useSelector } from "react-redux";
import { usersValue } from "../../../slices/usersSlice";

import { useDispatch } from "react-redux";
import { newOriginalPost } from "../../../slices/usersSlice";

import classes from "./NewPostField.module.css";

const NewPostField = () => {
  const [characterCount, setCharacterCount] = useState(0);
  const [newPostContent, setNewPostContent] = useState("");
  const [postsOn24Hours, setPostsOn24Hours] = useState(0);

  const user = useSelector(usersValue);

  const dispatch = useDispatch();

  let initialTimerMinutes: number = 1440; // 24 horas em minutos

  const characterCountHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setCharacterCount(e.currentTarget.value.length);
    setNewPostContent(e.currentTarget.value);
  };

  const postClickHandler = () => {
    if (newPostContent.trim().length > 0) {
      if (postsOn24Hours >= 5) {
        return;
      }
      if (postsOn24Hours < 5) {
        dispatch(newOriginalPost(newPostContent));
        setNewPostContent("");
        setCharacterCount(0);
        if (postsOn24Hours === 0) {
          const timerInterval = setInterval(() => {
            initialTimerMinutes--;
            if (initialTimerMinutes === 0) {
              setPostsOn24Hours(0);
              clearInterval(timerInterval);
            }
          }, 60000); // 60000 = milisegundos em um minuto
        }
        setPostsOn24Hours((posts) => posts + 1);
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
            postsOn24Hours >= 5 && classes["post-button-blocked"]
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
