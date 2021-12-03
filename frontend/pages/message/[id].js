import Head from "next/head";
import BottomBar from "../../components/BottomBar";
import Link from "next/link";
import { useRouter } from "next/router";
import {FiChevronLeft} from "react-icons/fi"

export default function Message({ user, matches }) {
    const router = useRouter();
    const { id } = router.query;
    const respondent = matches[id];

  return (
    <div>
      <Head>
        <title>{id}</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <div className="bg-main-1 -mb-20 h-screen flex flex-col">
          <Link href="/messages">
      <div className="absolute h-24 w-24 m-1 flex cursor-pointer hover:text-main-3">
                <FiChevronLeft className=" my-auto w-16 h-16"/>
            </div>
        </Link>
        <div className="mx-auto w-full p-8 mt-2 text-center shadow-lg">

          <h1 className="text-2xl font-bold text-main-2">Messages</h1>
        </div>
        <div>
          {respondent?.messages.map((message) => {
            return (
              <div className="bg-main-2 max-w-md h-auto p-5 my-10 ml-10 rounded-2xl break-words">
                  <p className="text-white text-lg">{message.text}</p>
              </div>
            );
          })}
        </div>
      </div>
      <BottomBar />
    </div>
  );
}
