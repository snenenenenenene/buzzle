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
        }
      })
      const [possibleMatches, setPossibleMatches] = useState([possibleMatch])

    useEffect(() => {
    }, [])

    return (
        <div className="bg-white my-auto mb-20 flex h-5/6 xl:w-4/12 lg:w-5/12 md:w-6/12 w-11/12 rounded-lg overflow-hidden shadow-2xl">
            <Image src={possibleMatches[0].images[0]} width="1000" height="100"/>
            <div className="absolute bottom-60 p-5 z-20 text-main-1 font-bold">
                <h1 className="text-4xl">{possibleMatches[0].firstName} {possibleMatches[0].lastName}</h1>
                <h1 className="text-2xl">{possibleMatches[0].age}</h1>
            </div>
        </div>
    )
}
