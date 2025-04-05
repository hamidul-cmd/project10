import React from 'react'
import Navbar from '../Components/Navbar'

function Hero() {
  return (
    <>
     <section className="hero bg-cover bg-left min-h-[100vh] relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[120px] after:w-full after:bg-linear-to-b after:from-[#00000012] after:to-[#000000] xll:bg-center">
       <Navbar/>
    </section> 

    </>
  )
}

export default Hero
