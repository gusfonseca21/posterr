import { useSelector, useDispatch } from "react-redux";
import {
  numberOfPostsIn24HoursValue,
  usersValue,
} from "../../slices/usersSlice";
import PostCard from "../posts/PostCard";

import { useRouter } from "next/router";

import { updateNumberOfPostsIn24Hours } from "../../slices/usersSlice";

import { generateRandomNumber } from "../../Helpers";

const Posts = () => {
  const users = useSelector(usersValue);

  const dispatch = useDispatch();

  const numberOfPostsPerDay = useSelector(numberOfPostsIn24HoursValue);

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

  let initialTimerMinutes: number = 15; // 24 horas em minutos

  if (numberOfPostsPerDay === 1) {
    console.log(numberOfPostsPerDay);
    const timerInterval = setInterval(() => {
      initialTimerMinutes--;
      console.log(initialTimerMinutes);
      if (initialTimerMinutes === 0) {
        clearInterval(timerInterval);
        dispatch(updateNumberOfPostsIn24Hours("reset"));
      }
    }, 1000); // 60000 = um minuto em milisegundos
  }

  return (
    <>
      {showPosts !== "/following" &&
        users.map((user) => {
          return user.posts.map((post) => {
            return (
              <PostCard
                firstLevelPoster={post.postedBy}
                secondLevelPoster={post.originalPoster}
                postType={post.type}
                comment={post.comment}
                content={post.content}
                originalPostId={post.postId}
                key={generateRandomNumber(1, 1000)}
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
                originalPostId={post.postId}
                key={generateRandomNumber(1, 1000)}
              />
            );
          });
        })}
    </>
  );
};

export default Posts;
