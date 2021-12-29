import { useState, useRef, useMemo, createRef } from "react";
import TinderCard from "react-tinder-card";
import { FaDiceSix, FaDiceOne } from "react-icons/fa";

import Deck from "./Deck";
import SwipingDock from "./SwipingDock";
export default function SwipingWindow({}) {
  const [possibleMatch, setPossibleMatch] = useState({
    images: ["/snape.jpeg"],
    firstName: "Severus",
    lastName: "Snape",
    birthDate: "17/11/1930",
    age: 91,
    location: {
      city: "London",
      country: "UK",
    },
    house: "Slytherin",
    interests: {
      films: ["Harry Potter", "Fantastic Beasts"],
      games: ["Quidditch"],
      anime: [],
      series: [],
      music: ["Black Sabbath", "The Strokes"],
    },
  });
  const [possibleMatch2, setPossibleMatch2] = useState({
    images: [
      "https://parismatch.be/app/uploads/2018/08/hobbit-lotr-5-armies-gandalf-hat-1100x715.jpg",
    ],
    firstName: "Gandalf",
    lastName: "The Gray",
    birthDate: "17/11/843",
    age: 1039,
    location: {
      city: "Auckland",
      country: "New Zealand",
    },
    house: "Wizard",
    interests: {
      films: ["Lord Of the Rings", "The Hobbit"],
      games: ["Chess"],
      anime: [],
      series: [],
      music: ["Tavern Music", "Mozart"],
    },
  });
  const [possibleMatches, setPossibleMatches] = useState([
    possibleMatch,
    possibleMatch2,
    possibleMatch,
  ]);

  const [currentIndex, setCurrentIndex] = useState(possibleMatches.length - 1);
  const [lastDirection, setLastDirection] = useState();
  const currentIndexRef = useRef(currentIndex);

  const childRefs = useMemo(
    () =>
      Array(possibleMatches.length)
        .fill(0)
        .map((i) => createRef()),
    []
  );

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canGoBack = currentIndex < possibleMatches.length - 1;

  const canSwipe = currentIndex >= 0;

  // set last direction and decrease current index
  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
  };

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current);
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
    // TODO: when quickly swipe and restore multiple times the same card,
  };

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < possibleMatches.length) {
      await childRefs[currentIndex].current.swipe(dir); // Swipe the card!
    }
  };

  // increase current index and show card
  const goBack = async () => {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current.restoreCard();
  };
  return (
    <div className="cardContainer rounded-xl ">
      {/* <div className="mx-auto flex justify-center relative bg-gray-400 rounded-xl overflow-hidden"> */}

      {possibleMatches === [] ? (
        <h1 className="">No Users Left</h1>
      ) : (
        possibleMatches.map((user, index) => (
          <TinderCard
            ref={childRefs[index]}
            className="absolute cursor-pointer"
            key={user.id}
            onSwipe={(dir) => swiped(dir, user.firstName, index)}
            onCardLeftScreen={() => outOfFrame(user.firstName, index)}
          >
            <div
              style={{ backgroundImage: "url(" + user.images[0] + ")" }}
              className="card"
            >
              <h3>{user.firstName}</h3>
            </div>
          </TinderCard>

          //     <TinderCard key={user.firstName} onSwipe={(dir) => swiped(dir, user.firstName)} onCardLeftScreen={() => outOfFrame(user.firstName)}
          //   className="text-2xl my-5 h-2/3 xl:max-w-4/12 lg:max-w-5/12 md:max-w-6/12 max-w-11/12 shadow-2xl rounded-2xl transform rotate-0 cursor-pointer bg-main-2"
          //   key={user.id}
          // >
          //   <img
          //     src={user.images[0]}
          //     className="no-drag object-fill"
          //     width="10000"
          //     height="10000"
          //   />
          //   <div className="absolute bottom-5 left-5 p-1 text-main-1 font-bold">
          //     <h1 className="text-4xl">
          //       {user.firstName} {user.lastName}
          //     </h1>
          //     <h1 className="text-2xl">{user.age}</h1>
          //     <h1 className="text-2xl text-main-2">{user.house}</h1>
          //   </div>
          /* <div className="absolute left-1">
          {user.interests.films.map((interest) => {
            return (
              <div>
                <div className="bg-main-3-transparent my-1 p-1 ">
                  <p className="text-white">{interest}</p>
                </div>
              </div>
            );
          })}
          {user.interests.games.map((interest) => {
            return (
              <div>
                <div className="bg-main-2 my-1 p-1">
                  <p className="text-white">{interest}</p>
                </div>
              </div>
            );
          })}
      </div> */
          // </TinderCard>
        ))
      )}
      <div className="overflow-hidden">
        <div className="absolute bottom-32 z-10 left-1/2 transform -translate-x-1/2 translate-y-1/2 flex text-main-cross">
          <div className="cursor-pointer mx-10 bg-main-5 w-16 h-16 rounded-full shadow-lg flex hover:bg-main-3-transparent backdrop-filter backdrop-blur-lg hover:text-white">
            <FaDiceOne
              onClick={() => swipe("left")}
              className="w-5/12 h-full m-auto"
            />
          </div>
          {/* <div className="cursor-pointer mx-20 bg-main-5 w-20 h-20 rounded-full shadow-lg flex hover:bg-main-3-transparent backdrop-filter backdrop-blur-lg hover:text-white">
          <FaDiceOne onClick={() => swipe('left')} className="w-5/12 h-full m-auto" />
        </div> */}
          <div className="cursor-pointer mx-10 bg-main-5 w-16 h-16 rounded-full shadow-lg flex hover:bg-main-3-transparent backdrop-filter backdrop-blur-lg hover:text-main-1">
            <FaDiceSix
              onClick={() => swipe("right")}
              className=" m-auto w-5/12 h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
