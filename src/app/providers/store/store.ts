import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { postsApi } from "../../../entities/[entity]/api/postsApi";
import { commentsApi } from "../../../entities/[entity]/api/commentsApi";
import { albumsApi } from "../../../entities/[entity]/api/albumsApi";
import { todosApi } from "../../../entities/[entity]/api/todosApi";


export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        postsApi.middleware, 
        commentsApi.middleware,
        albumsApi.middleware,
        todosApi.middleware)
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>