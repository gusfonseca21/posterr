import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface CounterState {
  posts: {
    id: string;
    user: {
      profilePicture: string;
      name: string;
    };
    content: string;
  }[];
}

const initialState: CounterState = {
  posts: [
    {
      id: "1",
      user: {
        profilePicture: "/../public/images/faces/16.jpg",
        name: "Mark Twain",
      },
      content: "Olá, esse é meu primeiro post no Posterr!",
    },
    {
      id: "2",
      user: {
        profilePicture: "/../public/images/faces/22.jpg",
        name: "Jesus Lopez",
      },
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: "3",
      user: {
        profilePicture: "/../public/images/faces/32.jpg",
        name: "Max Foster",
      },
      content:
        "React Native is an awesome library which makes the creation of mobile apps so much easier. In this course, I'll walk you through all the core concepts, basics and important parts of React Native. My goal is to turn you into a React Native developer and allow you dive even deeper into the world of React Native once you're done with the course!",
    },
    {
      id: "4",
      user: {
        profilePicture: "/../public/images/faces/36.jpg",
        name: "Adriano Ferreira",
      },
      content:
        "Mas devo explicar-lhe como nasceu toda essa idéia equivocada de denunciar um prazer e louvar a dor, e lhe darei um relato completo do sistema, expondo os ensinamentos reais do grande explorador da verdade, o mestre-construtor da felicidade humana.",
    },
    {
      id: "5",
      user: {
        profilePicture: "/../public/images/faces/44.jpg",
        name: "Fabiana Mendez",
      },
      content:
        "Ut vulputate massa mauris, et pretium dolor egestas nec. Aenean id pretium nisi. Aenean cursus tincidunt arcu, eget fringilla orci aliquam ut. Cras interdum accumsan ipsum. Sed hendrerit porta eros. Aenean vel mattis nulla. Cras ut volutpat ligula.",
    },
    {
      id: "6",
      user: {
        profilePicture: "/../public/images/faces/52.jpg",
        name: "Getúlio Bezerra",
      },
      content:
        "Nulla orci arcu, sollicitudin sit amet felis vel, condimentum dignissim dolor. Praesent imperdiet urna vel eros tincidunt, blandit ornare massa porttitor.",
    },
    {
      id: "7",
      user: {
        profilePicture: "/../public/images/faces/63.jpg",
        name: "Aurora Vida",
      },
      content:
        "Mauris dignissim augue sit amet convallis posuere. Integer blandit ex tellus, quis pharetra sapien viverra ut. Duis auctor malesuada leo ac rhoncus. Cras condimentum euismod tortor, id tincidunt tortor aliquam non. Vivamus at fermentum sem, quis mollis elit. Vestibulum gravida rutrum nisl, quis eleifend ante rhoncus nec.",
    },
    {
      id: "8",
      user: {
        profilePicture: "/../public/images/faces/86.jpg",
        name: "Félix Boaventura",
      },
      content:
        "Etiam dapibus gravida odio, facilisis ultrices quam scelerisque ac. Donec condimentum ac nisi vitae bibendum. Cras condimentum nunc gravida mi euismod tincidunt.",
    },
    {
      id: "9",
      user: {
        profilePicture: "/../public/images/faces/88.jfif",
        name: "Diana Mecenas",
      },
      content:
        "Praesent vitae orci sed diam dignissim laoreet sed vitae est. Mauris accumsan erat non tristique porta. Etiam egestas tincidunt nisi, at placerat sapien. Praesent in sollicitudin purus.",
    },
    {
      id: "10",
      user: {
        profilePicture: "/../public/images/faces/90.jpg",
        name: "Marcos Lima",
      },
      content:
        "Cras finibus nisi enim, id faucibus turpis dapibus et. Suspendisse vitae dui ut quam dictum sagittis. Sed non ornare mi. Duis vitae sagittis mauris. Curabitur eu magna ut massa placerat pretium maximus non orci.",
    },
  ],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
});

export const postsValue = (state: RootState) => state.posts.posts;

export default counterSlice.reducer;
