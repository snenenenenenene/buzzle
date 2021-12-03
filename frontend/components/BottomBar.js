import React from 'react'

export default function BottomBar() {
    return (
        <header className="bg-main-3-transparent backdrop-blur-lg md:sticky bottom-0 z-10 h-20 flex md:justify-center">
        <a className="mx-auto md:mx-20 title-font font-medium cursor-pointer text-main-5">
        Matches
        </a>
        <a className="mx-auto md:mx-20 title-font font-medium cursor-pointer text-main-1">
        Home
        </a>
        <a className="mx-auto md:mx-20 title-font font-medium cursor-pointer text-main-5">
        Messages
        </a>
    </header>
    )
}
