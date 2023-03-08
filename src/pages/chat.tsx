import Aside from "@/components/Aside";
import Conversation from "@/components/Conversation";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Loader from "@/components/Loader";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-row overflow-hidden">{children}</div>
  );
}

export default function Home() {
  const router = useRouter();
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      console.log(status);
      router.push("/");
    }
  });
  if (status === "loading") {
    return <Loader />;
  }
  return (
    <Layout>
      <Aside />
      <Conversation />
    </Layout>
  );
}
