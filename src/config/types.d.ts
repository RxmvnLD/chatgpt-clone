export type Message = {
  chatID: number;
  id: number;
  message: string;
  ia: boolean;
};
export type Chat = { id: string; title: string; messages: Message[] };
