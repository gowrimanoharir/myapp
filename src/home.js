import React, { useState } from 'react'
import AboutSection from './components/AboutSection';
import FooterSection from './components/Footer';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar'
import ProjectSection from './components/ProjectSection';
import ServicesSection from './components/ServicesSection';
import { Data } from './components/ServicesSection/data';
import Sidebar from './components/Sidebar'
import TeamSection from './components/TeamSection';

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen);
    }

    return (
        <>
          <Sidebar isOpen={isOpen} toggle={toggle}/>
          <Navbar toggle={toggle}/>
          <HeroSection/>
          <AboutSection />
          <ProjectSection/>
          <ServicesSection slides={Data}/>
          <TeamSection />
          <FooterSection />
        </>
    )
}

export default Home
