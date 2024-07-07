
import AboutMe from "./_pages/aboutme";
import Home from "./_pages/home";
import Project from "./_pages/project";

export default function portfolio() {

    return (
        <main className='flex flex-col justify-center items-center dark:bg-dark'>
            <Home/>
            <AboutMe/>
            <Project/>
        </main>
    )
}
