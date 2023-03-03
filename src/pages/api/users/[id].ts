import type { NextApiRequest, NextApiResponse } from "next";
import { dbConnect } from "@/config/mongoose";
import Chat from "@/models/Chat";
import User from "@/models/User";

dbConnect();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    method,
    body,
    query: { id }
  } = req;

  switch (method) {
    case "GET":
      try {
        const user = await User.findById(id).populate("chats");
        if (!user) return res.status(404).json({ error: "User not found" });
        return res.status(200).json({ user });
      } catch (error) {
        if (error instanceof Error) {
          console.log(error);
          return res.status(400).json({ error: error.message });
        }
      }
  }
};
