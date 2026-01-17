import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { PostCardType } from "../../post/types/PostCard";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    getPosts: builder.query<PostCardType[], void>({
      query: () => "/posts",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: "Post" as const,
                id,
              })),
              { type: "Post", id: "LIST" },
            ]
          : [{ type: "Post", id: "LIST" }],
    }),

    getPostById: builder.query<PostCardType, number>({
      query: (id) => `/posts/${id}`,
      providesTags: (_result, _error, id) => [
        { type: "Post", id },
      ],
    }),

    createPost: builder.mutation<PostCardType, Partial<PostCardType>>({
      query: (body) => ({
        url: "/posts",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Post", id: "LIST" }],
    }),

    getPostsByUserId: builder.query<PostCardType[], number>({
        query: (userId) => `/users/${userId}/posts`,
        providesTags: (result, _e, userId) =>
            result
            ? [
                ...result.map(({ id }) => ({
                    type: "Post" as const,
                    id,
                })),
                { type: "Post", id: `USER-${userId}` },
                ]
            : [{ type: "Post", id: `USER-${userId}` }],
        })
  }),
});

export const {
  useGetPostsQuery,
  useGetPostByIdQuery,
  useCreatePostMutation,
} = postsApi;
