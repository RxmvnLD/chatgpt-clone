import type { NextApiRequest, NextApiResponse } from "next";
import { dbConnect } from "@/config/mongoose";
import Chat from "@/models/Chat";
import User from "@/models/User";
import { Schema } from "mongoose";

dbConnect();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    method,
    body: { newTitle },
    query: { id }
  } = req;

  switch (method) {
    //Get one chat
    case "GET":
      try {
        const chat = await Chat.findById(id).populate("messages");
        if (!chat) return res.status(404).json({ error: "Chat not found" });
        return res.status(200).json({ chat });
      } catch (error) {
        if (error instanceof Error) {
          console.log(error);
          return res.status(400).json({ error: error.message });
        }
      }
    case "PUT":
      try {
        const editedChat = await Chat.findByIdAndUpdate(
          id,
          {
            title: newTitle
          },
          { new: true }
        );
        if (!editedChat)
          return res.status(404).json({ error: "Chat not found" });
        const user = await User.findById(editedChat.user);
        await user.save({ validateBeforeSave: false });
        return res.status(200).json({
          chatUpdated: editedChat
        });
      } catch (error) {
        if (error instanceof Error) {
          console.log(error);
          return res.status(400).json({ error: error.message });
        }
      }
    case "DELETE":
      try {
        const deletedTask = await Chat.findByIdAndDelete(id);
        if (!deletedTask)
          return res.status(404).json({ error: "Chat not found" });
        const user = await User.findById(deletedTask.user);
        console.log("user chats", user.chats);
        user.chats = user.chats.filter(
          (chat: Schema.Types.ObjectId) => chat != deletedTask.id
        );
        await user.save({ validateBeforeSave: false });
        return res.status(204).json("Chat deleted");
      } catch (error) {
        if (error instanceof Error) {
          console.log(error);
          return res.status(400).json({ error: error.message });
        }
      }
    default:
      return res.status(405).json({ msj: "Method not supported" });
  }
};
