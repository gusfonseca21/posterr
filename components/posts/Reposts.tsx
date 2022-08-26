import Image from "next/image";

import classes from "./Reposts.module.css";

const Reposts: React.FC<{
  userId: number;
  originalUserPoster: any;
  reposterName: string;
  originalPostContent: string;
}> = (props) => {
  const originalPosterPhoto = props.originalUserPoster[0].photo;
  const originalPosterName = props.originalUserPoster[0].name;
  return (
    <div className={classes.posts} key={props.userId}>
      <span className={classes["reposted-title"]}>
        {props.reposterName + " reposted"}
      </span>
      <div className={classes["image-div"]}>
        <Image
          src={originalPosterPhoto}
          width="80px"
          height="80px"
          alt="Foto de perfil"
          className={classes["profile-picture"]}
        />
      </div>
      <div className={classes["post-body"]}>
        <span className={classes["profile-name"]}>{originalPosterName}</span>
        <span className={classes["post-content"]}>
          {props.originalPostContent}
        </span>
      </div>
    </div>
  );
};

export default Reposts;
