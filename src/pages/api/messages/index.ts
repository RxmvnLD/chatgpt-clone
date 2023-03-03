import type { NextApiRequest, NextApiResponse } from "next";
import { dbConnect } from "@/config/mongoose";
import Message from "@/models/Message";
import Chat from "@/models/Chat";

dbConnect();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    method,
    body: { chatID, text, sender }
  } = req;

  switch (method) {
    //Get all the chats
    case "GET":
      const messages = await Message.find({});
      return res.status(200).json({ messages: messages });
    //Create a new message
    case "POST":
      try {
        //Getting the chat
        const chat = await Chat.findById(chatID);
        //Creating the message
        const newMessage = new Message({ sender: sender, text: text });
        //Saving the chat on the DB
        const savedMessage = await newMessage.save();
        //Pushing the new message to the user chat
        chat.messages = chat.messages.concat(savedMessage._id);
        await chat.save({ validateBeforeSave: false });
        return res.status(201).json(savedMessage);
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
