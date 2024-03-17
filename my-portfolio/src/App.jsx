import React from 'react';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router} from "react-router-dom";
import { MdOutlineMail } from "react-icons/md";
import { MdDownload } from "react-icons/md";


const Home = () => {
  return (
    <main className='flex flex-col md:flex-row border-solid border-2 border-black w-3/4 items-center m-auto h-screen '>
        <section>
          <h3 className='text-xs font-bold text-mainColor text-center lg:text-left'>FRONT-END DEVELOPER</h3>
          <h1 className='text-4xl font-bold text-center lg:text-left'>Hello, my name <br/> is <span className='text-mainColor'>Ryan Mark</span></h1>
          <p className='text-sm text-center lg:text-left text-lightColor mt-2'>an aspiring developer with passion for design,innovation, technologies
          </p>
          <div className='flex flex-col md:flex-row gap-4 mt-6  items-center'>
            <button className='bg-mainColor w-52 p-2 rounded-full flex justify-center items-center gap-3'>Contact me <MdOutlineMail color='#fff' size={20}/></button>
            <button className='bg-lightColor w-52 p-2 rounded-full flex justify-center items-center gap-3'>Download CV <MdDownload color='#fff' size={20}/></button>
          </div>
        </section>
    </main>
  )
}

function App() {
  return (
    <Router>
      <Navbar />
      <Home />
    </Router>
  )
}

export default App
