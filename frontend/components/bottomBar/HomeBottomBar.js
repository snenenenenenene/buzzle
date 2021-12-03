import {FiMessageSquare, FiCompass, FiCommand} from 'react-icons/fi'

export default function HomeBottomBar() {
    return (
        <div className="backdrop-filter backdrop-blur-lg fixed bottom-0 w-full ">
            <div className="z-10 h-20 flex md:justify-center relative bottom-5">
        <a className="m-auto md:mx-20 title-font font-medium cursor-pointer text-main-5 hover:bg-main-3-transparent p-5 w-20 h-20 bg-main-1 rounded-full">
        <FiCompass className="h-full w-full"/>
        </a>
        <a className="m-auto md:mx-20 title-font font-medium cursor-pointer text-main-1 hover:bg-main-3-transparent p-5 w-20 h-20 bg-main-5 rounded-full">
        <FiCommand className="h-full w-full"/>
        </a>
        <a className="m-auto md:mx-20 title-font font-medium cursor-pointer text-main-5 p-5 w-20 h-20 hover:bg-main-3-transparent bg-main-1 rounded-full">
        <FiMessageSquare className="h-full w-full"/>
        </a>
        </div>
    </div>
    )
}
