import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Project = () => {
  return (
    <div id='project'>
        <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          My Projects
        </h1>
        
      </div>

     

      <div className="flex flex-wrap -m-8 cursor-pointer">

{/* Project 1 - Left Side */}
<div className="lg:w-1/2 sm:w-full p-4">
  <div className="flex relative">
    <Image 
      alt="gallery"
      className="absolute inset-0 w-full h-full object-cover object-center"
      src="/asserts/project1.png"
      layout="fill"
    />
    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
      <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
        Project
      </h2>
      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
        PanaCloud Website
      </h1>
      <p className="leading-relaxed">
        Its a Website Name "PanaCloud" 
        that I made with core HTML CSS 
      </p>
      <Link target='_blank' href="https://panacloud-website-six.vercel.app/">
        <p className="leading-relaxed text-blue-500 hover:underline">
          View Project
        </p>
      </Link>
    </div>
  </div>
</div>

{/* Project 2 - Right Side */}
<div className="lg:w-1/2 sm:w-full p-4">
  <div className="flex relative">
    <Image 
      alt="gallery"
      className="absolute inset-0 w-full h-full object-cover object-center"
      src="/asserts/project_3.png"
      layout="fill"
    />
    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
      <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
        Project #2
      </h2>
      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
        Resume Shareable and Clipboard
      </h1>
      <p className="leading-relaxed">
        You can add your resume and share it with anyone
      </p>
      <Link target='_blank' href="https://updated-hackathon-resume-shareable-and-clipboard-milestone5.vercel.app/">
        <p className="leading-relaxed text-blue-500 hover:underline">
          View Project...
        </p>
      </Link>
    </div>
  </div>
</div>

</div>










      

    </div>
  </section>
  </div>
  )
}

export default Project