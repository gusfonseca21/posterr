import Image from "next/image";

import { useSelector } from "react-redux";
import { userProfileValue } from "../../slices/userProfileSlice";

import classes from "./UserHomepage.module.css";

const UserHomepage = () => {
  const userProfile = useSelector(userProfileValue);

  return (
    <div className={classes["user-homepage"]}>
      <div className={classes["profile-picture-div"]}>
        <Image
          src={userProfile.profilePicture}
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

export default UserHomepage;
