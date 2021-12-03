import BottomBar from "../../components/BottomBar";
import Navbar from "../../components/Navbar";
import Settings from "../../components/Settings";

export default function Account({user}) {
    return (
        <div>
        <Navbar/>
        <Settings user={user}/>
        <BottomBar/>
        </div>
    )
}
