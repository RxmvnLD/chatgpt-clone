import {
  useRef,
  FormEventHandler,
  FormEvent,
  KeyboardEventHandler,
  ChangeEventHandler,
  KeyboardEvent
} from "react";
import { FiSend } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { addMessage } from "@/store/features/chat/chatSlice";
import axios from "axios";

const InputMessage = () => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const dispatch = useDispatch();
  const chatID = useSelector((state: any) => state.chat.chatID);

  const getIAResponse = async (userPrompt: string) => {
    try {
      const result = await axios.post("/api/send-prompt", {
        userPrompt
      });
      console.log("res", result.data);
      dispatch(
        addMessage({
          chatID,
          id: Date.now(),
          message: result.data.choices[0].text,
          ia: true
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event?.preventDefault();
    if (!inputRef.current?.value) return;

    dispatch(
      addMessage({
        id: Date.now(),
        message: inputRef.current?.value,
        ia: false
      })
    );

    getIAResponse(inputRef.current?.value);

    inputRef.current.value = "";
  };

  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = () => {
    const el: HTMLTextAreaElement = inputRef.current as HTMLTextAreaElement;
    el.style.height = "0";
    const scrollHeight = el.scrollHeight;
    el.style.height = scrollHeight + "px";
  };

  const handleKeyDown: KeyboardEventHandler<HTMLFormElement> = (
    event: KeyboardEvent<HTMLFormElement>
  ) => {
    if (event.key === "Enter" && !event.shiftKey) {
      handleSubmit(event);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      onKeyDown={handleKeyDown}
      className="flex justify-center w-full px-10 stretch"
    >
      <div className="relative flex flex-row items-center w-1/2">
        <textarea
          onChange={handleChange}
          rows={1}
          className="w-full p-3 overflow-hidden rounded outline-none resize-none bg-gpt-light-gray"
          tabIndex={0}
          autoFocus
          defaultValue={""}
          ref={inputRef}
        />
        <button className="absolute right-0 mr-3" type="submit">
          <FiSend className="text-gray-400" />
        </button>
      </div>
    </form>
  );
};

export default InputMessage;
