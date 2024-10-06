import { SectionHeader } from "@/components/SectionHeader";
import projectImage1 from "@/assets/images/project1.jpg";
import projectImage2 from "@/assets/images/project2.jpg";
import projectImage3 from "@/assets/images/project3.jpg";
import projectImage4 from "@/assets/images/project4.jpg";
import { Card } from "@/components/Card/Card";
import Image from "next/image";
import { Fragment } from "react";
import { CutCornerButton } from "@/components/CutCornerButton";
import { div } from "framer-motion/client";

const portfolioProjects = [
  {
    company: "ALX Africa",
    year: "2024",
    title: "Legal Ease",
    link: "https://youtu.be/4k7IdSLxh6w",
    gitHubLink: "Derasine96/github.com",
    image: projectImage1,
    stacks: "HTML, CSS, ReactJs",
  },
  {
    company: "Freelance Project Practice",
    year: "2024",
    title: "Saas Landing Page",
    link: "https://youtu.be/7hi5zwO75yc",
    gitHubLink: "Derasine96/github.com",
    image: projectImage2,
    stacks: "HTML, CSS, ReactJs",
  },
  {
    company: "Freelance Project",
    year: "2024",
    title: "AI Startup Landing Page",
    link: "https://youtu.be/Z7I5uSRHMHg",
    gitHubLink: "Derasine96/github.com",
    image: projectImage3,
    stacks: "HTML, CSS, ReactJs",
  },
  {
    company: "Freelance Project",
    year: "2023",
    title: "Portfolio Website",
    link: "https://youtu.be/Z7I5uSRHMHg",
    gitHubLink: "Derasine96/github.com",
    image: projectImage4,
    stacks: "HTML, CSS, ReactJs",
  },
];

export const ProjectSection = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <SectionHeader
          title="Projects"
          subtitle="My Featured Projects"
          description="Here are some of the projects I've worked on. I'm always looking for new projects to work on, so feel free to reach out to me if you have any ideas."
        />
        <div className="mt-8 lg:mt-12 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {portfolioProjects.map(
                  (
                    { title, company, year, link, gitHubLink, image, stacks },
                    projectIndex
                  ) => (
                    <Card
                      key={projectIndex}
                      className="max-w-xs md:max-w-md p-1 md:p-2 hover:-rotate-3 transition duration-300"
                    >
                      <div className="flex flex-col justify-center gap-1.5">
                        <div className="flex gap-3 justify-between items-center text-sm font-sans mt-1 text-primary-offWhite px-4 bg-gradient text-transparent bg-clip-text font-extrabold">
                          <span className="lg:text-base">{title}</span>
                          <span className="text-xs lg:text-sm">{year}</span>
                        </div>
                        <div className="w-full aspect-w-16 aspect-h-9 p-3">
                          <Image
                            src={image}
                            alt={title}
                            className="rounded-lg h-44 w-full bg-cover"
                          />
                        </div>
                        <div className="flex justify-between items-center text-xs lg:text-sm text-primary-offWhite px-4 font-thin font-sans gap-4 tracking-tighter">
                          <span>{company}</span>
                          <span>{stacks}</span>
                        </div>
                        <div className="flex items-center justify-center gap-3 mb-3 mt-1">
                          <a href={link}>
                            <CutCornerButton className="text-xs text-primary-offWhite font-sans">
                              View Project
                            </CutCornerButton>
                          </a>
                          <a
                            href={gitHubLink}
                            className="text-xs hover:underline"
                          >
                            Visit GitHub
                          </a>
                        </div>
                      </div>
                    </Card>
                  )
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
