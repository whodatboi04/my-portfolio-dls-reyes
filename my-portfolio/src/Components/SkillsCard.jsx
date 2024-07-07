import React from 'react'
import { 
    FaBrain, 
    FaCode 
} from "react-icons/fa";


export default function SkillsCard() {
    const frontend = [
        {
            image: '../src/image/html-5.png',
            alt: 'HTML 5',
            title: 'HTML5'
        },
        {
            image: '../src/image/css-3.png',
            alt: 'CSS 3',
            title: 'CSS3'
        },
        {
            image: '../src/image/js.png',
            alt: 'JavaScript',
            title: 'JavaScript'
        },
        {
            image: '../src/image/react.png',
            alt: 'React JS',
            title: 'ReactJS'
        },
        {
            image: '../src/image/tailwind.png',
            alt: 'Tailwind Css',
            title: 'Tailwind'
        },
        {
            image: '../src/image/bootstrap.png',
            alt: 'Bootstrap',
            title: 'Bootstrap'
        }
    ]
    const backend = [
        {
            image: '../src/image/php.png',
            alt: 'PHP',
            title: 'PHP'
        },
        {
            image: '../src/image/mysql.png',
            alt: 'MySql',
            title: 'MySql'
        },
        {
            image: '../src/image/laravel.png',
            alt: 'Laravel',
            title: 'Laravel'
        },
        {
            image: '../src/image/postman.png',
            alt: 'Postman',
            title: 'Postman'
        }
    ]
    const others = [
        {
            image: '../src/image/c-sharp.png',
            alt: 'C#',
            title: 'C Sharp'
        },
        {
            image: '../src/image/wordpress.png',
            alt: 'Wordpress',
            title: 'Wordpress'
        },
        {
            image: '../src/image/elementor.png',
            alt: 'Elementor',
            title: 'Elementor'
        }, 
        {
            image: '../src/image/github.png',
            alt: 'GitHub',
            title: 'GitHub'
        },
        {
            image: '../src/image/git.png',
            alt: 'Git',
            title: 'Git'
        },
        {
            image: '../src/image/figma.png',
            alt: 'Figma',
            title: 'Figma'
        }
    ]
  return (
    <div className='flex flex-col gap-8 items-center lg:flex-row dark:text-white'>
        <div className='border-[1px] border-light w-56 h-72 p-5 rounded-[15px] shadow-md'>
            <div className='flex items-center gap-2 justify-center'>
                <img src='../src/image/ui-design.png' alt='frontend-logo' className="w-12 lg:w-[29px]"/>
                <h2 className='text-[16px] text-tBalck font-semibold'>Frontend Skills</h2>
            </div>
            <div className='grid grid-cols-3'>
                {frontend.map((s,i) =>{
                    return (
                        <div className='flex flex-col items-center gap-1 justify-center mt-8' key={i}>
                            <img src={s.image} alt={s.alt} className="w-[35px]"/>
                            <h3 className='text-[9px] text-tBalck font-semibold'>{s.title}</h3>
                        </div>
                    )
                })}
            </div>
        </div>
        <div className='border-[1px] border-light w-56 h-72 p-5 rounded-[15px] shadow-md'>
            <div className='flex items-center gap-2 justify-center'>
                <FaCode size={20} className='dark:text-white'/>
                <h2 className='text-[16px] text-tBalck font-semibold'>Backend Skills</h2>
            </div>
            <div className='grid grid-cols-3'>
                {backend.map((s,i) =>{
                    return (
                        <div className='flex flex-col items-center gap-1 justify-center mt-8' key={i}>
                            <img src={s.image} alt={s.alt} className="w-[35px]"/>
                            <h3 className='text-[9px] text-tBalck font-semibold'>{s.title}</h3>
                        </div>
                    )
                })}
            </div>
        </div>
        <div className='border-[1px] border-light w-56 h-72 p-5 rounded-[15px] shadow-md'>
            <div className='flex items-center gap-2 justify-center'>
                <FaBrain size={20} className='dark:text-white'/>
                <h2 className='text-[16px] text-tBalck font-semibold'>Other Skills</h2>
            </div>
            <div className='grid grid-cols-3'>
                {others.map((s,i) =>{
                    return (
                        <div className='flex flex-col items-center gap-1 justify-center mt-8' key={i}>
                            <img src={s.image} alt={s.alt} className="w-[35px]"/>
                            <h3 className='text-[9px] text-tBalck font-semibold'>{s.title}</h3>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
    
  )
}
