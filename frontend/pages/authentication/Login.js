import Navbar from "../../components/Navbar";
import { useEffect } from "react";
import Router from "next/router";
import Head from "next/head";

export default function Login({ setLoggedIn }) {
  useEffect(() => {
    const { pathname } = Router;
    if (pathname) {
      Router.push("/");
    }
  });

  return (
    <div>
      <Head>
        <title>Buzzle - Login</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Navbar />
      <div className="bg-main-1 -my-20 py-40 h-screen flex flex-col">
        <div className="mx-auto text-center">
          <h1 className="text-4xl font-bold">HELLO!</h1>
          <div className="flex flex-col">
          <input type="text" className="w-80 h-24 m-3 p-3 text-3xl bg-main-2 rounded-lg text-main-1 placeholder-gray-300" placeholder="Email"/>
          <input type="text" className="w-80 placeholder-gray-300 m-3 p-3 h-24 bg-main-2 rounded-lg text-main-1 text-3xl" placeholder="Password"/>
          <button
            className="mt-3 mx-auto w-40 h-16 text-main-1 rounded-xl bg-main-3 hover:bg-main-2"
            onClick={() => setLoggedIn(true)}
          >
            LOGIN
          </button>

          <p className="underline m-5 text-main-4 text-l">Or sign up!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
