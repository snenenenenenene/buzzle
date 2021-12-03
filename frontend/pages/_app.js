import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { useState } from "react";

function Buzzle({ Component, pageProps }) {
  const [image, setImage] = useState(
    "https://m.media-amazon.com/images/M/MV5BY2ViNDIwNmUtZGQ5Ni00MDYxLWI5YTktNWU1NGRlYWQ1ZDg0XkEyXkFqcGdeQXVyOTAyMDgxODQ@._V1_UY1200_CR166,0,630,1200_AL_.jpg"
  );
  const [firstName, setFirstName] = useState("Joe");
  const [lastName, setLastName] = useState("Trump");

  const [user, setUser] = useState(
  {
    "images": [
      image,
      image,
    ],
    "firstName": firstName,
    "lastName": lastName,
    "birthDate": "17/11/2000",
    "age": 21,
    "location": {
      "city":"Antwerp",
      "country": "Belgium"
    }
  })

  return (
    <Component
      {...pageProps}
      user={user}
    />
  );
}

export default Buzzle;
