/* eslint-disable no-useless-catch */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import axios from "axios";
import { MessageResponse } from "../../types/api-types";
import { User } from "../../types/types";

export const userAPI = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER}/api/v1/user/`,
  }),
  endpoints: (builder) => ({
    login: builder.mutation<MessageResponse, User>({
      query: (user) => ({
        url: "new",
        method: "POST",
        body: user,
      }),
    }),
  }),
});

export const getUser = async (id: string) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_SERVER}/api/v1/user/${id}`
    );
    const userData: User = response.data.data; // Directly extract user data

    console.log(userData); // Log to check the structure

    return { user: userData };
  } catch (error) {
    throw error;
  }
};

export const { useLoginMutation } = userAPI;
