import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface PostsState {
  posts: {
    postId: number;
    postedBy: number;
    type: string;
    originalPoster: number | null;
    originalPostId: number | null;
    comment: string | null;
    content: string;
  }[];
}

const initialState: PostsState = {
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
      postId: 166,
      type: "original",
      originalPoster: null,
      originalPostId: null,
      comment: null,
      postedBy: 16,
      content:
        "A human being has a natural desire to have more of a good thing than he needs.",
    },
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
      postId: 29,
      type: "original",
      originalPoster: null,
      originalPostId: null,
      comment: null,
      postedBy: 36,
      content:
        "Mas devo explicar-lhe como nasceu toda essa idéia equivocada de denunciar um prazer e louvar a dor, e lhe darei um relato completo do sistema, expondo os ensinamentos reais do grande explorador da verdade, o mestre-construtor da felicidade humana.",
    },
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
};

export const postSlice = createSlice({
  name: "teste",
  initialState,
  reducers: {},
});

export const postsValue = (state: RootState) => state.posts.posts;

export default postSlice.reducer;
