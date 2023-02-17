import ConvoMessage from "./ConvoMessage"
import Footer from "./Footer"
import InputMessage from "./InputMessage"

const messages = [
  {
    id: 1,
    message:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci eaque porro, modi est aliquid repellat quos. Eligendi ad distinctio alias? Dolore quaerat mollitia beatae porro quisquam omnis tenetur ad velit",
    ia: false
  },
  {
    id: 2,
    message:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci eaque porro, modi est aliquid repellat quos. Eligendi ad distinctio alias? Dolore quaerat mollitia beatae porro quisquam omnis tenetur ad velit Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci eaque porro, modi est aliquid repellat quos. Eligendi ad distinctio alias? Dolore quaerat mollitia beatae porro quisquam omnis tenetur ad velit Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci eaque porro, modi est aliquid repellat quos. Eligendi ad distinctio alias? Dolore quaerat mollitia beatae porro quisquam omnis tenetur ad velit Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci eaque porro, modi est aliquid repellat quos. Eligendi ad distinctio alias? Dolore quaerat mollitia beatae porro quisquam omnis tenetur ad velit",
    ia: true
  },
  {
    id: 1,
    message:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci eaque porro, modi est aliquid repellat quos. Eligendi ad distinctio alias? Dolore quaerat mollitia beatae porro quisquam omnis tenetur ad velit",
    ia: false
  },
  {
    id: 2,
    message:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci eaque porro, modi est aliquid repellat quos. Eligendi ad distinctio alias? Dolore quaerat mollitia beatae porro quisquam omnis tenetur ad velit Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci eaque porro, modi est aliquid repellat quos. Eligendi ad distinctio alias? Dolore quaerat mollitia beatae porro quisquam omnis tenetur ad velit Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci eaque porro, modi est aliquid repellat quos. Eligendi ad distinctio alias? Dolore quaerat mollitia beatae porro quisquam omnis tenetur ad velit Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci eaque porro, modi est aliquid repellat quos. Eligendi ad distinctio alias? Dolore quaerat mollitia beatae porro quisquam omnis tenetur ad velit",
    ia: true
  },
  {
    id: 1,
    message:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci eaque porro, modi est aliquid repellat quos. Eligendi ad distinctio alias? Dolore quaerat mollitia beatae porro quisquam omnis tenetur ad velit",
    ia: false
  },
  {
    id: 1,
    message:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci eaque porro, modi est aliquid repellat quos. Eligendi ad distinctio alias? Dolore quaerat mollitia beatae porro quisquam omnis tenetur ad velit",
    ia: false
  }
]

const Main = () => {
  return (
    <main className="bg-gpt-gray overflow-auto w-full h-screen flex flex-col relative ml-[260px]">
      <div className="h-full overflow-y-scroll">
        {messages.map((msj) => {
          return <ConvoMessage messageData={msj} />
        })}
      </div>
      <div className="flex-shrink-0 w-full h-32 md:h-48"></div>
      <section className="absolute bottom-0 left-0 flex flex-col items-center w-full gap-3 mb-5">
        <InputMessage />
        <Footer />
      </section>
    </main>
  )
}

export default Main
