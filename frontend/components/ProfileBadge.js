import {FiUser} from "react-icons/fi"
import Link from 'next/link'

export default function ProfileBadge({user}) {
    return (
        <div className="absolute w-20 h-20 right-5 top-5 z-10 rounded-full overflow-hidden outline-white shadow-xl cursor-pointer">
            <div className="bg-main-5 hover:opacity-80 object-fill hover:text-main-5">
                <Link href="/account">
                {user === undefined || user.images === null ? <FiUser className="p-5 w-full h-full"/> : <img src={user.images[0]}/>}
                </Link>
            </div>
        </div>
    )
}
