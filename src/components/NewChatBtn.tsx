import { MouseEventHandler } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addChat } from "@/store/features/chat/chatSlice";

const NewChatBtn = () => {
  const dispatch = useDispatch();
  const handleClick: MouseEventHandler<HTMLDivElement> = () => {
    dispatch(
      addChat({
        id: Date.now().toString(),
        title: "",
        messages: []
      })
    );
  };
  return (
    <div
      className="flex items-center flex-shrink-0 gap-3 px-3 py-3 text-sm text-white transition-colors duration-200 border rounded-md cursor-pointer hover:bg-gray-500/10 border-white/20"
      onClick={handleClick}
    >
      <span>
        <AiOutlinePlus className="text-base text-white" />
      </span>{" "}
      New chat
    </div>
  );
};

export default NewChatBtn;
