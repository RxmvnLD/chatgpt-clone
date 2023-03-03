import type { NextApiRequest, NextApiResponse } from "next";
import { dbConnect } from "@/config/mongoose";
import User from "@/models/User";
import { hash } from "bcryptjs";
dbConnect();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    method,
    body: { username, email, password }
  } = req;

  //Validate
  if (!email || !email.includes("@") || !password)
    return res.status(422).json({ message: "Invalid Data" });

  if (method === "POST") {
    //Check if the user already exists
    const checkExisting = await User.findOne({ email: email });
    //Error if the user already exists
    if (checkExisting)
      return res.status(422).json({ message: "User already exists" });
    //Encrypt the password
    const newUser = new User({
      username: username,
      email: email,
      password: await hash(password, 12)
    });
    const savedUser = await newUser.save();
    return res.status(201).json(savedUser);
  } else {
    res.status(500).json({ message: "Route not valid" });
  }
}
