import React from 'react'
import Image from 'next/image'
export default function SwipingWindow() {
    return (
        <div className="bg-white my-auto mb-20 flex h-5/6 xl:w-4/12 lg:w-5/12 md:w-6/12 w-11/12 rounded-lg overflow-hidden shadow-lg">
            <Image src="/snape.jpeg" width="1000" height="100"/>
        </div>
    )
}
