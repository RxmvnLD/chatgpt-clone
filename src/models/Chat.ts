import { Schema, model, models } from "mongoose";
// import { IMessage, messageSchema } from "./Message";
export interface IChat {
  title: string;
  messages: string[];
}

export const chatSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    messages: {
      type: [{ type: Schema.Types.ObjectId, ref: "Message" }]
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  },
  { timestamps: true }
);

//Transoformar el objeto devuelto por
chatSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

export default models.Chat || model<IChat>("Chat", chatSchema);

/* import { Schema, model, models } from "mongoose";
import { IMessage, messageSchema } from "./Message";
export interface IChat {
  title: string;
  messages: IMessage[];
}

export const chatSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    messages: {
      type: [messageSchema],
      default: []
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
  },
  { timestamps: true }
);

export default models.Chat || model<IChat>("Chat", chatSchema);
 */
