import { createSlice } from "@reduxjs/toolkit";
import { Message } from "@/config/types";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ChatState {
  messages: Message[];
}

const initialState: ChatState = {
  messages: []
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<Message>) => {
      state.messages.push(action.payload);
    }
  }
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
