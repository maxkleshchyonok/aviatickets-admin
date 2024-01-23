import { configureStore } from "@reduxjs/toolkit";
import { chatSlice } from "src/app/chat/store/chat.slice";
import { bookingsSlice } from "./app/bookings/store/bookings.slice";


const store = configureStore({
    reducer: {
        chat: chatSlice.reducer,
        bookings: bookingsSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store