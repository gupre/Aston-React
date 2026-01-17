import { combineReducers } from "@reduxjs/toolkit";
import { postsApi } from "../../../entities/[entity]/api/postsApi";
import { commentsApi } from "../../../entities/[entity]/api/commentsApi";
import { albumsApi } from "../../../entities/[entity]/api/albumsApi";
import { todosApi } from "../../../entities/[entity]/api/todosApi";

export const rootReducer = combineReducers({
    [postsApi.reducerPath]: postsApi.reducer,
    [commentsApi.reducerPath]: commentsApi.reducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
    [todosApi.reducerPath]: todosApi.reducer,
})
