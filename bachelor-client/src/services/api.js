import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//define service
const api = createApi({
  reducerPath: "app",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),

  // defining endpoints
  endpoints: (builder) => ({
    //signup user
    signUpUser: builder.mutation({
      query: (user) => ({
        url: "/users",
        method: "POST",
        body: user,
      }),
    }),

    //signin user
    signInUser: builder.mutation({
      query: (user) => ({
        url: "/users/signin",
        method: "POST",
        body: user,
      }),
    }),

    //signout user

    signOutUser: builder.mutation({
      query: (payload) => ({
        url: "/signout",
        method: "DELETE",
        body: payload,
      }),
    }),
  }),
});

export const {
  useSignUpUserMutation,
  useSignInUserMutation,
  useSignOutUserMutation,
} = api;

export default api;
