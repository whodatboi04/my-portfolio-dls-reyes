
import AboutMe from "./_pages/aboutme";
import Home from "./_pages/home";

export default function portfolio() {

    return (
        <main className='flex flex-col justify-center items-center dark:bg-dark'>
            <Home/>
            <AboutMe/>
        </main>
    )
}
