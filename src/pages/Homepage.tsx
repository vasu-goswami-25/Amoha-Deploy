// import React from 'react'
import About from "../components/About"
import BusinessPartners from "../components/BusineesPartner"
import Home from "../components/Home"
import OurServices from "../components/OurServices"
import WhyChooseAmoha from "../components/WhyChooseAmoha"
import OurLearners from "../components/OurLearners"
import OurTeam from "../components/MyTeam"
import FAQ from "../components/FrequentlyAskedQuestion"
import Testimonials from "../components/Testimonial"
interface HomepageProps {
  darkMode: boolean;
}

const Homepage = ({ darkMode }: HomepageProps) => {
  return (
    <>
   <Home darkMode={darkMode}/>
   <div className={`${darkMode ? "bg-gray-900" : "bg-white"}`}>
   <About darkMode={darkMode}/>
   <BusinessPartners darkMode={darkMode}/>
   <OurServices darkMode={darkMode}/>
   <WhyChooseAmoha darkMode={darkMode}/>
   <OurLearners darkMode={darkMode}/>
   <Testimonials darkMode={darkMode}/>
   <OurTeam darkMode={darkMode}/>
   <FAQ darkMode={darkMode}/>
   </div>



   </>
  )
}

export default Homepage
