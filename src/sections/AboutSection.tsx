"use client";

import { Card } from "@/components/Card/Card";
import bookImage from "@/assets/images/project4.jpg";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/Card/CardHeader";
import { ToolBoxItems } from "@/components/TollBoxItems";
import { motion } from "framer-motion";
import { useRef } from "react";
import { SectionHeader } from "@/components/SectionHeader";

const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "GitHub",
    iconType: GithubIcon,
  },
];

const hobbies = [
  {
    title: "Frontend Development",
    left: "5%",
    top: "5%",
  },
  {
    title: "UI/UX Design",
    left: "50%",
    top: "5%",
  },
  {
    title: "Responsive Designs",
    left: "10%",
    top: "35%",
  },
  {
    title: "Web Designs",
    left: "35%",
    top: "40%",
  },
  {
    title: "Design",
    left: "70%",
    top: "45%",
  },
  {
    title: "Development",
    left: "5%",
    top: "65%",
  },
  {
    title: "Creative",
    left: "45%",
    top: "70%",
  },
  {
    title: "API Integration",
    left: "45%",
    top: "70%",
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);

  return (
    <section className="py-10 lg:py-28">
      <div className="container">
        <SectionHeader 
          title="About Me"
          subtitle="A Glimpse Into My World"
          description="I'm a passionate frontend developer with a keen eye for design and an aspiration to become a UI/UX designer. My journey in web development started with a fascination for creating visually appealing and user-friendly websites, which has now grown into a full-fledged career path. I love turning ideas into interactive realities and strive to build applications that not only look good but are also intuitive and easy to use."
        />
        <div className="mt-20 flex flex-col gap-8">
          {/* Medium responsive grid 1 */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Services"
                description="Discover the services I offer and how I can help you bring your ideas to life."
              />
              {/* Card Image */}
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="Book Cover" />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft exceptional digital experiences."
                className=""
              />
              <ToolBoxItems
                items={toolboxItems}
                className=""
                itemsWrapperClassname="animate-move-left [animation-duration:40s]"
              />
              <ToolBoxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassname="animate-move-right [animation-duration:15s]"
              />
            </Card>
          </div>
          {/* Medium responsive grid 2 */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Services and Focus"
                description="Discover the services I offer and how I can help you bring your ideas to life."
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map(({ title, left, top }) => (
                  <motion.div
                    key={title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient rounded-full py-1 lg:px-1.5 absolute"
                    style={{
                      left: left,
                      top: top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950 px-2">{title}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-primary-foreground/15"></div>
              <Image
                src={mapImage}
                alt="Map"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-fullafter:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient -z-10"></div>
                <Image
                  src={smileMemoji}
                  alt="Smile Memoji"
                  className="size-20"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
