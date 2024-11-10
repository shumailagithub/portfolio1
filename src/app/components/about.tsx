// Remove the unused 'Link' import
import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div id='about'>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded max=auto w-[300px] h-[350px]"
              alt="about me"
              src="/asserts/pic-for-resume.jpeg"
              width={300}
              height={350}
              priority
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              About Me
              <br className="hidden lg:inline-block" />
              front-end developer
            </h1>
            <p className="mb-8 leading-relaxed">
              I&apos;m Shumaila, a web developer specializing in front-end development. I’m passionate about building visually appealing, responsive websites that offer intuitive user experiences. With a strong foundation in HTML, CSS, and JavaScript, I aim to bring creative solutions to every project, ensuring that the final product is both functional and engaging.
            </p>
            <div className="flex justify-center">
              <a href="./public/asserts/CV-for-Portfolio-PDF.pdf">
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  About Me
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
