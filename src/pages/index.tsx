import Aside from "@/components/Aside"
import Main from "@/components/Main"

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-row overflow-hidden">{children}</div>
  )
}

export default function Home() {
  return (
    <Layout>
      <Aside />
      <Main />
    </Layout>
  )
}
