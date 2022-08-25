import Image from "next/image";

import classes from "./UserHomepage.module.css";

const UserHomepage = () => {
  const user = {
    picture: "/../public/images/faces/8.jpg",
  };
  return (
    <div className={classes["user-homepage"]}>
      <div className={classes["profile-picture-div"]}>
        <Image
          src={user.picture}
          width="80px"
          height="80px"
          alt="Foto de perfil"
          className={classes["profile-picture"]}
        />
      </div>
      <div className={classes["input-button-div"]}>
        <input
          type="text"
          size={1}
          className={classes["profile-input"]}
          placeholder="Poste alguma coisa!"
        />
        <button className={classes["post-button"]}>Postar</button>
      </div>
    </div>
  );
};

export default UserHomepage;
