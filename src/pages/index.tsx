import Link from "next/link";
import { SiOpenai } from "react-icons/si";
import { signIn } from "next-auth/react";
import { authOptions } from "./api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

const Index = () => {
  return (
    <main className="flex flex-col items-center justify-center w-full min-h-screen gap-3 text-white">
      <SiOpenai className="mb-4 text-5xl" />
      <h1>Welcome to ChatGPT-Clone</h1>
      <p>Log in with your account to continue</p>
      <div className="flex gap-3 text-sm">
        <button
          className="px-3 py-2 rounded bg-gpt-green"
          onClick={() => signIn(undefined, { callbackUrl: "/chat" })}
        >
          Log in
        </button>
        <Link className="px-3 py-2 rounded bg-gpt-green" href="/signup">
          Sign up
        </Link>
      </div>
    </main>
  );
};

export default Index;

export async function getServerSideProps(context: any) {
  const session = await getServerSession(context.req, context.res, authOptions);
  if (session) {
    return {
      redirect: {
        destination: "/chat",
        permanent: false
      }
    };
  }

  return {
    props: {
      session
    }
  };
}
