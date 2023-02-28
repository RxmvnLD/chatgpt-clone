import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Message, Chat } from "@/config/types";

interface ChatsState {
  chats: Chat[];
}
const initialState: ChatsState = {
  chats: []
};

interface ChatState extends Chat {}

export const chatSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    addChat: (state, action: PayloadAction<Chat>) => {
      state.chats.push(action.payload);
    },
    addMessage: (state, action: PayloadAction<Message>) => {
      state.chats
        .find((chatID) => chatID === action.payload.chatID)
        ?.messages.push(action.payload);
    }
  }
});
export const { addChat, addMessage } = chatSlice.actions;
export default chatSlice.reducer;

/* interface ChatState extends Chat {}

const initialState: ChatState = {
  id: 0,
  title: "",
  messages: []
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addChat: (state, action: PayloadAction<ChatState>) => {
      state.id = action.payload.id;
      state.title = action.payload.title;
      state.messages = action.payload.messages;
    },
    addMessage: (state, action: PayloadAction<Message>) => {
      state.messages.push(action.payload);
    }
  }
});
export const { addChat, addMessage } = chatSlice.actions;
export default chatSlice.reducer;
 */
