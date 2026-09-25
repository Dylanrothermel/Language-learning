import React from 'react'
import { Link } from 'react-router'

const Button = (text, URL, link, onClick) => {
  return (
    <>
        <Link to={`${URL}`} className='linkCard'>{text}</Link>
        

    </>
  )
}

export default Button