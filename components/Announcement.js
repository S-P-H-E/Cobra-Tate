import { BsTwitter } from 'react-icons/bs'

export default function Announcement() {
    return (
        <div className="bg-white text-black font-medium p-7 rounded-xl flex justify-between items-start w-full">
            <div>
                <h1 className="whitespace-pre-wrap text-4xl md:text-5xl">Follow my Twitter</h1>
                <p className="my-1">Get more stoic quotes </p>
                <button className="rounded-full px-3 mt-5 md:mt-10 transition-all bg-black text-white" onClick={() => window.open("https://twitter.com/pmusculinity")}>Follow</button>
            </div>
            <div className='flex justify-center items-center'>
                <BsTwitter className='w-[60px] h-[60px] md:h-[150px]'/>
            </div>
        </div>
    )
}