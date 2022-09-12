import React from 'react'
import { AnimalCollection } from '../models/animal'

// 2b Flytta ut koden som renderar varje djur i listan till en egen komponent, i en annan fil. Använd interface för att beskriva props.



export default function AnimalList(props:AnimalCollection) {
  const { animals, mou } = props; //destructuring props
  return (
    <div>
      {
        animals.map((animal, i) => <p key={i} onClick={() => {mou(animal)}}>{animal.name}</p>)
      }
    </div>
  )
}
