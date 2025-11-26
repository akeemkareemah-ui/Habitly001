import React from 'react'
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks"
import Benefits from '../components/Benefits';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
function Home() {
  return (
    <div>
     <Hero/> 
     <Benefits/>
       <Testimonials/>
     <HowItWorks/>
      <CTA/>
    </div>
  )
}

export default Home