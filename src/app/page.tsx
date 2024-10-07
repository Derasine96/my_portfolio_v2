import { AboutSection } from "@/sections/AboutSection";
import Contact from "@/sections/Contact/Contact";
import { FooterSection } from "@/sections/Footer";
import { HeroSection } from "@/sections/Hero";
import { MainNav } from "@/sections/MainNav";
import { ProjectSection } from "@/sections/ProjectSection";
import { TapeSection } from "@/sections/Tape";
import React from "react";

export default function Home() {
  return (
    <>
      <MainNav />
      <div id="home">
        <HeroSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <TapeSection />
      <div id="projects">
        <ProjectSection />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <FooterSection />
    </>
  );
}
