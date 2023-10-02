import { configureStore } from "@reduxjs/toolkit";
import { chatsSlice } from "../features/Chat";
import { userSlice } from "../features/User";

export const store = configureStore({
  reducer: {
    chats: chatsSlice.reducer,
    user: userSlice.reducer,
  },
});
