import { SiOpenai } from "react-icons/si";
import { BiLike, BiDislike } from "react-icons/bi";
import useTypingEffect from "@/hooks/useTypingEffect";

type convoMessageProps = {
  messageData: {
    id: number;
    message: string;
    ia: boolean;
  };
};

const ConvoMessage = ({ messageData }: convoMessageProps) => {
  const displayText = useTypingEffect(messageData.message);

  return (
    <section
      key={messageData.id}
      className={`${messageData.ia ? "bg-gpt-light-gray" : ""} py-7 px-24 `}
    >
      <div className="flex flex-row justify-center gap-8 mx-80">
        {/*MESSAGE IMAGE*/}
        <div
          className={`max-h-[30px] w-[30px] ${
            messageData.ia ? "bg-gpt-green" : "bg-[#94a4a4]"
          } flex justify-center items-center rounded-sm `}
        >
          {messageData.ia ? (
            <SiOpenai className="text-xl text-white" />
          ) : (
            <p className="text-xs text-white">
              RO{/*USER IMAGE OR 2 FIRST LETTERS*/}
            </p>
          )}
        </div>
        {/*-------------*/}

        {/*MESSAGE*/}
        <div className="flex-1">
          {messageData.ia ? displayText : messageData.message}
        </div>

        {/*-------*/}

        {/*LIKES*/}
        <div className="flex flex-row gap-2 text-lg">
          <BiLike
            className={`${
              messageData.ia ? "block" : "hidden"
            } text-gray-400 hover:text-white`}
          />
          <BiDislike
            className={`${
              messageData.ia ? "block" : "hidden"
            } text-gray-400 hover:text-white`}
          />
        </div>
        {/*-----*/}
      </div>
    </section>
  );
};

export default ConvoMessage;
