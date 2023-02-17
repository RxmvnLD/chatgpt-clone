import { FiSend } from "react-icons/fi"

const InputMessage = () => {
  return (
    <form className="flex justify-center w-full px-10 stretch">
      <div className="relative flex flex-row items-center w-1/2">
        <textarea
          name=""
          id=""
          rows={1}
          className="w-full p-3 rounded resize-none bg-gpt-light-gray focus:ring-0"
        />
        <button className="absolute right-0 mr-3" type="submit">
          <FiSend className="text-gray-400" />
        </button>
      </div>
    </form>
  )
}

export default InputMessage
