import { useSelector } from "react-redux";
import { usersValue } from "../../slices/usersSlice";
import PostCard from "../posts/PostCard";

import { useRouter } from "next/router";
const Posts = () => {
  const users = useSelector(usersValue);

  const router = useRouter();

  const following = users[0].following;

  const followingUserData = users.filter((user) => {
    for (let id of following) {
      if (id === user.id) {
        return user;
      }
    }
  });

  const showPosts = router.pathname;

  const genrateRandomNumber = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  console.log(showPosts);
  console.log(showPosts.includes("user"));

  return (
    <>
      {showPosts !== "/following" &&
        !showPosts.includes("/user") &&
        users.map((user) => {
          return user.posts.map((post) => {
            return (
              <PostCard
                firstLevelPoster={post.postedBy}
                secondLevelPoster={post.originalPoster}
                postType={post.type}
                comment={post.comment}
                content={post.content}
                key={genrateRandomNumber(1, 90)}
              />
            );
          });
        })}
      {showPosts === "/following" &&
        followingUserData.map((user) => {
          return user.posts.map((post) => {
            return (
              <PostCard
                firstLevelPoster={post.postedBy}
                secondLevelPoster={post.originalPoster}
                postType={post.type}
                comment={post.comment}
                content={post.content}
                key={genrateRandomNumber(1, 90)}
              />
            );
          });
        })}
      {showPosts !== "/following" &&
        showPosts.includes("/user") &&
        users.map((user) => {
          if (user.id === +router.query.id) {
            return user.posts.map((post) => {
              return (
                <PostCard
                  firstLevelPoster={post.postedBy}
                  secondLevelPoster={post.originalPoster}
                  postType={post.type}
                  comment={post.comment}
                  content={post.content}
                  key={genrateRandomNumber(1, 90)}
                />
              );
            });
          }
        })}
    </>
  );
};

export default Posts;
