import React from 'react'
import Container from '../components/Container'
import ProfileBadge from '../components/ProfileBadge'
import SwipingDock from '../components/SwipingDock'
import SwipingWindow from '../components/SwipingWindow'

export default function Swiping({user}) {
    return (
        <div className="bg-main-1 -my-20 py-20 h-screen flex justify-center">
            <ProfileBadge user={user}/>
            <SwipingWindow/>
            <SwipingDock/>
        </div>
    )
}
