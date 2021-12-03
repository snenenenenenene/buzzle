import BottomBar from "../../components/BottomBar";
import Navbar from "../../components/Navbar";
import Settings from "../../components/Settings";

export default function Account({user}) {
    return (
        <div>
        <Navbar/>
        <Settings image={user.image} firstName={user.firstName} lastName={user.lastName}/>
        <BottomBar/>
        </div>
    )
}
