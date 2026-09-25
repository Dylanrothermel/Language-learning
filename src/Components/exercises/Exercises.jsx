import React from 'react'
import './exercises.css'
import { Link } from 'react-router'

const Exercises = ({name}) => {
  return (
    <>
     <Link to={`/${name}`} className='card'>
      <h2>{name}</h2>
     </Link>
    </>
  )
}

export default Exercises