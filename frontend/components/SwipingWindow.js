import {useState} from 'react'
import Deck from './Deck'
export default function SwipingWindow() {
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
      const [possibleMatches, setPossibleMatches] = useState([possibleMatch,possibleMatch,possibleMatch])

    return (
      <div className="h-screen w-full justify-center items-center">
            <Deck possibleMatches={possibleMatches}/>

        </div>
    )
}
