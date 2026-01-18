import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { AlbumType } from "../../album/types/AlbumsType";

export const albumsApi = createApi({
    reducerPath: "albumsApi",

    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com",
    }),

    tagTypes: ["Album"],

    endpoints: (builder) => ({
        getAlbumsByUserId: builder.query<AlbumType[], number>({
            query: (userId) => `/albums?userId=${userId}`,
            providesTags: ["Album"]
        })
    })
})

export const {
  useGetAlbumsByUserIdQuery,
} = albumsApi;