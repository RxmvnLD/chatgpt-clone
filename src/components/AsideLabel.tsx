import React from "react"
import { BiTrash } from "react-icons/bi"
import { FiEdit3, FiMessageSquare } from "react-icons/fi"

type AsideConvoProps = {
  children: React.ReactNode
  isActive?: boolean
}
const AsideLabel = ({ children }: AsideConvoProps) => {
  return (
    <div className="flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer break-all  group">
      {children}
    </div>
  )
}

export const AsideConvo = ({ children, isActive }: AsideConvoProps) => {
  return (
    <div
      className={`flex py-3 px-3 items-center gap-3 relative rounded-md  cursor-pointer break-all ${
        isActive ? "bg-gpt-gray" : "hover:bg-[#2A2B32]"
      }`}
    >
      <FiMessageSquare className="text-base" />
      <div className="flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative">
        {children}
        {isActive ? (
          <>
            <div className="absolute inset-y-0 right-0 w-8 z-10 bg-gradient-to-l from-gpt-gray" />
          </>
        ) : null}
      </div>
      {isActive ? (
        <>
          <div className="flex z-20 text-gray-300 visible gap-2">
            <FiEdit3 className="text-base hover:text-white" />
            <BiTrash className="text-base hover:text-white" />
          </div>
        </>
      ) : null}
    </div>
  )
}

export default AsideLabel
