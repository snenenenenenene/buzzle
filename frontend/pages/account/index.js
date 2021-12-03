import BottomBar from "../../components/BottomBar";
import Navbar from "../../components/Navbar";
import Settings from "../../components/Settings";
import Head from "next/head";

export default function Account({user, setLoggedIn}) {
    return (
        <div>
             <Head>
        <title>{user.firstName} {user.lastName}</title>
        <link rel="icon" href="/logo.png" />
      </Head>
        <Navbar/>
        <Settings user={user} setLoggedIn={setLoggedIn}/>
        <BottomBar/>
        </div>
    )
}
