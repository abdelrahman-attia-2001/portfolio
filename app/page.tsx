import React from "react";
import Nav from "./components/Nav";
import HeroSection from "./components/HeroSection";
import SocialSidebar from "./components/SocialSidebar";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import WorkSection from "./components/WorkSection";
import ContactSection from "./components/ContactSection";
import ProjectLink from "./components/ProjectLink";
export default function Home() {
  return (
    <div>
      <Nav />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <WorkSection />
      <ContactSection />
      <SocialSidebar />
      <ProjectLink />
    </div>
  );
}
