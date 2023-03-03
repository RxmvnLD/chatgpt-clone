import { Schema, model, models } from "mongoose";
// import { IChat, chatSchema } from "./Chat";

interface IUser {
  username: string;
  email: string;
  password: string;
  chats: Schema.Types.ObjectId[];
}

export const userSchema: Schema = new Schema(
  {
    username: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    chats: {
      type: [{ type: Schema.Types.ObjectId, ref: "Chat" }]
    }
  },
  { timestamps: true }
);

userSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.password;
  }
});

export default models.User || model<IUser>("User", userSchema);

/* import { Schema, model, models } from "mongoose";
import { IChat, chatSchema } from "./Chat";

interface IUser {
  username: string;
  email: string;
  password: string;
  chats: IChat[];
}

export const userSchema: Schema = new Schema(
  {
    username: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    chats: {
      type: [chatSchema],
      default: []
    }
  },
  { timestamps: true }
);

export default models.User || model<IUser>("User", userSchema); */
