import React from 'react';
import Nav from './components/Nav';
import HeroSection from './components/HeroSection'
import SocialSidebar from './components/SocialSidebar';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import WorkSection from './components/WorkSection';
import ContactSection from './components/ContactSection';
export default function Home() {
  return (
   <div >
    <Nav />
    <HeroSection />
    <SocialSidebar />
    <AboutSection  />
    <ExperienceSection />
    <WorkSection />
    <ContactSection />

 


   </div>
  );
}
