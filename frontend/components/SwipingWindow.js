import {useState} from 'react'
import Deck from './Deck'
export default function SwipingWindow({swipeRight}) {
    const [possibleMatch, setPossibleMatch] = useState({
        "images": [
          "/snape.jpeg",
        ],
        "firstName": "Severus",
        "lastName": "Snape",
        "birthDate": "17/11/1930",
        "age": 91,
        "location": {
          "city":"London",
          "country": "UK"
        },
        "house": "Slytherin",
        "interests": {
          "films": ["Harry Potter", "Fantastic Beasts"],
          "games": ["Quidditch"],
          "anime": [],
          "series": [],
          "music": ["Black Sabbath", "The Strokes"],
        }
      })
      const [possibleMatch2, setPossibleMatch2] = useState({
        "images": [
          "https://parismatch.be/app/uploads/2018/08/hobbit-lotr-5-armies-gandalf-hat-1100x715.jpg",
        ],
        "firstName": "Gandalf",
        "lastName": "The Gray",
        "birthDate": "17/11/843",
        "age": 1039,
        "location": {
          "city":"Auckland",
          "country": "New Zealand"
        },
        "house": "Wizard",
        "interests": {
          "films": ["Lord Of the Rings", "The Hobbit"],
          "games": ["Chess"],
          "anime": [],
          "series": [],
          "music": ["Tavern Music", "Mozart"],
        }
      })
      const [possibleMatches, setPossibleMatches] = useState([possibleMatch,possibleMatch2,possibleMatch])

    return (
      <div className="h-screen w-full justify-center items-center">
            <Deck possibleMatches={possibleMatches} swipeRight={swipeRight}/>
        </div>
    )
}
