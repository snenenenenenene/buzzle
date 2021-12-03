import React from 'react'

export default function Navbar() {
    return (
        <header className="bg-main-1 md:sticky top-0 z-10 h-20">
      <div className="flex flex-wrap flex-row items-center">
        <a className="cursor-pointer mb-0 mx-auto">
          <a href="/home">
            <div className="mx-1.5 text-xl flex">
            <img src="/logo.png" alt="Buzzle" className="h-20"/>
            </div>
          </a>
        </a>
      </div>
    </header>
    )
}
