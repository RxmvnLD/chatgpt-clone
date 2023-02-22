import Aside from "@/components/Aside";
import Conversation from "@/components/Conversation";

import axios from "axios";
import { useEffect } from "react";

function Layout({ children }: { children: React.ReactNode }) {
  //fetching
  const sendPrompt = async () => {
    try {
      const result = await axios.post("/api/chat", {
        userPrompt: "Hello, how are you?"
      });
      console.log("res", result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    sendPrompt();
    console.log(process.env.OPENIA_API_KEY);
  }, []);

  return (
    <div className="relative flex flex-row overflow-hidden">{children}</div>
  );
}

export default function Home() {
  return (
    <Layout>
      <Aside />
      <Conversation />
    </Layout>
  );
}
