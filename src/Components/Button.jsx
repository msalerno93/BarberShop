import React from 'react'
import {Link} from 'react-router-dom'

const Button = ({buttonName, pathName}) => {
  return (
    <Link to={pathName} className='py-1 px-4 rounded-lg bg-black text-white font-bold text-lg items-center text-center'>
      {buttonName}
    </Link>
  )
}

export default Button