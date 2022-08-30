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

  return (
    <>
      {showPosts === "/all" &&
        users.map((user) => {
          return user.posts.map((post) => {
            return (
              <PostCard
                firstLevelPoster={post.postedBy}
                secondLevelPoster={post.originalPoster}
                postType={post.type}
                comment={post.comment}
                content={post.content}
                key={user.id}
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
                key={user.id}
              />
            );
          });
        })}
    </>
  );
};

export default Posts;
