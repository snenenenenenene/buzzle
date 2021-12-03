import Head from "next/head";
import BottomBar from "../../components/BottomBar";
import Navbar from "../../components/Navbar";
import ProfileBadge from "../../components/ProfileBadge";
import Link from "next/link";
export default function Messages({ user, matches }) {
  return (
    <div>
      <Head>
        <title>Buzzle - Messages</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <ProfileBadge user={user} />
      <Navbar/>
      <div className="bg-main-1 -my-20 pt-32 h-screen flex flex-col">

        <div>
          {matches.map((match) => {
            return (
              <Link href={`/message/${match.id}`}>
                <div className="cursor-pointer shadow-sm p-5 h-40 border-solid border-main-2 flex justify-between text-black hover:opacity-90 hover:bg-main-2-transparent">
                  <div className="w-40 h-40 mr-3">
                    <div className="rounded-full overflow-hidden w-36 h-36 -mt-3">
                      <img
                        className="w-full h-36 object-cover"
                        src={match.images[0]}
                      />
                    </div>
                  </div>
                  <div className="my-auto pl-2 w-full">
                    <h1 className="text-4xl h-10">
                      {match.firstName} {match.lastName}
                    </h1>
                    <div className="">
                      <p className=" text-md overflow-ellipsis overflow-hidden">
                        {match.lastMessageText}
                      </p>
                    </div>
                  </div>
                  <div className="flex pr-5"></div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <BottomBar />
    </div>
  );
}
