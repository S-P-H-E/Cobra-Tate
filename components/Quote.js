export default function Quote({ Quote, Author }) {
    return (
      <div className="bg-[#101010] border border-[#1d1d1d] text-white font-medium p-5 rounded-xl flex flex-col justify-center items-center w-full max-w-[400px] md:max-w-[700px] md:h-[250px] md:text-xl transition-all hover:scale-105 cursor-pointer">
        <p className="whitespace-pre-wrap text-center">{Quote}</p>
        <h1 className="mt-3 text-[#838383] bg-[#181818] px-4 py-2 rounded-full">{Author}</h1>
      </div>
    )
  }
