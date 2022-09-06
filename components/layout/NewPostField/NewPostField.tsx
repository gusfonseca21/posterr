import Image from "next/image";
import { useSelector } from "react-redux";
import { usersValue } from "../../../slices/usersSlice";

import classes from "./NewPostField.module.css";

const NewPostField = () => {
  const user = useSelector(usersValue);
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
        />
        <button className={classes["post-button"]}>Postar</button>
      </div>
    </div>
  );
};

export default NewPostField;
