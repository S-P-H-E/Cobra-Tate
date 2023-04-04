import { BsTwitter } from 'react-icons/bs'

export default function Announcement() {
    return (
        <div className="Announcement bg-white text-black font-medium p-7 rounded-xl flex justify-between items-center w-full cursor-pointer" onClick={() => window.open("https://twitter.com/stoic_words")}>
            <div>
                <h1 className="whitespace-pre-wrap text-4xl md:text-5xl">Follow my Twitter</h1>
                <p className="my-1">Get more stoic quotes </p>
                {/* <button className="rounded-full px-3 mt-5 md:mt-10 transition-all bg-black text-white">Follow</button> */}
            </div>
            <div className='flex justify-center items-center'>
                <BsTwitter className='w-[60px] h-[60px] md:h-full'/>
            </div>
        </div>
    )
}