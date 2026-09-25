import React, { useState } from 'react'
import './exercisesContainer.css'
import ExercisesList from '../exercisesList/ExercisesList'

const ExercisesContainer = () => {
  const [batches, setBatches] = useState([])
    const exercises = [
      {
        id: 1, 
        name: 'Adjectives'
      },
      {
        id: 2,
        name: 'Verbs'
      },
      {
        id: 3,
        name: 'Nouns'
      },{
        id: 4,
        name: 'Sentences'
      }

    ]
  return (
    <>
     <ExercisesList data={exercises}/>
    </>
  )
}

export default ExercisesContainer