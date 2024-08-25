import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface UserProfile {
  // profile which is send while login
  name: string;
  email: string;
  role: "admin" | "user";
  avatar:
    | {
        url: string;
        publicId: string;
      }
    | undefined;
  id: string;
}
interface AuthSlice {
  profile: UserProfile | null;
  loggedIn: string;
}

const initialState: AuthSlice = {
  profile: null,
  loggedIn: "false",
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateProfile: (state, { payload }: PayloadAction<UserProfile | null>) => {
      state.profile = payload;
    },
    updateLoggedInState: (state, { payload }) => {
      state.loggedIn = payload;
    },
  },
});

export const { updateLoggedInState, updateProfile } = slice.actions;

export default slice.reducer;

export const getAuthState = createSelector(
  (state: RootState) => state.auth,
  (authState) => authState
);
