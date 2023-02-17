import { AiOutlinePlus } from "react-icons/ai"

const NewChatBtn = () => {
  return (
    <div className="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm flex-shrink-0 border border-white/20">
      <span>
        <AiOutlinePlus className="text-white text-base" />
      </span>{" "}
      New chat
    </div>
  )
}

export default NewChatBtn
