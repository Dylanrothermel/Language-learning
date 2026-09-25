import React from 'react'
import './exercisesList.css'
import Exercises from '../exercises/Exercises'

const ExercisesList = ({data}) => {
  return (
    <>
     <div className='exercisesList'>
        {data.map((el) => (
            <div key={el.id}>
                <Exercises {...el} />
            </div>
        ))}
    </div>
    </>
  )
}

export default ExercisesList