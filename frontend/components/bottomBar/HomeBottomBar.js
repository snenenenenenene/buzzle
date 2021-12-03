import {FiMessageSquare, FiCompass, FiCont} from 'react-icons/fi'
import {FaDiceD20} from 'react-icons/fa'
import {GiBlackBook, GiTreasureMap} from 'react-icons/gi'
import Link from 'next/link'
export default function HomeBottomBar() {
    return (
        <div className="backdrop-filter backdrop-blur-lg fixed bottom-0 w-full ">
            <div className="z-10 h-20 flex md:justify-center relative bottom-5">
        <a className="m-auto md:mx-20 title-font font-medium cursor-pointer text-main-5 hover:text-main-1 hover:bg-main-3-transparent p-5 w-20 h-20 bg-main-1 rounded-full">
        <Link href="/matches">
        <GiTreasureMap className="h-full w-full"/>
        </Link>
        </a>
        <a className="m-auto md:mx-20 title-font font-medium cursor-pointer text-main-5 hover:text-main-1 hover:bg-main-3-transparent p-5 w-20 h-20 rounded-full">
        <Link href="/">
        <FaDiceD20 className="h-full w-full"/>
        </Link>
        </a>
        <a className="m-auto md:mx-20 title-font font-medium cursor-pointer text-main-5 p-5 w-20 h-20 hover:bg-main-3-transparent bg-main-1 rounded-full hover:text-main-1">
            <Link href="/messages">
        <GiBlackBook className="h-full w-full"/>
        </Link>
        </a>
        </div>
    </div>
    )
}
