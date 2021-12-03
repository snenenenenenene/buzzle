import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { useState } from "react";
import Login from "./authentication/Login";

function Buzzle({ Component, pageProps }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [image, setImage] = useState(
    "https://m.media-amazon.com/images/M/MV5BY2ViNDIwNmUtZGQ5Ni00MDYxLWI5YTktNWU1NGRlYWQ1ZDg0XkEyXkFqcGdeQXVyOTAyMDgxODQ@._V1_UY1200_CR166,0,630,1200_AL_.jpg"
  );

  const [user, setUser] = useState({
    images: [image, image],
    firstName: "Joe",
    lastName: "Biden",
    birthDate: "17/11/2000",
    age: 21,
    age_preference: [21, 99],
    location: {
      city: "Antwerp",
      country: "Belgium",
    },
  });

  const [message, setMessage] = useState({
    id: 0,
    firstName: "Minecraft",
    lastName: "Steve",
    lastMessageDate: "3/12/21",
    lastMessageText: "I will be Pilot",
    images: [
      "https://static.turbosquid.com/Preview/2014/10/26__02_09_20/2.jpgd785c584-c1f4-4cd4-9bab-bdcc1de5aa1eLarge.jpg",
    ],
    messages: [
      {
        date: "3/12/21",
        text: "I will be Pilot",
      },
      // {
      //   date: "3/12/21",
      //   text: "I will be Pilot",
      // },
      // {
      //   date: "3/12/21",
      //   text: "I will be Pilot",
      // },
    ],
    read: true,
    online: true,
  });
  const [message1, setMessage1] = useState({
    id: 1,
    firstName: "The",
    lastName: "Rock",
    lastMessageDate: "3/12/21",
    lastMessageText:
      "It's about pride it's about power. \n we stay hungry we devour. lodasfdsfsdfdsfdssdfdfsddsffsdfdsfdsdsffdsfsfdsfds",
    images: [
      "https://parismatch.be/app/uploads/2021/04/BELGAIMAGE-159245228-1100x715.jpg",
    ],
    messages: [
      {
        date: "3/12/21",
        text: "It's about pride it's about power. \n we stay hungry we devour. lodasfdsfsdfdsfdssdfdfsddsffsdfdsfdsdsffdsfsfdsfds",
      },
      // {
      //   date: "3/12/21",
      //   text: "It's about pride it's about power. \n we stay hungry we devour. lodasfdsfsdfdsfdssdfdfsddsffsdfdsfdsdsffdsfsfdsfds",
      // },
      // {
      //   date: "3/12/21",
      //   text: "It's about pride it's about power. \n we stay hungry we devour. lodasfdsfsdfdsfdssdfdfsddsffsdfdsfdsdsffdsfsfdsfds",
      // },
    ],
    read: true,
    online: true,
  });
  const [matches, setMatches] = useState([message, message1]);

  return loggedIn ? (
    <Component
      {...pageProps}
      user={user}
      setLoggedIn={setLoggedIn}
      matches={matches}
    />
  ) : (
    <Login setLoggedIn={setLoggedIn} />
  );
}

export default Buzzle;
