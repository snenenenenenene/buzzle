import { FiUser } from "react-icons/fi";
import { useState } from "react";

export default function Settings({ user, setLoggedIn }) {
  return (
    <div className="bg-main-1 min-h-screen flex flex-col items-center pt-10">
      <div className="bg-main-5 object-fill hover:bg-main-3-transparent backdrop-filter backdrop-blur-lg w-80 h-80 rounded-full hover:text-main-5 outline-white cursor-pointer overflow-hidden hover:opacity-80 shadow-2xl">
        {user === undefined || user.images === null || user.images === [] ? (
          <FiUser className="w-full h-full" />
        ) : (
          <img src={user.images[0]} />
        )}
      </div>
      <div className="m-5">
        <h1 className="text-main-5 text-5xl">
          {user.firstName} {user.lastName}
        </h1>
      </div>
      <div className="flex">
        <div className="text-black text-xl flex">
          <p className="text-main-2 mr-3">Age Preference:</p>{" "}
          {user.age_preference[0]} - {user.age_preference[1]}
        </div>
      </div>
      <div className="flex">
        <div className="text-black flex flex-col">
          <p className="text-main-2 my-2 text-2xl mr-3">Interests</p>
          <div className="flex my-2">
            <p className="text-main-2 text-lg mr-3 flex-1">Films</p>
            <select className="w-32"></select>
          </div>
          <div className="flex my-2">
            <p className="text-main-2 text-lg mr-3 flex-1">Games</p>
            <select className="w-32"></select>
          </div>
          <div className="flex my-2">
            <p className="text-main-2 text-lg mr-3 flex-1">Music</p>
            <select className="w-32"></select>
          </div>
        </div>
      </div>
      <div className="mt-80 mb-5 z-10">
        <button
          className="w-40 h-16 text-main-1 rounded-xl text-main-3 hover:bg-main-2 hover:text-main-1"
          onClick={() => setLoggedIn(false)}
        >
          LOG OUT
        </button>
      </div>
    </div>
  );
}
