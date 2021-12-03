import React from 'react'
import Container from '../components/Container'
import SwipingDock from '../components/SwipingDock'
import SwipingWindow from '../components/SwipingWindow'

export default function Swiping() {
    return (
        <div className="bg-main-1 -my-20 py-20 h-screen flex justify-center">
            <SwipingWindow/>
            <SwipingDock/>
        </div>
    )
}
