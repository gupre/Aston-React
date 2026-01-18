import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import type { UserType } from "../../../user/types/UserType";

const usersAdapter = createEntityAdapter<UserType>({
    sortComparer: (a, b) => a.id - b.id,
})

const initialState = usersAdapter.getInitialState()

export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        usersReceived: usersAdapter.setAll,
    }
})

export const userReducer = userSlice.reducer;