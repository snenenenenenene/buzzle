import Head from "next/head";
import BottomBar from "../../components/BottomBar";
import Navbar from "../../components/Navbar";
import ProfileBadge from "../../components/ProfileBadge";

export default function Matches({ user, matches }) {
  return (
    <div>
      <Head>
        <title>Buzzle - Matches</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <ProfileBadge user={user} />
      <Navbar />
      <div className="bg-main-1 -my-20 py-32 h-screen flex flex-col">
        <div className="mx-auto text-center">
          <h1 className="text-4xl font-bold text-main-2">Current Location</h1>
          <h2 className="text-2xl font-bold text-main-2">
            {user.location.city}, {user.location.country}
          </h2>
          <div></div>
        </div>
      </div>
      <BottomBar />
    </div>
  );
}
