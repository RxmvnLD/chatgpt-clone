import Aside from "@/components/Aside";
import Conversation from "@/components/Conversation";
import { useRouter } from "next/router";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-row overflow-hidden">{children}</div>
  );
}

export default function Home() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout>
      <Aside chatID={id as string} />
      <Conversation chatID={id as string} />
    </Layout>
  );
}
