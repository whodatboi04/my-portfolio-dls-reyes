import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars, FaTimes} from "react-icons/fa";
import { MdLightMode } from "react-icons/md";

//Navigation anchor tag
const NavLinks = () => {
    return (
    <>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/about">ABOUT ME</NavLink>
        <NavLink to="/project">PROJECT</NavLink>
        <NavLink to="/contact">CONTACT</NavLink>
        <button>
            <MdLightMode />
        </button>
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
    <header className='flex flex-wrap justify-center'>
        <nav className='flex  h-24 items-center justify-between w-3/4 z-10 '>
            <NavLink to="/">
                <img 
                    src='../src/image/infinityrydev-high-resolution-logo-transparent.png' 
                    className='hidden md:flex w-64'
                />
                <img 
                    src='../src/image/infinity.png'
                    className='md:hidden w-20'
                />
            </NavLink>
            <div className='hidden lg:flex gap-14'>
                <NavLinks />
            </div>
            <div className='lg:hidden'>
                <button onClick={toggledMenu}>{isOpen ? <FaTimes size={20} /> : <FaBars size={20}/>}</button>
            </div> 
        </nav>

        {isOpen && (
            <div className='flex flex-col w-full items-center gap-4 md:hidden'>
                <NavLinks />
            </div>
        )}
    </header> 
    </>
  )
}

export default Navbar
