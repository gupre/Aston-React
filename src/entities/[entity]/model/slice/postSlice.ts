import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import type { PostCardType } from "../../../post/types/PostCard";

export const postsAdapter = createEntityAdapter<PostCardType>({
  sortComparer: (a, b) => a.id - b.id,
});

const initialState = postsAdapter.getInitialState({
  isLoading: false,
  error: null as string | null,
});

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postsReceived: postsAdapter.setAll,
        postAdded: postsAdapter.addOne,
    }
})

export const postReducer = postSlice.reducer;