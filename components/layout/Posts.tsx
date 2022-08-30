import { useSelector } from "react-redux";
import { usersValue } from "../../slices/usersSlice";
import PostCard from "../posts/PostCard";
const Posts = () => {
  const users = useSelector(usersValue);

  return (
    <>
      {users.map((user) => {
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
