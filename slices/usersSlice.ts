import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

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
}

const initialState: UsersState = {
  users: [
    {
      id: 8,
      name: "Renata Brito",
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
      ],
    },
    {
      id: 16,
      name: "Mark Twain",
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
      name: "Jesus Lopez",
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
      name: "Adriano Ferreira",
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
      name: "Fabiana Mendez",
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
        {
          postId: 709,
          type: "repost",
          originalPoster: 8,
          originalPostId: 6,
          comment: null,
          postedBy: 16,
          content: "Olá, esse é meu primeiro post no Posterr!",
        },
      ],
    },
    {
      id: 63,
      name: "Diana Mecenas",
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
};

export const usersState = createSlice({
  name: "counter",
  initialState,
  reducers: {},
});

export const usersValue = (state: RootState) => state.users.users;

export default usersState.reducer;
