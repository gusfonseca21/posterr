import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface CounterState {
  userProfile: {
    profilePicture: string;
  };
}

const initialState: CounterState = {
  userProfile: {
    profilePicture: "/../public/images/faces/8.jpg",
  },
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
});

export const userProfileValue = (state: RootState) =>
  state.profile.userProfile;

export default counterSlice.reducer;
