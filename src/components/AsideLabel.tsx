import React from "react";
import { BiTrash } from "react-icons/bi";
import { FiEdit3, FiMessageSquare } from "react-icons/fi";
import Link from "next/router";

interface AsideLabelProps {
  children: React.ReactNode;
}
const AsideLabel = ({ children }: AsideLabelProps) => {
  return (
    <div className="flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer break-all  group">
      {children}
    </div>
  );
};

interface AsideConvoProps extends AsideLabelProps {
  isActive: boolean;
  chatID?: string;
}

export const ConvoComponent = ({ isActive, children }: AsideConvoProps) => {
  return (
    <div
      className={`flex py-3 px-3 items-center gap-3 relative rounded-md  cursor-pointer break-all ${
        isActive ? "bg-gpt-gray" : "hover:bg-[#2A2B32]"
      }`}
    >
      <FiMessageSquare className="text-base" />
      <div className="relative flex-1 overflow-hidden break-all text-ellipsis max-h-5">
        {children}
        {isActive ? (
          <>
            <div className="absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-gpt-gray" />
          </>
        ) : null}
      </div>
      {isActive ? (
        <>
          <div className="z-20 flex visible gap-2 text-gray-300">
            <FiEdit3 className="text-base hover:text-white" />
            <BiTrash className="text-base hover:text-white" />
          </div>
        </>
      ) : null}
    </div>
  );
};

export const AsideConvo = ({ children, isActive, chatID }: AsideConvoProps) => {
  return (
    <Link href={`/chat/${chatID}`} passHref LegacyBehavior>
      <ConvoComponent isActive={isActive} children={children} />
    </Link>
  );
};

export default AsideLabel;
