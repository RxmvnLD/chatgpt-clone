import ConvoMessage from "./ConvoMessage";
import Footer from "./Footer";
import InputMessage from "./InputMessage";
import { useSelector } from "react-redux";
import { Message } from "@/config/types";
const Conversation = () => {
  const messages = useSelector((state: any) => state.chat.messages);
  return (
    <main className="bg-gpt-gray overflow-auto w-full h-screen flex flex-col relative ml-[260px]">
      <div className="h-full overflow-y-scroll">
        {messages.map((msj: Message) => {
          return <ConvoMessage messageData={msj} />;
        })}
      </div>
      <div className="flex-shrink-0 w-full h-32 md:h-48"></div>
      <section className="absolute bottom-0 left-0 flex flex-col items-center w-full gap-3 mb-5">
        <InputMessage />
        <Footer />
      </section>
    </main>
  );
};

export default Conversation;
