import React from 'react';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router} from "react-router-dom";
import { MdOutlineMail } from "react-icons/md";
import { MdDownload } from "react-icons/md";


const Portfolio = () => {
  return (
    <main className='flex flex-col justify-center items-center'>
        {/* Home */}
        <section className='flex flex-col-reverse items-center mt-6 md:flex-row justify-center md:gap-96 md:w-3/4 md:mt-24'>
          <div>
            <h3 className='text-xs md:text-sm font-bold text-mainColor text-center lg:text-left mt-8'>FRONT-END DEVELOPER</h3>
            <h1 className='text-4xl md:text-6xl font-bold text-center lg:text-left'>Hello, my name <br/> is <span className='text-mainColor'>Ryan Mark</span></h1>
            <p className='text-sm md:text-lg text-center lg:text-left text-lightColor mt-2'>an aspiring developer with passion for <br/> design,innovation, technologies
            </p>
            <div className='flex flex-col md:flex-row gap-4 mt-6  items-center'>
              <button className='bg-mainColor w-52 p-2 rounded-full flex justify-center items-center gap-3 text-tWhite'>Contact me <MdOutlineMail color='#fff' size={20}/></button>
              <button className='bg-lightColor w-52 p-2 rounded-full flex justify-center items-center gap-3 text-tWhite'>Download CV <MdDownload color='#fff' size={20}/></button>
            </div>
          </div>
          <div>
            <div className='bg-gradient-to-b from-mainColor to-lightGreen rounded-full w-72 md:w-80'>
              <img src='../src/image/1-profile-img.png' className='w-72 md:ml-6 md:mb-6 md:w-80'/>
            </div>
          </div>
        </section>
        {/* ABOUT ME */}
        <section className=''>
          <img 
            src='../src/image/my-img-front.png' 
            className='rounded-full mt-10 w-72 m-auto'
          />
          <h1>About Me</h1>
          <p>
            A self-motivated and enthusiastic individual IT graduate from <br />
            Universidad de Manila, equipped with a diverse skill set in <br />
            communication, collaboration, and analytical thinking. Committed to <br />
            continuous learning, I thrive on exploring new horizons for personal <br />
            and professional growth.
          </p>
          <h1>Skills</h1>

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
