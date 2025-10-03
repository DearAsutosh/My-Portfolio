import React from 'react'
import NavBar from './NavBar';
import Hero from './Hero';


const LandingPage = () => {
    return (
        <>
            <div className="mx-auto px-5 md:px-10 md:h-screen">
            {/* <NavBar/> */}
            <Hero/>
            </div>
        </>
    )
}

export default LandingPage