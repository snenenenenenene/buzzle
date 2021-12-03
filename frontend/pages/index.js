import Head from "next/head";
import Swiping from "./Swiping";
import Navbar from "../components/Navbar";
import BottomBar from "../components/BottomBar";
import { useState } from "react";

export default function Home({user}) {
  // const [image, setImage] = useState(null)
  return (
    <div>
      <Head>
        <title>Buzzle</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Navbar />
      {/* <Login/> */}
      <Swiping user={user} />
      <BottomBar />
    </div>
  );
}
