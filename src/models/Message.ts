import { Schema, model, models } from "mongoose";

export interface IMessage {
  text: string;
  sender: string;
}

export const messageSchema: Schema = new Schema(
  {
    text: {
      type: String,
      required: true
    },
    sender: {
      type: String,
      required: true
    },
    chat: {
      type: Schema.Types.ObjectId,
      ref: "Chat"
    }
  },
  { timestamps: true }
);

//Transoformar el objeto devuelto
messageSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});
export default models.Message || model<IMessage>("Message", messageSchema);
