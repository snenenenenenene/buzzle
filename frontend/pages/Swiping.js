import {useState, useEffect} from 'react'
import ProfileBadge from '../components/ProfileBadge'
import SwipingDock from '../components/SwipingDock'
import SwipingWindow from '../components/SwipingWindow'

export default function Swiping({user}) {
    return (
        <div className="bg-main-1 -my-20 py-20 h-screen flex justify-center overflow-hidden">
            <ProfileBadge user={user}/>
            <SwipingWindow/>
        </div>
    )
}
