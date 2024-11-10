import { request } from 'http';
import Link from 'next/link'
import React from 'react'
import { ImLinkedin } from "react-icons/im";
import { AiFillFacebook } from "react-icons/ai";


const Footer = () => {
  return (
    <div className='bg-blue-100'>
        <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      
      <span className="ml-3 text-xl">Shumi's Tec Zone</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2024 Shumi's Tec Zone
     
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
       <Link href="https://www.linkedin.com/in/shumaila-gulfam-9a59802b6/" className="text-gray-500" target="_blank" rel="noopener noreferrer">
  <ImLinkedin className="text-2xl hover:text-blue-600"/>
</Link>
{/* <Link href="https://www.facebook.com/shumaila.gulfam" target="_blank" rel="noopener noreferrer" className="text-gray-500">
  <AiFillFacebook className="text-2xl hover:text-blue-600"/>
</Link> */}

    </span>
  </div>
</footer>

    </div>
  )
}

export default Footer