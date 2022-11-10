import { createSlice } from "@reduxjs/toolkit";

import api from "../services/api";

export const userState = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addNotifications: (state, { payload }) => {},
    resetNotifications: (state, { payload }) => {},
  },

  extraReducers: (builder) => {
    //saving users afrer registration
    builder.addMatcher(
      api.endpoints.signUpUser.matchFulfilled,
      (state, { payload }) => payload
    );
    //saving users after signin
    builder.addMatcher(
      api.endpoints.signInUser.matchFulfilled,
      (state, { payload }) => payload
    );
    //destroy session after user signOut
    builder.addMatcher(api.endpoints.signOutUser.matchFulfilled, () => null);
  },
});

export const { addNotifications, resetNotifications } = userState.actions;
export default userState.reducer;
