import React, { useState } from 'react'
import { HashLink as NavLink } from 'react-router-hash-link'
import { FaBars, FaTimes} from "react-icons/fa";
import { MdLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

//Navigation anchor tag
const NavLinks = () => {
    const [mode, setMode] = useState(false);

    const handleClick = () =>{
        setMode(!mode);
    }

    return (
    <>
        <NavLink to="#Home" smooth className='nav-link hover:text-mainColor hover:border-b-2 hover:border-mainColor'>HOME</NavLink>
        <NavLink to="#aboutMe" smooth className='nav-link hover:text-mainColor hover:border-b-2 hover:border-mainColor'>ABOUT ME</NavLink>
        <NavLink to="#expirience" smooth className='nav-link hover:text-mainColor hover:border-b-2 hover:border-mainColor'>EXPIRIENCE</NavLink>
        <NavLink to="/project" smooth className='nav-link hover:text-mainColor hover:border-b-2 hover:border-mainColor'>PROJECT</NavLink>
        <NavLink to="/contact" smooth className='nav-link hover:text-mainColor hover:border-b-2 hover:border-mainColor'>CONTACT</NavLink>
        <button onClick={handleClick}>{mode ? <MdOutlineDarkMode /> : <MdLightMode /> }</button>
    </>
    );
};

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggledMenu = () => {
        setIsOpen(!isOpen);
    }
  return (
    <>
    <header className='flex flex-wrap justify-center bg-white w-full'>
        <nav className='flex  h-24 items-center justify-between w-11/12 z-10 '>
            <NavLink to="/">
                <img 
                    src='../src/image/infinityrydev-high-resolution-logo-transparent.png' 
                    className='hidden md:flex w-64'
                    alt='Desktop Logo'
                />
                <img 
                    src='../src/image/infinity.png'
                    className='md:hidden w-20'
                    alt='Mobile Logo'
                />
            </NavLink>
            <div className='hidden lg:flex gap-12'>
                <NavLinks />
            </div>
            <div className='lg:hidden'>
                <button onClick={toggledMenu}>{isOpen ? <FaTimes size={20} /> : <FaBars size={20}/>}</button>
            </div> 
        </nav>

        {isOpen && (
            <div className='flex flex-col w-full items-center gap-4 lg:hidden py-6'>
                <NavLinks />
            </div>
        )}
    </header> 
    </>
  )
}

export default Navbar
