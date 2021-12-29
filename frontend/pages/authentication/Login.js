import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";
import Router from "next/router";
import Head from "next/head";
import axios from 'axios';

export default function Login({ setLoggedIn }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    const { pathname } = Router;
    if (pathname) {
      Router.push("/");
    }
  });

  const Authenticate = () => {
    console.log(email)
    console.log(password)
    let fd = new FormData();
    fd.set('email', email)
    fd.set('password', password)
    axios.post('http://localhost:8080/api/user/authenticate', fd)
    .then(jwt =>{
      if(jwt.data !== "Bad credentials") {
        console.log(jwt)
        localStorage.setItem('jwt', jwt.data)
        setLoggedIn(true)
      }
      else {
        alert("wrong password or email")
      }

    }
    )
    .catch(error => console.log(error))
  }

  return (
    <div>
      <Head>
        <title>Buzzle - Login</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Navbar />
      <div className="bg-main-1 -mt-20 py-40 h-screen flex flex-col">
        <div className="mx-auto text-center">
          <h1 className="text-4xl font-bold">HELLO!</h1>
          <div className="flex flex-col">
          <input type="text" className="w-80 h-24 m-3 p-3 text-3xl bg-main-2 rounded-lg text-main-1 placeholder-gray-300" onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
          <input type="password" className="w-80 placeholder-gray-300 m-3 p-3 h-24 bg-main-2 rounded-lg text-main-1 text-3xl" onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
          <button
            className="mt-3 mx-auto w-40 h-16 text-main-1 rounded-xl bg-main-3 hover:bg-main-2"
            onClick={() => Authenticate()}
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
