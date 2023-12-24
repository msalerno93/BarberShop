import React from 'react'
import { FaInstagram } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { FaGoogle } from "react-icons/fa"

const Footer = () => {
  return (
    <div className='grid grid-cols-1 pt-5 pb-5 bg-black text-white'>
      <div className='text-center'>
        <li className='list-none font-logo text-4xl'>Jimmy's Barbershop LLC</li>
        <li className='list-none text-xl'>Established 1965</li>
      </div>
      <div className='flex justify-center items-center space-x-2 pt-3'>
      <button className='list-none text-3xl hover:text-gray-400'><FaInstagram /></button>
      <button className='list-none text-3xl hover:text-gray-400'><FaFacebook /></button>
      <button className='list-none text-3xl hover:text-gray-400'><FaGoogle /></button>
      </div>
      <div className='text-center pt-2'>
        <div>Wesbite created & maintained by</div>
        <a href='https://salernomichael-portfolio.netlify.app/' target='_blank' rel='noreferrer' className='text-lg hover:text-gray-400'>Salerno Inc</a>
      </div>
    </div>
  )
}

export default Footer