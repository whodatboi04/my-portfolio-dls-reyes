import { MdOutlineMail } from "react-icons/md";
import { MdDownload } from "react-icons/md";

export default function portfolio() {

    const skills = [
        {
            image: '../src/image/html-5.png',
            alt: 'HTML 5'
        },
        {
            image: '../src/image/css-3.png',
            alt: 'CSS 3'
        },
        {
            image: '../src/image/js.png',
            alt: 'JavaScript'
        },
        {
            image: '../src/image/php.png',
            alt: 'PHP'
        },
        {
            image: '../src/image/sql-server.png',
            alt: 'SQL'
        },
        {
            image: '../src/image/react.png',
            alt: 'React JS'
        },
        {
            image: '../src/image/tailwind.png',
            alt: 'Tailwind Css'
        },
        {
            image: '../src/image/c-sharp.png',
            alt: 'C#'
        },
        {
            image: '../src/image/wordpress.png',
            alt: 'Wordpress'
        },
        {
            image: '../src/image/elementor.png',
            alt: 'Elementor'
        }, 
        {
            image: '../src/image/github.png',
            alt: 'GitHub'
        },
        {
            image: '../src/image/git.png',
            alt: 'Git'
        }
    ];

    return (
        <main className='flex flex-col justify-center items-center dark:bg-dark'>
        {/* Home */}
            <section className='flex flex-col-reverse items-center justify-center lg:mt-32 lg:flex-row lg:justify-between lg:w-3/4 lg:h-full mt-10'id='Home'>
                <div>
                    <h3 className='text-xs md:text-sm font-bold text-mainColor text-center lg:text-left mt-8 dark:text-lightGreen'>
                        FRONT-END DEVELOPER
                    </h3>
                    <h1 className='text-4xl md:text-5xl lg:text-7xl font-bold text-center lg:text-left dark:text-white'>
                        Hello, my name <br/> is <span className='text-mainColor dark:text-lightGreen'>Ryan Mark</span>
                    </h1>
                    <p className='text-sm md:text-lg text-center lg:text-left text-lightColor mt-2 dark:text-white'>
                        an aspiring developer with passion for <br/> design,innovation, technologies
                    </p>
                    <div className='flex flex-col lg:flex-row gap-4 mt-6  items-center'>
                        <button className='bg-mainColor w-52 p-2 rounded-full flex justify-center items-center gap-3 text-tWhite'>
                            Contact me <MdOutlineMail color='#fff' size={20}/>
                        </button>
                        <button className='bg-lightColor w-52 p-2 rounded-full flex justify-center items-center gap-3 text-tWhite'>
                            Download CV <MdDownload color='#fff' size={20}/>
                        </button>
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
                        className='rounded-full mt-10 w-72 m-auto md:w-[23rem] lg:m-0'
                        alt='My Picture'
                    />
                </div>
                <div className='flex flex-col mt-8 lg:jutify-center px-5 lg:p-5 md:px-32 lg:w-full'>
                    <h1 className='text-mainColor text-xl font-semibold dark:text-lightGreen'>
                        About Me
                    </h1>
                    <p className='text-lightColor  lg:text-justify text-md leading-8 md:leading-9 dark:text-white'>
                        A   <span className='text-mainColor dark:text-lightGreen'>self-motivated</span> and <span className='text-mainColor dark:text-lightGreen'>
                                enthusiastic
                            </span> 
                        individual IT graduate from
                        Universidad de Manila, equipped with a diverse skill set in 
                        <span className='text-mainColor dark:text-lightGreen'> communication</span>, <span className='text-mainColor dark:text-lightGreen'>collaboration</span>, and <span className='text-mainColor dark:text-lightGreen'>analytical thinking</span>. Committed to 
                        continuous learning, I thrive on exploring new horizons for personal 
                        and professional growth.
                    </p>
                    <h1 className='text-mainColor text-xl font-semibold mt-4 dark:text-lightGreen'>
                        Skills
                    </h1>
                    <div className='flex justify-center mt-6 md:justify-normal '>
                        <div className='grid grid-cols-4 gap-8 gap-x-16 justify-center md:grid md:grid-cols-5 md:gap-10 md:gap-x-20 lg:grid-cols-5'>
                            {skills.map((s,i) =>{
                                return <img key={i} src={s.image} alt={s.alt} className="w-12 lg:w-14" />
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
