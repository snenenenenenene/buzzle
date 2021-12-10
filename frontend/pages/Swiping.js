import {useState, useEffect} from 'react'
import ProfileBadge from '../components/ProfileBadge'
import SwipingDock from '../components/SwipingDock'
import SwipingWindow from '../components/SwipingWindow'

export default function Swiping({user}) {
    const [swipeRight, setSwipeRight] = useState(false)

    return (
        <div className="bg-main-1 -my-20 py-20 h-screen flex justify-center">
            <ProfileBadge user={user}/>
            <SwipingWindow swipeRight={swipeRight}/>
            <SwipingDock setSwipeRight={setSwipeRight}/>
        </div>
    )
}
