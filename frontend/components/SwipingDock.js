import React from 'react'

export default function SwipingDock() {
    return (
        <div>
            <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 translate-y-1/2 flex text-white">
                <div className="cursor-pointer mx-20 text-green-300 bg-main-5 w-20 h-20 rounded-full shadow-lg flex hover:bg-main-3-transparent backdrop-blur-lg hover:text-white">
                    <p className="m-auto">YES</p></div>
                <div className="cursor-pointer mx-20 text-main-2 bg-main-5 w-20 h-20 rounded-full shadow-lg flex hover:bg-main-3-transparent backdrop-blur-lg hover:text-white">
                    <p className="m-auto">NO</p></div>
            </div>
        </div>
    )
}
