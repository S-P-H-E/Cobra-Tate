import Link from 'next/link'
import { MdEmail } from "react-icons/md"
import { BsTwitter } from "react-icons/bs"

export default function Nav() {
    return (
        <div className="p-7 flex justify-between items-center text-white ">
            <h1 className="text-xl uppercase font-medium">Cobra Tate</h1>
            <div className="flex gap-5">
                <Link href="https://twitter.com/Cobratate">
                    <BsTwitter size={20} className="cursor-pointer" />
                </Link>
                <Link href="https://cobratate.com/">
                    <MdEmail size={20} className="cursor-pointer"/>
                </Link>
                
                
            </div>
        </div>
    )
}