import {FiUser} from "react-icons/fi"
import {useState} from 'react'

export default function Settings({image, firstName, lastName}) {
    return (
        <div className="bg-main-1 h-screen flex flex-col items-center pt-10">
            <div className="bg-main-5 object-fill hover:bg-main-3-transparent backdrop-filter backdrop-blur-lg w-80 h-80 rounded-full hover:text-main-5 outline-white cursor-pointer overflow-hidden hover:opacity-80 shadow-2xl">
            {image === null ? <FiUser className="w-full h-full"/> : <img src={image}/>}
            </div>
            <div className="m-5">
            <h1 className="text-main-5 text-5xl">{firstName} {lastName}</h1>
            </div>
        </div>
    )
}
