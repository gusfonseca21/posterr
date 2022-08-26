import { useSelector } from "react-redux";
import { usersValue } from "../../slices/usersSlice";
import OriginalPosts from "../posts/OriginalPosts";
import Reposts from "../posts/Reposts";

const Posts = () => {
  const users = useSelector(usersValue);

  users.map((user) => {
    user.posts.map((post) => {
      console.log(post.type === "repost" && post.content);
    });
  });

  return (
    <>
      {users.map((user) => {
        return user.posts.map((post) => {
          if (post.type === "original") {
            return (
              <OriginalPosts
                userId={user.id}
                userPhoto={user.photo}
                userName={user.name}
                postContent={post.content}
                key={post.postId}
              />
            );
          }
          if (post.type === "repost") {
            return (
              <Reposts
                userId={user.id}
                originalUserPoster={users.filter(
                  (user) => user.id === post.originalPoster
                )}
                reposterName={user.name}
                originalPostContent={post.content}
              />
            );
          }
        });
      })}
    </>
  );
};

export default Posts;
