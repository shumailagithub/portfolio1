import Link from 'next/link'
import React from 'react'
import { AiOutlineCloudDownload } from "react-icons/ai";
import Image from 'next/image'


const Navbar = () => {
  return (
    <div className='bg-white z-50 stick top-0'>
        <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
  <span className="ml-3 text-xl flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">Shumi's Tec Zone</span>
  {/* <span className="ml-3 text-xl">Shumi's Zone</span> */}

    {/* { <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
     <Image
       src="/logo-2.png"
       alt="Logo"
       width={30}
       height={30}
       priority
     />
     
       <span className="ml-3 text-xl">Shumi's Zone</span>
    </a> } */}
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href={"/"} className="mr-5 hover:text-blue-600">Home</Link>
      <Link  href={"#about"} className="mr-5 hover:text-gray-900">About</Link>
      <Link href={"#roject"} className="mr-5 hover:text-gray-900">Projects</Link>
      <Link href={"#contact"} className="mr-5 hover:text-gray-900">Contacts</Link>
    </nav>

    <a href="./public/asserts/CV-for-Portfolio-PDF.pdf"></a>
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Download CV
        
    <AiOutlineCloudDownload  className='ml-2'/>

    </button>
  </div>
</header>
    </div>
  )
}

export default Navbar