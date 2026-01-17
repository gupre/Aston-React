import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { CommentType } from "../../comment/types/Comment";

export const commentsApi = createApi({
  reducerPath: "commentsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  tagTypes: ["Comment"],
  endpoints: (builder) => ({
    getCommentsByPostId: builder.query<CommentType[], number>({
      query: (postId) => `/posts/${postId}/comments`,
      providesTags: (result, _error, postId) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: "Comment" as const,
                id,
              })),
              { type: "Comment", id: `POST-${postId}` },
            ]
          : [{ type: "Comment", id: `POST-${postId}` }],
    }),

    createComment: builder.mutation<CommentType, { postId: number; body: string }>({
        query: ({ postId, body }) => ({
            url: `/posts/${postId}/comments`,
            method: "POST",
            body,
        }),
        invalidatesTags: (_r, _e, { postId }) => [
            { type: "Comment", id: `POST-${postId}` },
        ],
        })
  }),
});

export const { useGetCommentsByPostIdQuery } = commentsApi;