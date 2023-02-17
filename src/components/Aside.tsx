import AsideLabel, { AsideConvo } from "./AsideLabel"
import {
  FiUser,
  FiMoon,
  FiStar,
  FiExternalLink,
  FiLogOut
} from "react-icons/fi"
import { BiTrash } from "react-icons/bi"
import { RxDiscordLogo } from "react-icons/rx"
import NewChatBtn from "./NewChatBtn"

const Aside = () => {
  return (
    <nav className="bg-gpt-dark-gray w-[260px] flex space-y-1 flex-col gap-2 text-sm p-2 fixed h-full">
      {/*NEW CHAT*/}
      <NewChatBtn />
      {/*--------*/}
      {/*CONVOS*/}
      <div className="flex-1 flex-col overflow-y-auto border-b border-white/20">
        <div className="flex flex-col gap-2 text-gray-100 text-sm">
          <AsideConvo isActive={true}>Hola: Saludo y ayuda.</AsideConvo>
          <AsideConvo isActive={false}>Hola: Saludo y ayuda.</AsideConvo>
        </div>
      </div>
      {/*------*/}
      {/*OPTIONS*/}
      <div className="text-white flex flex-col gap-1 ">
        <AsideLabel>
          <BiTrash className="text-base" />
          <div>Clear conversations</div>
        </AsideLabel>
        <AsideLabel>
          <FiUser className="text-base" />
          <div>Upgrade to Plus</div>
          <div className="bg-[#fae69e] text-gpt-dark-gray text-xs px-1.5 py-0.5 rounded-md ml-10">
            NEW
          </div>
        </AsideLabel>
        <AsideLabel>
          <FiMoon className="text-base" />
          <div>Dark mode</div>
        </AsideLabel>
        <AsideLabel>
          <FiStar className="text-base" />
          <div>Improve ChatGPT</div>
        </AsideLabel>
        <AsideLabel>
          <RxDiscordLogo className="text-base" />
          <div>OpenAI Discord</div>
        </AsideLabel>
        <AsideLabel>
          <FiExternalLink className="text-base" />
          <div>Updates & FAQ</div>
        </AsideLabel>
        <AsideLabel>
          <FiLogOut className="text-base" />
          <div>Log Out</div>
        </AsideLabel>
      </div>
      {/*-------*/}
    </nav>
  )
}

export default Aside
