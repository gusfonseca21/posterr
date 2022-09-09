import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

import { generateRandomNumber } from "../Helpers";
import PostCard from "../components/posts/PostCard";

export interface UsersState {
  users: {
    id: number;
    name: string;
    photo: string;
    dateJoined: number;
    followers: number[];
    following: number[];
    posts: {
      postId: number;
      postedBy: number;
      type: string;
      originalPoster: number | null;
      originalPostId: number | null;
      comment: string | null;
      content: string;
    }[];
  }[];
  loggedUser: number;
  numberOfPostsPerDay: number;
  quoteModalStatus: { status: boolean; id: number | null };
}

const initialState: UsersState = {
  users: [
    {
      id: 8,
      name: "renatabritto",
      photo: "/../public/images/faces/8.jpg",
      dateJoined: 1645412400,
      followers: [16, 22, 36, 44, 63],
      following: [16, 22, 44],
      posts: [
        {
          postId: 6,
          type: "original",
          originalPoster: null,
          originalPostId: null,
          comment: null,
          postedBy: 8,
          content: "Olá, esse é meu primeiro post no Posterr!",
        },
        {
          postId: 7309,
          type: "repost",
          originalPoster: 16,
          originalPostId: 166,
          comment: null,
          postedBy: 8,
          content:
            "A human being has a natural desire to have more of a good thing than he needs.",
        },
        {
          postId: 979,
          type: "quote",
          originalPoster: 16,
          originalPostId: 166,
          comment: "Muito legal!",
          postedBy: 8,
          content:
            "A human being has a natural desire to have more of a good thing than he needs.",
        },
      ],
    },
    {
      id: 16,
      name: "TwainMark",
      photo: "/../public/images/faces/16.jpg",
      dateJoined: 1642820400,
      followers: [8, 22, 36, 44],
      following: [8, 22, 36, 44, 63],
      posts: [
        {
          postId: 166,
          type: "original",
          originalPoster: null,
          originalPostId: null,
          comment: null,
          postedBy: 16,
          content:
            "A human being has a natural desire to have more of a good thing than he needs.",
        },
      ],
    },
    {
      id: 22,
      name: "Lopez",
      photo: "/../public/images/faces/22.jpg",
      dateJoined: 1644721200,
      followers: [8, 16, 36],
      following: [8, 16, 36, 44],
      posts: [
        {
          postId: 177,
          type: "original",
          originalPoster: null,
          originalPostId: null,
          comment: null,
          postedBy: 22,
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
      ],
    },
    {
      id: 36,
      name: "Adriano11",
      photo: "/../public/images/faces/36.jpg",
      dateJoined: 1643770800,
      followers: [16, 22],
      following: [8, 16, 22],
      posts: [
        {
          postId: 29,
          type: "original",
          originalPoster: null,
          originalPostId: null,
          comment: null,
          postedBy: 36,
          content:
            "Mas devo explicar-lhe como nasceu toda essa idéia equivocada de denunciar um prazer e louvar a dor, e lhe darei um relato completo do sistema, expondo os ensinamentos reais do grande explorador da verdade, o mestre-construtor da felicidade humana.",
        },
      ],
    },
    {
      id: 44,
      name: "afabianaMendez",
      photo: "/../public/images/faces/44.jpg",
      dateJoined: 1647140400,
      followers: [8, 16, 22],
      following: [8, 16],
      posts: [
        {
          postId: 225,
          type: "original",
          originalPoster: null,
          originalPostId: null,
          comment: null,
          postedBy: 44,
          content:
            "Nulla orci arcu, sollicitudin sit amet felis vel, condimentum dignissim dolor. Praesent imperdiet urna vel eros tincidunt, blandit ornare massa porttitor.",
        },
      ],
    },
    {
      id: 63,
      name: "00diana",
      photo: "/../public/images/faces/63.jpg",
      dateJoined: 1653966000,
      followers: [16, 22],
      following: [8],
      posts: [
        {
          postId: 75,
          type: "original",
          originalPoster: null,
          originalPostId: null,
          comment: null,
          postedBy: 63,
          content:
            "Etiam dapibus gravida odio, facilisis ultrices quam scelerisque ac. Donec condimentum ac nisi vitae bibendum. Cras condimentum nunc gravida mi euismod tincidunt.",
        },
      ],
    },
  ],
  loggedUser: 8,
  numberOfPostsPerDay: 0,
  quoteModalStatus: { status: false, id: null },
};

export const usersState = createSlice({
  name: "users",
  initialState,
  reducers: {
    follow: (state, action: PayloadAction<number>) => {
      state.users[0].following.push(action.payload);
    },
    unfollow: (state, action: PayloadAction<number>) => {
      state.users[0].following = state.users[0].following.filter(
        (users) => users !== action.payload
      );
    },
    newOriginalPost: (state, action: PayloadAction<string>) => {
      state.users[0].posts.unshift({
        postId: generateRandomNumber(0, 1000),
        type: "original",
        originalPoster: null,
        originalPostId: null,
        comment: null,
        postedBy: 8,
        content: action.payload,
      });
    },
    newRepost: (
      state,
      action: PayloadAction<{
        originalPoster: number | null;
        originalPostId: number;
        content: string;
      }>
    ) => {
      state.users[0].posts.unshift({
        postId: generateRandomNumber(0, 1000),
        type: "repost",
        originalPoster: action.payload.originalPoster,
        originalPostId: action.payload.originalPostId,
        comment: null,
        postedBy: 8,
        content: action.payload.content,
      });
    },
    updateNumberOfPostsIn24Hours: (state, action: PayloadAction<string>) => {
      if (state.numberOfPostsPerDay < 5) {
        state.numberOfPostsPerDay = state.numberOfPostsPerDay + 1;
      }

      if (action.payload === "reset") {
        state.numberOfPostsPerDay = 0;
      }
    },
    changeQuoteModalStatus: (
      state,
      action: PayloadAction<{ id: number | null; setState: boolean }>
    ) => {
      state.quoteModalStatus.status = action.payload.setState;
      state.quoteModalStatus.id = action.payload.id;
    },

    newQuote: (
      state,
      action: PayloadAction<{
        originalPoster: number;
        originalPostId: number | null;
        comment: string;
        content: string;
      }>
    ) => {
      state.users[0].posts.unshift({
        postId: generateRandomNumber(0, 1000),
        type: "quote",
        originalPoster: action.payload.originalPoster,
        originalPostId: action.payload.originalPostId,
        comment: action.payload.comment,
        postedBy: 8,
        content: action.payload.content,
      });
    },
  },
});

export const {
  follow,
  unfollow,
  newOriginalPost,
  newRepost,
  updateNumberOfPostsIn24Hours,
  changeQuoteModalStatus,
  newQuote,
} = usersState.actions;

export const usersValue = (state: RootState) => state.users.users;
export const loggedUser = (state: RootState) => state.logged.loggedUser;
export const numberOfPostsIn24HoursValue = (state: RootState) =>
  state.postsIn24Hours.numberOfPostsPerDay;
export const changeQuoteModalStatusValue = (state: RootState) =>
  state.changeQuoteModalStatus.quoteModalStatus;

export default usersState.reducer;
