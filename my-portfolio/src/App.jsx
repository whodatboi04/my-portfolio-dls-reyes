import React from 'react';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router} from "react-router-dom";
import { MdOutlineMail } from "react-icons/md";
import { MdDownload } from "react-icons/md";


const Portfolio = () => {
  return (
    <main className='flex flex-col justify-center items-center'>
        {/* Home */}
        <section className='flex flex-col-reverse items-center justify-center lg:mt-32 lg:flex-row lg:justify-between lg:w-3/4 lg:h-full'id='Home'>
          <div>
            <h3 className='text-xs md:text-sm font-bold text-mainColor text-center lg:text-left mt-8'>FRONT-END DEVELOPER</h3>
            <h1 className='text-4xl md:text-5xl lg:text-7xl font-bold text-center lg:text-left'>Hello, my name <br/> is <span className='text-mainColor'>Ryan Mark</span></h1>
            <p className='text-sm md:text-lg text-center lg:text-left text-lightColor mt-2'>an aspiring developer with passion for <br/> design,innovation, technologies
            </p>
            <div className='flex flex-col lg:flex-row gap-4 mt-6  items-center'>
              <button className='bg-mainColor w-52 p-2 rounded-full flex justify-center items-center gap-3 text-tWhite'>Contact me <MdOutlineMail color='#fff' size={20}/></button>
              <button className='bg-lightColor w-52 p-2 rounded-full flex justify-center items-center gap-3 text-tWhite'>Download CV <MdDownload color='#fff' size={20}/></button>
            </div>
          </div>
          <div className='m-auto lg:m-0'>
            <div className='bg-gradient-to-b from-mainColor to-lightGreen rounded-full w-72 md:w-96'>
              <img 
                src='../src/image/1-profile-img.png' 
                className='w-72  md:ml-6 md:mb-6 md:w-96'
                alt='Animated Profile'
              />
            </div>
          </div>
        </section>

        {/* ABOUT ME */}
        <section className='flex flex-col lg:flex-row lg:justify-between lg:mt-32 lg:w-3/4' id='aboutMe'>
          <div className='flex items-center w-3/4 m-auto lg:m-0'>
            <img 
              src='../src/image/my-img-front.png' 
              className='rounded-full mt-10 w-72 m-auto md:w-96 lg:m-0'
              alt='My Picture'
            />
          </div>
          <div className='flex flex-col mt-8 lg:jutify-center px-5 lg:p-5 md:px-32 lg:w-full'>
            <h1 className='text-mainColor text-xl font-semibold'>About Me</h1>
            <p className='text-lightColor  lg:text-justify text-lg leading-8 md:leading-9'>
              A <span className='text-mainColor'>self-motivated</span> and <span className='text-mainColor'>enthusiastic</span> individual IT graduate from
              Universidad de Manila, equipped with a diverse skill set in 
              <span className='text-mainColor'> communication</span>, <span className='text-mainColor'>collaboration</span>, and <span className='text-mainColor'>analytical thinking</span>. Committed to 
              continuous learning, I thrive on exploring new horizons for personal 
              and professional growth.
            </p>
            <h1 className='text-mainColor text-xl font-semibold mt-4'>Skills</h1>
            <div className='mt-4 w-full flex flex-row flex-wrap gap-6 justify-center p4 md:p-0 md:gap-16 md:justify-normal'>
              <img 
                src='../src/image/html-5.png'
                className='w-16'
                alt='HTML 5'
              />
              <img 
                src='../src/image/css-3.png'
                className='w-16'
                alt='CSS 3'
              />
              <img 
                src='../src/image/js.png'
                className='w-16'
                alt='JavaScript'
              />
              <img 
                src='../src/image/php.png'
                className='w-16'
                alt='PHP'
              />
              <img 
                src='../src/image/sql-server.png'
                className='w-16'
                alt='SQL'
              />
              <img 
                src='../src/image/react.png'
                className='w-16'
                alt='React JS'
              />
              <img 
                src='../src/image/tailwind.png'
                className='w-16'
                alt='Tailwind Css'
              />
              <img 
                src='../src/image/c-sharp.png'
                className='w-16'
                alt='C#'
              />
              <img 
                src='../src/image/wordpress.png'
                className='w-16'
                alt='Wordpress'
              />
              <img 
                src='../src/image/elementor.png'
                className='w-16'
                alt='Elementor'
              />
              <img 
                src='../src/image/github.png'
                className='w-16'
                alt='GitHub'
              />
              <img 
                src='../src/image/git.png'
                className='w-16'
                alt='Git'
              />
            </div>
            
          </div>
        </section>
    </main>
  )
}


function App() {
  return (
    <Router>
      <Navbar />
      <Portfolio />
    </Router>
  )
}

export default App
