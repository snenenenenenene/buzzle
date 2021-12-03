import {useEffect, useState} from 'react'
import Image from 'next/image'
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
      const [possibleMatches, setPossibleMatches] = useState([possibleMatch])

    return (
        <div className="bg-white my-auto mb-20 flex h-5/6 xl:w-4/12 lg:w-5/12 md:w-6/12 w-11/12 rounded-lg overflow-hidden shadow-2xl">
            <Image src={possibleMatches[0].images[0]} width="1000" height="100"/>
            <div className="absolute bottom-60 p-5 z-20 text-main-1 font-bold">
                <h1 className="text-4xl">{possibleMatches[0].firstName} {possibleMatches[0].lastName}</h1>
                <h1 className="text-2xl">{possibleMatches[0].age}</h1>
                <h1 className="text-2xl text-main-2">{possibleMatches[0].house}</h1>
            </div>
            <div className="absolute z-10 left-10">
            {possibleMatch.interests.films.map((interest) =>
            {
              console.log(interest)
                return (
                    <div>
                        <div className="bg-main-3-transparent my-1 p-1">
                          <p className="text-white">{interest}</p>
                        </div>
                    </div>
                )
            }
            )}
            {possibleMatch.interests.games.map((interest) =>
            {
              console.log(interest)
                return (
                    <div>
                        <div className="bg-main-2 my-1 p-1">
                          <p className="text-white">{interest}</p>
                        </div>
                    </div>
                )
            }
            )}
            </div>
        </div>
    )
}
