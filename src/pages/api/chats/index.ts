import type { NextApiRequest, NextApiResponse } from "next";
import { dbConnect } from "@/config/mongoose";
import Chat from "@/models/Chat";
import User from "@/models/User";

dbConnect();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    method,
    body: { userID, title }
  } = req;

  switch (method) {
    //Get all the chats
    case "GET":
      const chats = await Chat.find({});
      return res.status(200).json({ chats: chats });
    //Create a new chat
    case "POST":
      try {
        //Getting the user
        const user = await User.findById(userID);
        //Creating the chat
        const newChat = new Chat({ title, user: user.id });
        //Saving the chat on the DB
        const savedChat = await newChat.save();
        //Pushing the new chat to the user
        user.chats = user.chats.concat(savedChat.id);
        //Updating the user
        await user.save({ validateBeforeSave: false });
        return res.status(201).json(savedChat);
      } catch (error) {
        if (error instanceof Error) {
          console.log(error);
          return res.status(400).json({ error: error });
        }
      }

    default:
      break;
  }
}
