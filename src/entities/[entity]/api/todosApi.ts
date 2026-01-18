import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { TodoType } from "../../toDo/types/ToDoType";

export const todosApi = createApi({
  reducerPath: "todosApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),

  tagTypes: ["Todo"],

  endpoints: (builder) => ({
    getTodosByUserId: builder.query<TodoType[], number>({
      query: (userId) => `/users/${userId}/todos`,
      providesTags: (result, _e, userId) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: "Todo" as const,
                id,
              })),
              { type: "Todo", id: `USER-${userId}` },
            ]
          : [{ type: "Todo", id: `USER-${userId}` }],
    }),
  }),
});

export const { useGetTodosByUserIdQuery } = todosApi;

