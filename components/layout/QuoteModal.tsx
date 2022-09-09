import { useDispatch, useSelector } from "react-redux";
import {
  changeQuoteModalStatus,
  changeQuoteModalStatusValue,
  loggedUser,
  newOriginalPost,
  usersValue,
} from "../../slices/usersSlice";
import PostCard from "../posts/PostCard";
import NewPostField from "./NewPostField/NewPostField";
import classes from "./QuoteModal.module.css";

const QuoteModal = () => {
  const changeQuoteModalValue = useSelector(changeQuoteModalStatusValue);

  const dispatch = useDispatch();

  const users = useSelector(usersValue);

  const userLogged = useSelector(loggedUser);

  const originalPostId = changeQuoteModalValue.id;

  const usersPosts = users.map((user) => {
    return user.posts;
  });

  const [originalPost] = usersPosts
    .flatMap((post) => {
      return post;
    })
    .filter((post) => {
      return post.postId === originalPostId;
    });

  return (
      <div className={classes.modal}>
        <NewPostField />
        <PostCard
          firstLevelPoster={originalPost.postedBy}
          secondLevelPoster={userLogged}
          postType={"original"}
          comment={null}
          content={originalPost.content}
          originalPostId={originalPost.postId}
        />
      </div>
  );
};

export default QuoteModal;
