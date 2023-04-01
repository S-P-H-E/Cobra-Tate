export default function Quote({ Quote, Author }) {
    return (
      <div className="bg-[#161616] text-white font-medium p-5 rounded-xl flex flex-col justify-center items-center w-full max-w-[400px]">
        <p className="whitespace-pre-wrap text-center">{Quote}</p>
        <h1 className="my-2 text-[#7E7C7D]">{Author}</h1>
      </div>
    )
  }
  