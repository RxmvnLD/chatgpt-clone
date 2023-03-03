import type { NextApiRequest, NextApiResponse } from "next";
import { dbConnect } from "@/config/mongoose";
import User from "@/models/User";

dbConnect();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, body } = req;

  switch (method) {
    case "GET":
      const users = await User.find({});
      return res.status(200).json({ users: users });
    default:
      break;
  }
}
